import { PokemonListAction, PokemonListActionTypes } from "../actions/types";

interface PokemonListState {
  data: any[]; // Adjust the type as per your Pokémon list data structure
  loading: boolean;
  error: string | null;
}

const initialState: PokemonListState = {
  data: [],
  loading: false,
  error: null,
};

const pokemonListReducer = (
  state = initialState,
  action: PokemonListAction,
): PokemonListState => {
  switch (action.type) {
    case PokemonListActionTypes.FETCH_POKEMON_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PokemonListActionTypes.FETCH_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case PokemonListActionTypes.FETCH_POKEMON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
