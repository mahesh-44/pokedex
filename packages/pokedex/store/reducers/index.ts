import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonListReducer";
import pokemonDetailsReducer from "./pokemonDetailsReducer";

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemonDetails: pokemonDetailsReducer,
});

export default rootReducer;
