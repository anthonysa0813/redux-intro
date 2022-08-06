import axios from "axios";
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemonsThunk = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //! petición http

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
