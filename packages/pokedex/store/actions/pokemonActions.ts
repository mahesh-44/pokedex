import axios from "axios";
import { Dispatch } from "redux";
import {
  PokemonListActionTypes,
  PokemonDetailsActionTypes,
  PokemonListAction,
  PokemonDetailsAction,
} from "./types";

export const fetchPokemonList =
  () => async (dispatch: Dispatch<PokemonListAction>) => {
    try {
      dispatch({ type: PokemonListActionTypes.FETCH_POKEMON_LIST_REQUEST });

      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500",
      );
      const pokemonList = response.data.results.map(
        (pokemon: any, index: number) => ({
          id: index + 1, // Assign a unique ID to each row
          ...pokemon,
        }),
      );

      dispatch({
        type: PokemonListActionTypes.FETCH_POKEMON_LIST_SUCCESS,
        payload: pokemonList,
      });
    } catch (error: any) {
      dispatch({
        type: PokemonListActionTypes.FETCH_POKEMON_LIST_FAILURE,
        payload: error.message,
      });
    }
  };

export const fetchPokemonDetails =
  (id: string) => async (dispatch: Dispatch<PokemonDetailsAction>) => {
    try {
      dispatch({
        type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_REQUEST,
      });

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      const pokemonDetails = response.data;

      dispatch({
        type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS,
        payload: pokemonDetails,
      });
    } catch (error: any) {
      dispatch({
        type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };
