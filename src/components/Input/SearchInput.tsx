import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchInputProps = {
  input: string;
  setInput: (data: string) => void;
  onSearch: () => void;
  isLoading: boolean;
};

const SearchInput: React.FC<SearchInputProps> = ({
  input,
  setInput,
  onSearch,
  isLoading,
}) => {
  return (
    <div className='flex flex-col w-full lg:w-[85%] items-center'>
      <div className='flex w-full items-center gap-4 p-4'>
        <input
          type='text'
          className='border-black border-solid border h-10 w-full rounded-lg px-4'
          placeholder='insert pokemon name to search...'
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={async (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          disabled={isLoading}
        />
        <button
          type='submit'
          className='bg-redPrimary p-2 rounded-lg text-white'
          onClick={async () => {
            onSearch();
          }}
          disabled={isLoading}
        >
          {!isLoading ? (
            <IoSearch size={25} />
          ) : (
            <div className='button-loading'></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
