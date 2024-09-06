import { TPokemonType } from "@/types/pokemonInfo";
import { getPokemonTypeColor } from "@/utils/PokemonUtils";
import React from "react";

type TypeTagProps = {
  type: TPokemonType;
};

const TypeTag: React.FC<TypeTagProps> = ({ type }) => {
  return (
    <p
      style={{ backgroundColor: getPokemonTypeColor(type) }}
      className='px-4 py-1 rounded-lg text-white font-bold'
    >
      {type}
    </p>
  );
};

export default TypeTag;
