import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <section className="bg-yellow-50 dark:bg-gray-900 mx-auto md:h-screen">
            <div className="gap-4 flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img className="w-max h-12" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
                <div className="flex flex-row gap-4">
                    <button onClick={() => {navigate('/login')}}
                        className="min-w-28 text-yellow-400 bg-blue-700 bg-primary-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Login
                    </button>
                    <button onClick={() => {navigate('/register')}}
                        className="min-w-28 text-yellow-400 bg-blue-700 bg-primary-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Register
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;