import React, { useState } from "react";
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
  const [value, setValue] = useState<string>(input);
  return (
    <div className='flex flex-col w-full lg:w-[85%] items-center'>
      <div className='flex w-full items-center gap-4 p-4'>
        <input
          type='text'
          className='border-black border-solid border h-10 w-full rounded-lg px-4'
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onKeyDown={async (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              await setInput(value);
              onSearch();
            }
          }}
          disabled={isLoading}
        />
        <button
          type='submit'
          className='bg-redPrimary p-2 rounded-lg text-white'
          onClick={async () => {
            await setInput(value);
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
