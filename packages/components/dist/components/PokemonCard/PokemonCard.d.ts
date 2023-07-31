import React from "react";
import { Stats, Type } from "./Pokemon.model";
interface PokemonCardProps {
  name: string;
  id: number;
  stats: Stats[];
  weight: number;
  height: number;
  types: Type[];
  onBackClick: () => void;
}
declare const PokemonCard: React.FC<PokemonCardProps>;
export default PokemonCard;
