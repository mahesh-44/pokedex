// types.ts
export enum PokemonListActionTypes {
  FETCH_POKEMON_LIST_REQUEST = "FETCH_POKEMON_LIST_REQUEST",
  FETCH_POKEMON_LIST_SUCCESS = "FETCH_POKEMON_LIST_SUCCESS",
  FETCH_POKEMON_LIST_FAILURE = "FETCH_POKEMON_LIST_FAILURE",
}

export enum PokemonDetailsActionTypes {
  FETCH_POKEMON_DETAILS_REQUEST = "FETCH_POKEMON_DETAILS_REQUEST",
  FETCH_POKEMON_DETAILS_SUCCESS = "FETCH_POKEMON_DETAILS_SUCCESS",
  FETCH_POKEMON_DETAILS_FAILURE = "FETCH_POKEMON_DETAILS_FAILURE",
}

export interface FetchPokemonListRequestAction {
  type: PokemonListActionTypes.FETCH_POKEMON_LIST_REQUEST;
}

export interface FetchPokemonListSuccessAction {
  type: PokemonListActionTypes.FETCH_POKEMON_LIST_SUCCESS;
  payload: any[]; // Adjust the type as per your Pokémon list data structure
}

export interface FetchPokemonListFailureAction {
  type: PokemonListActionTypes.FETCH_POKEMON_LIST_FAILURE;
  payload: string;
}

export interface FetchPokemonDetailsRequestAction {
  type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_REQUEST;
}

export interface FetchPokemonDetailsSuccessAction {
  type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS;
  payload: any; // Adjust the type as per your Pokémon details data structure
}

export interface FetchPokemonDetailsFailureAction {
  type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_FAILURE;
  payload: string;
}

export type PokemonListAction =
  | FetchPokemonListRequestAction
  | FetchPokemonListSuccessAction
  | FetchPokemonListFailureAction;

export type PokemonDetailsAction =
  | FetchPokemonDetailsRequestAction
  | FetchPokemonDetailsSuccessAction
  | FetchPokemonDetailsFailureAction;
