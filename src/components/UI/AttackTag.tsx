import { TAttackInfo } from "@/types/pokemonInfo";
import { getPokemonTypeColor } from "@/utils/PokemonUtils";
import React from "react";
import { LuSwords } from "react-icons/lu";

type AttackTagProps = {
  data: TAttackInfo;
};

const AttackTag: React.FC<AttackTagProps> = ({ data }) => {
  const typeColor = getPokemonTypeColor(data.type);
  const textDamageColor = `text-${typeColor}`;
  return (
    <p
      style={{
        backgroundColor: typeColor,
      }}
      className='pl-4 py-1 rounded-lg text-white font-bold flex gap-3 items-center'
    >
      {data.name}

      <p
        style={{
          color: typeColor,
        }}
        className={`bg-white px-[0.25rem] flex gap-1 mr-2 rounded-full items-center text-${textDamageColor}`}
      >
        <LuSwords size={18} />
        {data.damage}
      </p>
    </p>
  );
};

export default AttackTag;
