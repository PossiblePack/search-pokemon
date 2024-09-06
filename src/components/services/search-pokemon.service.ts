import { FETCH_POKEMON_BY_ID, POKEMONS_LIST_QUERY } from "@/utils/query";
import { useQuery } from "@apollo/client";

export const useFetchPokemonList = () => {
    
    const { data, loading, error } = useQuery(POKEMONS_LIST_QUERY);
    return { data, loading, error };
};

export const useFetchPokemonById = (id: string) => {
    const { data, loading, error } = useQuery(FETCH_POKEMON_BY_ID(id));
    return { data, loading, error };
};