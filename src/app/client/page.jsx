"use client";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"; //para que podamos hacer peticiones , usesuspensequery -> para colocar algo mientras va cargando

//la consulta de graphql
const query = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      results {
        id
        name
        image
      }
    }
  }
`;

const ClientPage = () => {
  const { data } = useSuspenseQuery(query); //se lo paso para que haga la consulta para obtener los datos
  console.log(data);

  return (
    <div className="grid grid-cols-4">
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img src={character.image} />
        </div>
      ))}
    </div>
  );
};
export default ClientPage;
