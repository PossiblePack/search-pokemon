export type TFontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export type TPokemonType = 'Fire' |'Water' | 'Normal' | 'Electric' | 'Grass' | 'Ice' | 'Fighting' | 'Poison' | 'Ground' | 'Flying' | 'Psychic' | 'Rock' | 'Bug' | 'Ghost' | 'Dragon' | 'Dark' | 'Steel' | 'Fairy';

export type TAttackInfo = {
    name: string;
    type: TPokemonType;
    damage: number;
}

export type TEvolutionInfo = {
  id: string;
  number: string;
  name: string;
  types: TPokemonType[];
  image: string
} 

export type TPokemonInfo = {
  id: string,
  number: string,
  name: string,
  weight: {
    minimum: string,
    maximum: string
  },
  height: {
    minimum: string,
    maximum: string
  },
  classification: string,
  types: TPokemonType[],
  resistant: TPokemonType[],
  weaknesses: TPokemonType[],
  image: string,
  attacks: {
    fast: TAttackInfo[];
    special: TAttackInfo[];
  },
  evolutions: TEvolutionInfo[];
}

export type TPokemonsItem = {
  id: string;
  number: string;
  name: string;
  types: TPokemonType[];
  image: string;
};