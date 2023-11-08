import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoadingSkeleton = () => {
    // You can customize the skeleton UI according to your design
    const arr = [0,1,2,3,4,5,6,7,8,9,10];
    return (
        <>
            {
                arr.map(()=>(
                    <tr className="animate-pulse border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="h-8 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        </th>
                        <td className="h-8 px-6 py-4">
                        </td>
                        <td className="h-8 px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        </td>
                        <td className="h-8 px-6 py-4">
                        </td>
                        <th scope="row" className="h-8 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        </th>
                        <td className="h-8 px-6 py-4">
                        </td>
                        <td className="h-8 px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        </td>
                        <td className="h-8 px-6 py-4">
                        </td>
                        <td className="h-8 px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        </td>
                        <td className="h-8 px-6 py-4">
                        </td>
                    </tr>
                ))
            }
        </>
    );
};

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/users');
                setData(res?.data?.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#111827] relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        S.No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Profile Pic
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Gender
                    </th>
                    <th scope="col" className="px-6 py-3">
                        E-mail
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Domain
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        IP
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Address
                    </th>
                </tr>
                </thead>
                <tbody>
                {loading ? (
                    // Show loading skeleton while data is being fetched
                    <LoadingSkeleton />
                ) : (
                    // Show data rows when data is available
                    data?.map((single) => (
                        <tr className="border-b border-gray-200 dark:border-gray-700" key={single.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {single.id}
                            </th>
                            <td className="px-6 py-4">
                                <img src={single.image} alt={''} className={'w-10 h-10 mx-auto'} />
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {single.firstName}
                            </td>
                            <td className="px-6 py-4">
                                {single.lastName}
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {single.gender}
                            </th>
                            <td className="px-6 py-4">
                                {single.email}
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {single.username}
                            </td>
                            <td className="px-6 py-4">
                                {single.domain}
                            </td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {single.ip}
                            </td>
                            <td className="px-6 py-4">
                                {single.address.address}, {single.address.city}
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default App;