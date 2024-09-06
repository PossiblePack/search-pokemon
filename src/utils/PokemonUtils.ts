import { TPokemonType } from "@/types/pokemonInfo"
import router from "next/router"

export const getPokemonTypeColor = (type: TPokemonType) => {
    switch(type){
        case 'Fire':
            return '#FF4422'
        case 'Water':
            return '#3399FF'
        case 'Normal':
            return '#B4B4A5'
        case 'Electric':
            return '#FFCC33'
        case 'Grass':
            return '#77CC55'
        case 'Ice':
            return '#66CCFF'
        case 'Fighting':
            return '#BB5544'
        case 'Poison':
            return '#AA5599'
        case 'Ground':
            return '#DDBB55'
        case 'Flying':
            return '#8899FF'
        case 'Psychic':
            return '#FF5599'
        case 'Rock':
            return '#BBAA66'
        case 'Bug':
            return '#AABB22'
        case 'Ghost':
            return '#6666BB'
        case 'Dragon':
            return '#7766EE'
        case 'Dark':
            return '#775544'
        case 'Steel':
            return '#AAAABB'
        case 'Fairy':
            return '#EE99EE'
    }
}

export const changeId = (searchParams: string, pathName: string, pokemonId: string) => {
    const params = new URLSearchParams(searchParams); // Clone searchParams
    params.set("id", pokemonId); // Update the 'id' parameter

    router.push(`${pathName}?${params.toString()}`); // Push the new URL with updated query params
};