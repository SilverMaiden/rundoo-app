import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// Note: this uses a path relative to the project's
// root directory, which is the current working directory
// if the server is executed using `npm run`.
const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });


const suppliers = [
    {
        name: 'AceHardware',
        logoUrl: 'www.someurl.com',
        address: '780 E El Camino Real, Sunnyvale, CA 94087'
    },
    {
        name: 'AceHardware2',
        logoUrl: 'www.someurl.com',
        address: '780 E El Camino Real, Sunnyvale, CA 94087'
    },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves suppliers from the "suppliers" array above.
const resolvers = {
    Query: {
        suppliers: () => suppliers,
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);