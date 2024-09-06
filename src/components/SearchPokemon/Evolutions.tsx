import { TPokemonInfo } from "@/types/pokemonInfo";
import React from "react";
import EvolutionCard from "./EvolutionCard";
import { changeId, getPokemonTypeColor } from "@/utils/PokemonUtils";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import TypeTag from "../UI/TypeTag";

type EvolutionsProps = {
  data: TPokemonInfo;
};

const Evolutions: React.FC<EvolutionsProps> = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div className='grid w-[100%] p-4 grid-cols-3 gap-2 border-black border-solid border rounded-lg'>
      <div className='flex justify-center items-center'>
        <div className='w-full flex gap-2 flex-col justify-center items-center'>
          <Image
            src={data.image}
            alt={data.name}
            style={{
              width: "auto",
              height: "40vh",
              justifyContent: "center",
              display: "flex",
              padding: "1rem",
              borderRadius: "50%",
              borderStyle: "solid",
              borderWidth: "2px",
              border: "rgb(0,0,0)",
            }}
            width={120}
            height={120}
          />
          <p className='text-base flex gap-1 font-bold'>
            <span
              style={{
                backgroundColor: getPokemonTypeColor(data.types[0]),
              }}
              className='px-2 text-white rounded-full'
            >
              1
            </span>
            {data.name} #{data.number}
          </p>
          <div className='flex gap-2'>
            {data.types.map((type) => {
              return <TypeTag key={type} type={type} />;
            })}
          </div>
        </div>
      </div>
      {data.evolutions &&
        data.evolutions.map((evolution, idx) => {
          return (
            <>
              {evolution && (
                <div
                  key={evolution.id}
                  className='flex justify-center items-center'
                >
                  <button
                    onClick={() =>
                      changeId(searchParams.toString(), pathname, evolution.id)
                    }
                  >
                    <EvolutionCard data={evolution} count={idx + 2} />
                  </button>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};

export default Evolutions;
