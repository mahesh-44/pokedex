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

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  id,
  stats,
  weight,
  height,
  types,
  onBackClick,
}) => {
  const CardStyles = {
    card: {
      border: "1px solid lightgray",
      borderRadius: "5px",
      width: 300,
      height: 400,
      padding: 20,
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      position: "relative" as "relative",
    },
    statsHolder: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    bodyType: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    goBack: {
      position: "absolute" as "absolute",
      cursor: "pointer",
      top: 20,
      left: 20,
    },
    progresBarHolder: {
      width: 200,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
  return (
    <div style={CardStyles.card}>
      <div style={CardStyles.goBack} onClick={onBackClick}>
        Go back
      </div>
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={name}
        width={100}
        height={100}
      />
      <h4>{name}</h4>
      <div style={CardStyles.bodyType}>
        <div>
          <div>Weight</div>
          <div>{weight}</div>
        </div>
        <div>
          <div>Height</div>
          <div>{height}</div>
        </div>
        <div>
          <div>Type</div>
          <div>{types && types[0].type.name}</div>
        </div>
      </div>
      {stats?.map((stat, i) => {
        return (
          <div key={stat.stat.name} style={CardStyles.statsHolder}>
            {stat.stat.name}
            <div style={CardStyles.progresBarHolder}>
              <progress value={stat.base_stat} max="100"></progress>
              &nbsp;{stat.base_stat}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonCard;
