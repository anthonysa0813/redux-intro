import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "./store/slices/pokemon";

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemon);
  console.log({ pokemons });

  useEffect(() => {
    dispatch(getPokemonsThunk());
  }, []);

  return (
    <div class="App">
      <h1>loading: {isLoading ? "True" : "False"}</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemonsThunk(page))}>Next</button>
    </div>
  );
};

export default PokemonApp;
