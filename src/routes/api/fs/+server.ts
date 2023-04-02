import { readFileSync } from 'fs';

export const GET = (async () => {

  console.log('🛎 ', 'EP fs');

  const __filename = new URL(import.meta.url).pathname;

  const content = readFileSync(__filename, 'utf8');
  
  console.log('🛎 ', 'content', content);

  return new Response(String('EP finished'));
}) ;