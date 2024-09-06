import { TEvolutionInfo } from "@/types/pokemonInfo";
import Image from "next/image";
import React from "react";
import TypeTag from "../UI/TypeTag";
import { getPokemonTypeColor } from "@/utils/PokemonUtils";

type EvolutionCardProps = {
  data: TEvolutionInfo;
  count: number;
};

const EvolutionCard: React.FC<EvolutionCardProps> = ({ data, count }) => {
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center'>
      <Image
        src={data.image}
        alt={data.name}
        style={{
          width: "40vw",
          height: "auto",
          justifyContent: "center",
          display: "flex",
          padding: "1rem",
          borderRadius: "50%",
          borderStyle: "solid",
          borderWidth: "2px",
          border: "rgb(0,0,0)",
        }}
        width={120}
        height={30}
      />
      <p className='text-base font-bold flex gap-1'>
        <span
          style={{ backgroundColor: getPokemonTypeColor(data.types[0]) }}
          className='px-2 text-white rounded-full '
        >
          {count}
        </span>
        {data.name} #{data.number}
      </p>
      <div className='flex gap-2'>
        {data.types.map((type) => {
          return <TypeTag key={type} type={type} />;
        })}
      </div>
    </div>
  );
};

export default EvolutionCard;
