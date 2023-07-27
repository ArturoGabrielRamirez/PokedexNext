export const url = "https://pokeapi.co/api/v2/pokemon/";

type TypesColorChips = {
    [key: string]: string;
}

type TypesColorCards = {
    [key: string]: string;
}

export const typesColorChips: TypesColorChips = {
    bug: "bg-[#d9f99d]",
    dark: "bg-[#020617]",
    dragon: "bg-[#5b21b6]",
    electric: "bg-[#fde047]",
    fairy: "bg-[#ec4899]",
    fighting: "bg-[#7f1d1d]",
    fire: "bg-[#fb923c]",
    flying: "bg-[#7dd3fc]",
    ghost: "bg-[#4a044e]",
    grass: "bg-[#15803d]",
    ground: "bg-[#fed7aa]",
    ice: "bg-[#e0f2fe]",
    normal: "bg-[#d6d3d1]",
    poison: "bg-[#a21caf]",
    psychic: "bg-[#fb7185]",
    rock: "bg-[#854d0e]",
    steel: "bg-[#737373]",
    water: "bg-[#1e40af]",
}

export const typesColorCards: TypesColorCards = {
    bug: "from-[#d9f99d]",
    dark: "from-[#020617]",
    dragon: "from-[#5b21b6]",
    electric: "from-[#fde047]",
    fairy: "from-[#ec4899]",
    fighting: "from-[#7f1d1d]",
    fire: "from-[#fb923c]",
    flying: "from-[#7dd3fc]",
    ghost: "from-[#4a044e]",
    grass: "from-[#15803d]",
    ground: "from-[#fed7aa]",
    ice: "from-[#e0f2fe]",
    normal: "from-[#d6d3d1]",
    poison: "from-[#a21caf]",
    psychic: "from-[#fb7185]",
    rock: "from-[#854d0e]",
    steel: "from-[#737373]",
    water: "from-[#1e40af]",
}


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
  
    return Promise.all(result);
}


