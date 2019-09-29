import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const GRAPHQL_URL = 'http://localhost:5001/graphql'

const fetchQuery = async (operation, variables) => {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return await response.json();
};

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;
