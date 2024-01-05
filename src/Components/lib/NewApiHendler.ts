export async function NewApi(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    const halfData = Object.fromEntries(
        Object.entries(data).slice(0, Math.ceil(Object.keys(data).length / 2))
    );
    return halfData
}