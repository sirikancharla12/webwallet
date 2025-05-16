import React, { useState } from 'react'
import Navbar from './navbar';
import { mnemonicToSeed } from 'bip39';
import { Wallet, HDNodeWallet } from 'ethers';

export default function Ethereum({mnemonic}) {
  const [index, setIndex] = useState(0); 
  const [addresses, setAddresses] = useState([]);  

  async function ethAction() {
    const seed = await mnemonicToSeed(mnemonic);

    const derivationPath = `m/44'/60'/${index}'/0/0`; 
    const hdNode = HDNodeWallet.fromSeed(seed); 
    const childNode = hdNode.derivePath(derivationPath);

    const privateKey = childNode.privateKey;
    const wallet = new Wallet(privateKey);


    setIndex(index + 1);
    setAddresses([...addresses, wallet.address]);
  }
  function deleteAddress(idx) {
    setAddresses(addresses.filter((_, i) => i !== idx));
  }

  return (
    <>
      <Navbar />
      <div className="text-white text-center p-3">
        <button className="text-white" onClick={ethAction}>
          Add Account
        </button>
        
       <div className='text-white text-center p-3'>
        
       {addresses.map((addr, idx) => (
          <div key={idx}>
            {addr}
       <button className="text-white" onClick={() => deleteAddress(idx)}>Delete</button>

          </div>
        ))}
       </div>
      </div>
    </>
  )
}
