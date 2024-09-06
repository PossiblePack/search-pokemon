// import { getPokemonTypeColor } from "@/utils/PokemonUtils";
import Image from "next/image";
import React from "react";
import TypeTag from "./TypeTag";

type PokemonCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  return (
    <div>
      <div className='w-full flex flex-col justify-between p-auto align-between'>
        <div className='h-[300px]'>
          <Image
            src={data.image}
            alt={data.name}
            style={{
              width: "auto",
              height: "100%",
              justifyContent: "center",
              display: "flex",
              padding: "1rem",
            }}
            width={100}
            height={30}
          />
        </div>
        <div className='h-full px-4 mb-2'>
          <div className='flex justify-between'>
            <p className=' text-xl font-bold'>{data.name}</p>
            <p className=''>{`#${data.number}`}</p>
          </div>
          <div className='flex gap-2'>
            <p className='py-1 rounded-lg text-base font-bold'>types: </p>
            <div className='flex gap-2'>
              {data.types.map((type: string) => {
                return <TypeTag type={type} key={type} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
