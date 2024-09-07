import { gql } from "@apollo/client";

export const POKEMONS_LIST_QUERY = gql`{
    pokemons(first: 20) {
        id
        number
        name
        types
        image
    }
}
`;

export const FETCH_POKEMON_QUERY =  gql`
    query pokemon($name: String, $id: String) {
    pokemon(name: $name, id: $id) {
        id
        number
        name
        weight {
            minimum
            maximum
        }
        height {
            minimum
            maximum
        }
        classification
        types
        resistant
        weaknesses
        image
        attacks {
            fast {
            name
            type
            damage
            }
            special {
            name
            type
            damage
            }
        }
        evolutions {
            id
            number
            name
            types
            image
        }
    }
}
`