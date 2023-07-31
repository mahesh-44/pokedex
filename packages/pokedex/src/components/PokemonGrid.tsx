import React, { useEffect, useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../../store/actions/pokemonActions";
import { RootState } from "../../store/store";

const PokemonGrid = () => {
  // const [pokemonData, setPokemonData] = useState([]);
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: RootState) => state.pokemonList.data);
  const loading = useSelector((state: RootState) => state.pokemonList.loading);
  const error = useSelector((state: RootState) => state.pokemonList.error);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchPokemonList());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Link href={`/pokemon/${params.row.id}`}>{params.value}</Link>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        style={{ maxWidth: 500 }}
        getRowId={(row) => row.name}
        rows={pokemonData}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default PokemonGrid;
