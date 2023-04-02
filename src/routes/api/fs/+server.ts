import { open } from 'fs';

export const GET = (async () => {

  console.log('🛎 ', 'EP fs');
  
  console.log('🛎 ', 'typeof open', typeof open);
  
  return new Response(String('EP finished'));
}) ;