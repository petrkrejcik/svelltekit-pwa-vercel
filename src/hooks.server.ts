/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {
  console.log('🛎 ', 'error', error);
  return {
    message: 'Whoops!',
    code: error.code ?? 'UNKNOWN'
  };
}