# Firebase Auth and Firestore running in SvelteKit during SSR

## TODO

- [ ] Login on the client to be able to query Firestore client-side

## Auth flow

1. User signs in via Google popup.
2. The `idToken` and `refreshToken` are saved into the cookies.

## SSR

A server needs to be able to query Firestore in order to perform the queries and return complete HTML page with results from Firestore.

1. When a client sends a request to the server (e.g. homepage) it sends also the cookies `idToken` and `refreshToken`.
2. The server calls `verifyIdToken` on received `idToken`.
3.

- A) If the token is valid then it creates a new customToken via `createCustomToken` and signs in via `signInWithCustomToken` with that `customToken`.
- B) If the token is not valid it tries to exchange the `refreshToken` for new `idToken` via [REST](https://firebase.google.com/docs/reference/rest/auth/#section-refresh-token) endpoint.
  - B1) If the exchange is successful the server sets the newly received `idToken` into the cookie and continues with A)
  - B2) If the exchange is not successful the user is redirected to login page

4. All server requests are now signed with valid custom token and the server can query Firebase and return full HTML
