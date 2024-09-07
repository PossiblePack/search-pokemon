import { TPokemonInfo } from "@/types/pokemonInfo";
import React from "react";
import EvolutionCard from "./EvolutionCard";
import { changeId } from "@/utils/PokemonUtils";
import { usePathname, useSearchParams } from "next/navigation";

type EvolutionsProps = {
  data: TPokemonInfo;
};

const Evolutions: React.FC<EvolutionsProps> = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div className='grid w-[100%] p-4 grid-cols-3 gap-2 border-black border-solid border rounded-lg'>
      {/* current  */}
      <div className='flex justify-center items-center'>
        <EvolutionCard data={data} count={1} />
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
