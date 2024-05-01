
const DisplayPokemon = (props: any) => {
    return (
        <>
            <div className="w-2/5 max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-center" >
                    <img className="h-300 rounded-t-lg" src={props.pokemon.img} alt="pokemon image" />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.pokemon.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Species: {props.pokemon.species}<br />
                        Hp: {props.pokemon.hp}<br />
                        Attack: {props.pokemon.attack}<br />
                        Defense: {props.pokemon.defense}<br />
                        Type: {props.pokemon.type}
                    </p>
                </div>
            </div>
        </>
    );
};

export default DisplayPokemon;