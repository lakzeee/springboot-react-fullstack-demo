
export async function fetchWrapper(url: string, options: RequestInit) {
    try{
        const res = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if(!res.ok) {
            throw new Error(`${res.status} ${res.statusText} ${await res.text()}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${url} with options ${options}`, error);
    }
}
