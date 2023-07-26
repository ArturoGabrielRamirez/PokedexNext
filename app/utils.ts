export const url = "https://pokeapi.co/api/v2/pokemon/";

export const getData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;

}

export const getDetails = async (data: any) => {

    const result = data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
    })
    console.log(result);
    return Promise.all(result);
}


