
import { PokemonQueryData } from "@/types/pokemonInfo";
import { FETCH_POKEMON_QUERY, POKEMONS_LIST_QUERY } from "@/utils/query";
import { useLazyQuery, useQuery } from "@apollo/client";

export const useFetchPokemonList = () => {
    const { data, loading, error } = useQuery(POKEMONS_LIST_QUERY);
    return { data, loading, error };
};

export const useFetchPokemonById = (id: string) => {
    const { data, loading, error } = useQuery(FETCH_POKEMON_QUERY, { variables: { id: id } });
    return { data, loading, error };
};


export const useSearchPokemon = (onCompleted: (data: PokemonQueryData) => void) => {
    const [fetchPokemon, { loading}] = useLazyQuery(
    FETCH_POKEMON_QUERY,
    {
        onCompleted(data) {
            onCompleted(data)
        },
    })
    return {fetchPokemon, loading}
}