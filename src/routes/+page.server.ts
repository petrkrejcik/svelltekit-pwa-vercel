import type { RequestEvent } from "@sveltejs/kit";

export function load(event: RequestEvent) {
  const userAgent = event.request.headers.get('user-agent')
  
  return {
    userAgent
  };
}