import axios from "axios";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { PokemonDetails } from "../../model/PokemonDetails.model";
import { PokemonCard } from "@my-monorepo/components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetails } from "../../../store/actions/pokemonActions";
import { RootState } from "../../../store/store";

const PokemonData = () => {
  const router = useRouter();
  const { id } = router.query;
  // const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);
  const dispatch = useDispatch();
  const pokemonData = useSelector(
    (state: RootState) => state.pokemonDetails.data,
  );
  const loading = useSelector(
    (state: RootState) => state.pokemonDetails.loading,
  );
  const error = useSelector((state: RootState) => state.pokemonDetails.error);

  useEffect(() => {
    if (id) {
      //@ts-ignore
      dispatch(fetchPokemonDetails(id as string));
    }
  }, [dispatch, id]);

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(pokemonData);
  return (
    <div>
      <PokemonCard {...pokemonData} id={id} onBackClick={handleBack} />
    </div>
  );
};

export default PokemonData;
