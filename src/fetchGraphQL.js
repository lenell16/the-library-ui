async function fetchGraphQL(text, variables) {
  const response = await fetch('https://the-library.hasura.app/v1beta1/relay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;