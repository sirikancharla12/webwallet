import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-gray-900 p-8 min-h-screen">
                <h1 className="text-4xl font-bold text-white mb-8">Welcome to Your Wallet Setup</h1>

                <div className="text-center text-gray-400 mb-6">
                    <p>Choose the blockchain you'd like to use and create your wallet. </p>
                </div>

                <div className="space-y-8">
                    <div className="text-center bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Solana Wallet</h2>
                            <button onClick={() => window.location.href = '/solana'}
                                className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-purple-400/50"
                            >
                                Create Solana Wallet
                            </button>
                    </div>

                    <div className="text-center bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-green-300 mb-4">Ethereum Wallet</h2>
                            <button onClick={() => window.location.href = '/ethereum'}
                                className="rounded-xl bg-gradient-to-br from-green-500 to-teal-600 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-teal-400/50"
                            >
                                Create Ethereum Wallet
                            </button>
                    </div>
                </div>

               
            </div>
        </>
    );
}
