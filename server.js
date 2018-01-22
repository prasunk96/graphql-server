import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './src/schema';

const GRAPHQL_PORT = 80;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json() ? bodyParser.json() : {}, graphqlExpress({ schema }));
graphQLServer.use('/', graphiqlExpress({ endpointURL: '/graphql' }));
// graphQLServer.use('/z', graphiqlExpress({ endpointURL: '/z' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running`
  )
);