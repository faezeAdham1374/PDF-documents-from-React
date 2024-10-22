import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-teal-700 text-white shadow-lg w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center">
                    <span className="font-semibold text-xl tracking-tight">My Logo</span>
                </div>
                <nav className="flex space-x-6">
                    <Link
                        to="/"
                        className="text-gray-100 hover:text-gray-300 font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/descriptions"
                        className="text-gray-100 hover:text-gray-300 font-medium"
                    >
                        Descriptions
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
