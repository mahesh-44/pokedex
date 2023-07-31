import { Inter } from "next/font/google";
import PokemonGrid from "../components/PokemonGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Pokédex</h1>
      <PokemonGrid />
    </div>
  );
}
