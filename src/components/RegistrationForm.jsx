import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const RegistrationhtmlhtmlForm = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = JSON.stringify(Object.fromEntries(formData));
        const response = await axios.post('http://localhost:4000/users', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const responseData = response.data.data;
        if (responseData.form_errors) {
            setErrors(responseData.form_errors);
        } else {
            setErrors({});
            navigate('/', { replace: false })
        }
    };

    return (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <form method="post" onSubmit={handleSubmit}>
                <div className="bg-white rounded-xl shadow dark:bg-neutral-900">

                    <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <label className="sr-only">
                                    Photo
                                </label>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
                                    <img className="-mt-8 relative z-10 inline-block size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-neutral-900" src="https://preline.co/assets/img/160x160/img1.jpg" alt="Avatar" />

                                    <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                            Upload photo
                                        </button>
                                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="name" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Name
                                </label>
                                <input id="name" name="name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter name" />
                                {errors.name &&
                                    <div className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-red-800">{errors.name}</div>
                                }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="nickname" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Nickname
                                </label>
                                <input id="nickname" name="nickname" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter nickname" />
                                {errors.nickname &&
                                    <div className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-red-800">{errors.nickname}</div>
                                }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Email
                                </label>
                                <input id="email" name="email" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter nickname" />
                                {errors.email &&
                                    <div className="inline-block text-sm font-medium  text-gray-800 mt-2.5 dark:text-red-800">{errors.email}</div>
                                }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="city" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    City
                                </label>
                                <input id="city" name="city" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter city" />
                                {errors.city &&
                                    <div className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-red-800">{errors.city}</div>
                                }
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="about" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                    About
                                </label>
                                <textarea id="about" name="about" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder=""></textarea>
                                {errors.about &&
                                    <div className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-red-800">{errors.about}</div>
                                }
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center gap-x-2">
                            <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
};

export default RegistrationhtmlhtmlForm;