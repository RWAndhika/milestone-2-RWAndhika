import { useState } from "react";
import DisplayPokemon from "../components/DisplayPokemon";
interface Pokemon {
    name: string,
    species: string,
    img: string,
    hp: number,
    attack: number,
    defense: number,
    type: string,
}

const Dashboard = () => {

    const [pokemonName, setPokemonName] = useState<string>("");
    const [pokemonChosen, setPokemonChosen] = useState<Boolean>(false);
    const [pokemon, setPokemon] = useState<Pokemon>({
        name: "",
        species: "",
        img: "",
        hp: 0,
        attack: 0,
        defense: 0,
        type: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value.toLowerCase());
    }

    const searchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })

        try {
            if (!response.ok) {
                setPokemonChosen(false);
                alert(`${pokemonName} not found`)
            } else {
                const data = await response.json();
                setPokemon({
                    name: pokemonName,
                    species: data.species.name,
                    img: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    type: data.types[0].type.name
                });
                setPokemonChosen(true);
            }

        } catch (error) {
            console.log('Error: ', error);
        }
    };

    return (
        <section className="bg-yellow-50 mx-auto md:h-screen">
            <div className="flex items-center justify-center pt-4">
                <img className="w-max h-12" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
            </div>
            <div className="max-w-md mx-auto pt-4">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" placeholder="Search Pokemon..." onChange={handleChange}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                    <button onClick={searchPokemon}
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-column justify-center pt-4">
                {!pokemonChosen ? (
                    <h1>Please choose a pokemon</h1>
                ) : (
                    <DisplayPokemon pokemon={pokemon} />
                )}
            </div>
        </section>

    );
};

export default Dashboard;