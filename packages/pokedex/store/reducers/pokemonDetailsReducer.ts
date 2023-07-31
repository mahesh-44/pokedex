import {
  PokemonDetailsAction,
  PokemonDetailsActionTypes,
} from "../actions/types";

interface PokemonDetailsState {
  data: any; // Adjust the type as per your Pokémon details data structure
  loading: boolean;
  error: string | null;
}

const initialState: PokemonDetailsState = {
  data: null,
  loading: false,
  error: null,
};

const pokemonDetailsReducer = (
  state = initialState,
  action: PokemonDetailsAction,
): PokemonDetailsState => {
  switch (action.type) {
    case PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonDetailsReducer;
