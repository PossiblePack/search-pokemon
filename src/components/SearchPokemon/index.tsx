import React, { useState } from "react";
import SearchInput from "../Input/SearchInput";
import PokemonCard from "../UI/PokemonCard";
import PokemonResult from "./PokemonResult";
import { usePathname, useSearchParams } from "next/navigation";
import { changeId } from "@/utils/PokemonUtils";
import { TPokemonsItem } from "@/types/pokemonInfo";
import { useFetchPokemonList } from "../services/search-pokemon.service";
import LoadingCard from "./LoadingCard";
import { useLazyQuery } from "@apollo/client";
import { FETCH_POKEMON_BY_NAME } from "@/utils/query";
import { SiPokemon } from "react-icons/si";
import { IoChevronBackOutline } from "react-icons/io5";
import router from "next/router";

const SearchPokemonComponent = () => {
  const pathname = usePathname();
  const { data, loading } = useFetchPokemonList();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [searchInput, setSearchInput] = useState<string>("");
  const [isnotFound, setIsNotfound] = useState<boolean>(false);
  const [fetchPokemon, { loading: loadingSearch }] = useLazyQuery(
    FETCH_POKEMON_BY_NAME(searchInput),
    {
      onCompleted: (data) => {
        // This will run when data is successfully fetched
        console.log("Data fetched successfully:", data);
        if (data.pokemon !== null) {
          changeId(searchParams.toString(), pathname, data.pokemon.id);
          setIsNotfound(false);
        } else {
          router.push(pathname);
          setIsNotfound(true);
        }
      },
    }
  );

  const handleSearch = async () => {
    if (searchInput) {
      await fetchPokemon();
    } else {
      alert("please insert pokemon name to search");
    }
  };

  return (
    <div className='flex w-full flex-col items-center  justify-center'>
      <SearchInput
        input={searchInput}
        setInput={setSearchInput}
        onSearch={handleSearch}
        isLoading={loadingSearch}
      />
      {id ? (
        <PokemonResult />
      ) : !loading ? (
        !isnotFound ? (
          <div className='w-full lg:w-[85%] p-4 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2'>
            {data.pokemons.map((pokemon: TPokemonsItem) => {
              return (
                <button
                  className='w-full border-black border-solid border rounded-lg'
                  key={pokemon.id}
                  onClick={() =>
                    changeId(searchParams.toString(), pathname, pokemon.id)
                  }
                >
                  <PokemonCard data={pokemon} />
                </button>
              );
            })}
          </div>
        ) : (
          <div className='w-full lg:w-[85%] flex flex-col justify-items-center'>
            <div className='flex flex-col min-h-[75vh] gap-2'>
              <div className='m-2 p-4 grid w-full bg-slate-100 border-black border-solid border rounded-lg justify-center'>
                <p className='text-xl font-bold '>
                  Not found Pokémon That Match Your Search!
                </p>
                <SiPokemon size={150} className='w-full' />
                <button
                  onClick={() => setIsNotfound(false)}
                  className='w-full flex justify-center gap-1 items-center'
                >
                  <IoChevronBackOutline size={25} />
                  Go back to Pokemon List
                </button>
              </div>
            </div>
          </div>
        )
      ) : (
        <LoadingCard />
      )}
    </div>
  );
};

export default SearchPokemonComponent;
