import React from "react";
interface PokemonCardProps {
  name: string;
  imageUrl: string;
  type: string;
  id: number;
}
declare const PokemonCard: React.FC<PokemonCardProps>;
export default PokemonCard;
