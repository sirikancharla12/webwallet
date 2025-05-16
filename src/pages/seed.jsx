import React, { useState, useEffect } from 'react';
import { generateMnemonic } from 'bip39';
import Navbar from './navbar';

const seedphrase = () => {
  const mnemonic = generateMnemonic();
  return mnemonic;
};

export default function Seed() {
  const [mnemonic, setMnemonic] = useState('');
  const [copied, setCopied] = useState(false); 

  const generateSeedPhrase = () => {
    const generatedSeed = seedphrase();
    console.log(generatedSeed);
    setMnemonic(generatedSeed);
  };

  useEffect(() => {
    generateSeedPhrase();
  }, []);

  const copy = () => {
    navigator.clipboard.writeText(mnemonic);
    setCopied(true); 
    setTimeout(() => {
      setCopied(false);  
    }, 3000);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center bg-gray-900 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Your Recovery Phrase</h1>

        {mnemonic && (
          <div className="relative max-w-4xl w-full border border-gray-500 rounded p-10">
            <button
              onClick={copy}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              {copied ? ( 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-green-500"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667-2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1-2.667 2.667h-8.666a2.667 2.667 0 0 1-2.667-2.667z" />
                  <path d="M4.012 16.737a2.005 2.005 0 0 1-1.012-1.737v-10c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1" />
                </svg>
              )}
            </button>

            <div className="grid grid-cols-4 gap-4">
              {mnemonic.split(' ').map((word, index) => (
                <div
                  key={index}
                  className="border border-gray-500 rounded-md px-4 py-3 text-white bg-gray-800 text-center shadow-md hover:bg-gray-700 transition"
                >
                  {word}
                </div>
              ))}
            </div>

            <div className="text-center text-gray-400 mt-6 text-sm">
              Keep your recovery phrase safe and secure!
            </div>
          </div>
        )}

        <div className="absolute bottom-20 right-70">
          <button
            onClick={() => window.location.href = '/home'}
            className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-purple-400/50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
