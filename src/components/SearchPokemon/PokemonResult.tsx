import React from "react";
import Image from "next/image";
import TypeTag from "../UI/TypeTag";
import { TAttackInfo, TPokemonType } from "@/types/pokemonInfo";
import TextInfo from "../UI/TextInfo";
import AttackTag from "../UI/AttackTag";
import Evolutions from "./Evolutions";
import { useSearchParams } from "next/navigation";
import { useFetchPokemonById } from "../services/search-pokemon.service";
import LoadingCard from "../UI/LoadingCard";

const PokemonResult: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data, loading } = useFetchPokemonById(id!);
  return (
    <div className='w-full lg:w-[84%] flex flex-col mb-4'>
      {!loading ? (
        data &&
        data.pokemon && (
          <div className='w-full flex flex-col justify-items-center'>
            <div className='px-[8%]'>
              <div className='flex flex-col min-h-[60vh] gap-2  m-2 py-2 justify-center items-start bg-slate-100 border-black border-solid border rounded-lg'>
                <p className='text-3xl font-bold w-full justify-center flex'>
                  {data.pokemon.name} #{data.pokemon.number}
                </p>
                <div className='grid md:flex gap-2'>
                  <div className='w-full flex justify-center items-center'>
                    <Image
                      src={data.pokemon.image}
                      alt={data.pokemon.name}
                      style={{
                        width: "40vw",
                        height: "auto",
                        justifyContent: "center",
                        display: "flex",
                        padding: "1rem",
                      }}
                      width={120}
                      height={30}
                    />
                  </div>
                  <div className='grid w-full xs:grid-cols-2 md:grid-cols-1 p-6 gap-3 justify-center'>
                    <TextInfo label='Information'>
                      <p className='font-semibold'>
                        Weight: {data.pokemon.weight.minimum} -{" "}
                        {data.pokemon.weight.maximum}
                      </p>
                      <p className='font-semibold'>
                        Height: {data.pokemon.height.minimum} -{" "}
                        {data.pokemon.height.maximum}
                      </p>
                    </TextInfo>
                    <TextInfo label='Classification'>
                      <div className='flex gap-2 font-semibold'>
                        <p>{data.pokemon.classification}</p>
                      </div>
                    </TextInfo>
                    <TextInfo label='Types'>
                      <div className='flex gap-2 flex-wrap'>
                        {data.pokemon.types.map((type: TPokemonType) => {
                          return <TypeTag type={type} key={type} />;
                        })}
                      </div>
                    </TextInfo>
                    <TextInfo label='Resistant'>
                      <div className='flex gap-2 flex-wrap'>
                        {data.pokemon.resistant.map((type: TPokemonType) => {
                          return <TypeTag type={type} key={type} />;
                        })}
                      </div>
                    </TextInfo>
                    <TextInfo label='Weaknesses'>
                      <div className='flex gap-2 flex-wrap'>
                        {data.pokemon.weaknesses.map((type: TPokemonType) => {
                          return <TypeTag type={type} key={type} />;
                        })}
                      </div>
                    </TextInfo>
                  </div>
                </div>
                <div className='grid md:flex gap-2'>
                  <div className='grid w-full xs:grid-cols-2 md:grid-cols-1 p-6  justify-center'>
                    <p className='text-xl font-bold'>Attacks</p>
                    <div className='grid xl:flex gap-8'>
                      <TextInfo label='Fast' fontSize='base'>
                        <div className='flex gap-2 flex-wrap'>
                          {data.pokemon.attacks.fast.map(
                            (type: TAttackInfo) => {
                              return <AttackTag key={type.name} data={type} />;
                            }
                          )}
                        </div>
                      </TextInfo>
                      <TextInfo label='Special' fontSize='base'>
                        <div className='flex gap-2 flex-wrap'>
                          {data.pokemon.attacks.special.map(
                            (type: TAttackInfo) => {
                              return <AttackTag key={type.name} data={type} />;
                            }
                          )}
                        </div>
                      </TextInfo>
                    </div>
                  </div>
                </div>
                <div className='grid w-full md:flex gap-2'>
                  <div className='grid w-full xs:grid-cols-2 md:grid-cols-1 p-6 gap-3 justify-center'>
                    <p className='text-xl font-bold'>Evolutions</p>
                    <Evolutions data={data.pokemon} />
                  </div>
                </div>
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

export default PokemonResult;
