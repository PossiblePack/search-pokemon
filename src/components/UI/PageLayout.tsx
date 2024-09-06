import React, { ReactNode } from "react";
import { MdCatchingPokemon } from "react-icons/md";

type PageLayoutProps = {
  children?: ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center '>
      <div className='h-full w-full grid items-center justify-items-center  font-[family-name:var(--font-geist-sans)]'>
        <main className='flex flex-col h-full w-full items-center sm:items-start justify-between'>
          <div className='h-[7vh] w-full flex gap-2 justify-start items-center px-8 bg-black text-white'>
            <div className='w-fit bg-white rounded-full'>
              <MdCatchingPokemon size={35} fill='rgb(250,0,0)' />
            </div>
            <p className='text-2xl font-extrabold'>Search Pokemon</p>
          </div>
          <div className='px-4 min-h-[91vh] w-full justify-center flex flex-col'>
            {children}
          </div>
        </main>
      </div>
      <footer className='h-full w-full md:flex items-center px-8 justify-between bg-black text-white'>
        <p>search-pokemon app @2024</p>
        <p>&#169; Sahadsawad Chailuan</p>
      </footer>
    </div>
  );
};

export default PageLayout;
