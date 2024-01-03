// Importa ApolloClient, HttpLink e InMemoryCache desde el paquete "@apollo/client".
// ApolloClient es el núcleo del cliente Apollo, utilizado para interactuar con tu API GraphQL.
// HttpLink es un enlace que permite enviar operaciones GraphQL a través de una conexión HTTP.
// InMemoryCache es un sistema de caché que almacena los resultados de tus consultas GraphQL.
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// Importa la función 'registerApolloClient' desde "@apollo/experimental-nextjs-app-support/rsc".
// Esta función se usa para registrar tu cliente Apollo en una aplicación Next.js, especialmente cuando se usa React Server Components (RSC).
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// Exporta la función 'getClient' que se obtiene de 'registerApolloClient'.
// 'getClient' se utiliza para crear una nueva instancia de ApolloClient.
// Esta función se invoca para configurar el cliente Apollo específicamente para tu aplicación.
export const { getClient } = registerApolloClient(() => {
  // Retorna una nueva instancia de ApolloClient.
  return new ApolloClient({
    // Configura la caché del cliente con 'InMemoryCache'.
    // Esto permite que Apollo almacene y reutilice los resultados de las consultas GraphQL en memoria.
    cache: new InMemoryCache(),

    // Configura el enlace HTTP para interactuar con tu API GraphQL.
    // 'HttpLink' se utiliza para definir cómo ApolloClient se comunicará con tu API GraphQL.
    link: new HttpLink({
      // Establece la URI de tu API GraphQL. En este caso, se usa la API de "Rick and Morty".
      // Puedes reemplazar esta URL con la de tu propio servicio GraphQL.
      uri: "https://rickandmortyapi.com/graphql",

      // Aquí hay un comentario sobre cómo deshabilitar la caché de resultados si lo deseas.
      // Esta opción puede ser útil si necesitas obtener datos siempre frescos desde el servidor.
      // Nota: deshabilitar la caché no funcionará si estás renderizando tu página con `export const dynamic = "force-static"`.
      // fetchOptions: { cache: "no-store" },
    }),
  });
});
