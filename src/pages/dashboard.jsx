import React from 'react';
import Navbar from './navbar';




export default function Dashboard() {
   

    return (
        <>
          <Navbar/>

            <div className="flex text-center justify-evenly text-white text-3xl p-3">
                <div>
                    <div className="text-4xl font-bold text-blue-300">
                        Generate your new wallet
                    </div>
                    <div className="text-2xl text-gray-400">
                        simple, secure, and fully yours.
                    </div> 
                    <div className="mt-5 text-center gap-4 flex justify-center">
                        <button  onClick={() => window.location.href = '/seed'}
                            className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-purple-400/50"
                        >
                            Create Wallet
                        </button>
                    </div>
                </div>
                <div>Next</div>
            </div>

          
        </>
    );
}
