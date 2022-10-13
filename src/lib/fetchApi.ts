// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchApi = (uri: string, options: Omit<RequestInit, 'body'> & { body?: any } = {}) => {
	fetch(`/api/${uri}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			...(options.headers || {})
		},
		...options,
		...(options.body && { body: JSON.stringify(options.body) })
	});
};
