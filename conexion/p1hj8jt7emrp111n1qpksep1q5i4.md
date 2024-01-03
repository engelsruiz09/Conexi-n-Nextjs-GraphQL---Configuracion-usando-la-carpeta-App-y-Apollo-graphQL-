> **Conexión** **Nextjs** **&** **GraphQL** **-** **Configuracion**
> **usando** **la** **carpeta** **App** **(y** **Apollo**
> **graphQL)**![](./1l1ooe3c.png){width="7.465033902012248in"
> height="3.774220253718285in"}
>
> **GUIA** **DE** **INSTALACION**

Para crear un componente basico se usa \"rfce\"

Para comunicar next.js con un backend de graphql necesitamos de la
biblioteca de \"APOLO\"

Los paquetes que se necesitan para instalar next.js junto a apolo pide
dos paquetes

El \"@apollo/client@rc \" esta en un version de realese candidate es
como una version

Antes de lanzarse la version estable

El \"apollo/experimental-nextjs-app-support\" es para que podamos tener
soporte

![](./lc0xkpcr.png){width="6.922880577427821in"
height="0.7715255905511811in"}De la carpeta app dentro de apolo

> **\#** **Instalación** **y** **ejecución** **del** **proyecto**
>
> Sigue estos pasos para obtener una copia delproyecto y ejecutarlo en
> tu entorno localpara desarrollo y pruebas.
>
> **\##** **Prerrequisitos**
>
> Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu
> sistema. Puedes descargarlos e instalarlos desde \[Node.js
> officialwebsite\](https://nodejs.org/).
>
> **\##** **Clonación** **del** **repositorio**
>
> Para clonar elrepositorio y acceder aldirectorio delproyecto, ejecuta
> los siguientes comandos en tu terminal:
>
> \`\`\`bash
>
> git clone
> https://github.com/engelsruiz09/Conexion-Nextjs-GraphQL\-\--Configuracion-usando-la-carpeta-App-y-Apollo-graphQL-.git
>
> cd
> Conexion-Nextjs-GraphQL\-\--Configuracion-usando-la-carpeta-App-y-Apollo-graphQL-
>
> **Client.js**

En este apartado en resumen nos va permitir utilizar desde backend o
digamosle desde

![](./chhzjbro.png){width="7.465033902012248in"
height="4.107853237095363in"}\"server components \" peticiones de
graphql

El comando para corre la aplicación es : npm run
dev![](./gv34stxi.png){width="7.465033902012248in"
height="3.28419728783902in"}

Esto es una forma de obtener los datos desde backend porque todo esto es
componente de servidor utilizando graphql

> **PARA** **SOLUCIONAR** **EL** **PROBLEMA** **DE** **MODULE** **NOT**
> **FOUND:** **CANT** **RESOLVE**

\'@/lib/client\'

Se uso esto :

> **GRAPHQL** **Y** **ENDOPOINST**

GraphQL es un lenguaje de consulta para APIs y un tiempo de ejecución
del lado del servidor para ejecutar esas consultas especificando tus
estructuras de datos. Fue desarrollado internamente por Facebook en 2012
antes de ser liberado públicamente en 2015. Ofrece una alternativa más
eficiente y flexible a la arquitectura REST tradicional.

En GraphQL, se define un esquema que describe todas las operaciones
posibles (consultas y mutaciones) que se pueden realizar en la API, así
como los tipos de datos que se pueden recuperar. Esto permite a los
clientes pedir exactamente lo que necesitan y nada más, lo que puede
reducir la cantidad de datos que necesitan transferir.

Aquí hay algunas características clave de GraphQL:

> **.** Consulta Exacta: Los clientes pueden especificar exactamente qué
> campos necesitan en una consulta, lo que evita recibir datos
> innecesarios.
>
> **.** Obtener Muchos Recursos en una Sola Solicitud: En lugar de hacer
> múltiples llamadas a la red para diferentes recursos, como se hace en
> REST, GraphQL puede obtener todos los recursos necesarios en una sola
> consulta.![](./y4esxsie.png){width="2.627357830271216in"
> height="2.8358781714785652in"}
>
> **.** Tipos Fuertemente Tipados: Todo en GraphQL se define mediante un
> sistema de tipos. Cada tipo describe qué campos se pueden consultar y
> qué tipo de datos se devolverán.
>
> **.** Introspección: GraphQL APIs incluyen la capacidad de
> introspección, que permite que el cliente consulte qué operaciones y
> tipos son soportados por la API.

En el contexto de GraphQL, el término \"endpoint\" se usa de manera
diferente que en REST. Mientras que en una API REST podrías tener
múltiples endpoints (URLs) para diferentes recursos, en GraphQL
típicamente tienes un solo endpoint HTTP (por ejemplo, /graphql) donde
todas las consultas son enviadas mediante peticiones POST. Las
operaciones específicas, como las consultas para recuperar datos o las
mutaciones para cambiar datos, se especifican dentro del cuerpo de la
petición.

Aquí hay un ejemplo de cómo podría lucir una consulta GraphQL a un
endpoint:

Y esta consulta se enviaría a un único endpoint de GraphQL,
independientemente de la complejidad o el número de recursos que se
estén solicitando.

> **USE** **CLIENT**

El use client no puede llamar funciones de backend, no puede llamar una
funcion asyncrona, en componente no puede con un async, se necesita
importar de otra forma -\> se necesita un contexto un wrapper es muy
comun utilizarlo cuando se utilizan bibliotecas del lado del cliente -\>
un apolowrapper

El apollo appprovider viene justo del paquete nextexperimentalsupport
