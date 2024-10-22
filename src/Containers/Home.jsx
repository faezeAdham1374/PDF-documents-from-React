import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import PdfDocument from '../Components/PdfDocument';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingPdf, setLoadingPdf] = useState(false);
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        setCurrentDateTime(formattedDateTime);
    }, []);

    const generatePDF = async () => {
        setLoadingPdf(true);
        const blob = await pdf(<PdfDocument todos={todos} />).toBlob();
        saveAs(blob, `todolist(${currentDateTime})`);
        if (blob) {
            alert('pdf is ready!')
        }
        setLoadingPdf(false);
    };

    useEffect(() => {
        // Fetching data from API
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='container mx-auto mt-8 animate-pulse bg-slate-100 rounded-xl'>
                <p className="text-center text-teal-600 text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-8 lg:px-0 px-3">
            <div className='flex my-4 justify-between items-end'>
                <h1 className='font-bold text-xl text-gray-600'>List of todos</h1>
                <button disabled={loadingPdf} onClick={() => generatePDF()} className={`bg-teal-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-200 ${loadingPdf && "bg-teal-100"}`}>
                    Export PDF {loadingPdf && '...'}
                </button>

            </div>
            <div className="shadow-lg rounded-lg overflow-hidden">
                <div className="max-h-[70vh] overflow-y-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-teal-700 text-white sticky top-0">
                            <tr>
                                <th className="w-1/12 py-3 px-4 text-left">ID</th>
                                <th className="w-1/12 py-3 px-4 text-left">User ID</th>
                                <th className="w-6/12 py-3 px-4 text-left">Title</th>
                                <th className="w-2/12 py-3 px-4 text-left">Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.length > 0 && todos.map(todo => (
                                <tr key={todo.id} className="border-b">
                                    <td className="py-3 px-4">{todo.id}</td>
                                    <td className="py-3 px-4">{todo.userId}</td>
                                    <td className="py-3 px-4">{todo.title}</td>
                                    <td className="py-3 px-4">
                                        {todo.completed ? (
                                            <span className="text-green-500 font-semibold">Yes</span>
                                        ) : (
                                            <span className="text-red-500 font-semibold">No</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
