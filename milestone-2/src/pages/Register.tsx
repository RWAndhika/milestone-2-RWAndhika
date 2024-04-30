import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const initialValues = {
        name: "",
        password: ""
    }

    const navigate = useNavigate();

    const registerSchema = Yup.object().shape({
        name: Yup.string().required("Required"),

        password: Yup.string().required("Required"),
    });

    const handleRegister = (name: string, password: string) => {
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        alert('Register successful');
    }

    return (
        <section className="bg-yellow-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-max h-8 mr-2" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
                    Pokedex
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register Account
                        </h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={registerSchema}
                            onSubmit={(values) => {
                                handleRegister(values.name, values.password)
                            }}
                        >
                            <Form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Name:
                                        </label>
                                    <Field type="text" id="name" name="name" placeholder="Enter your name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div>
                                    <label htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Password:
                                        </label>
                                    <Field type="password" id="password" name="password" placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <ErrorMessage name="password" component="div" />
                                </div>
                                <button type="submit"
                                    className="w-full text-white bg-blue-700 bg-primary-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Register
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a onClick={() => navigate('/login')} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;