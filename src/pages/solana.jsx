import { useState } from "react";
import Navbar from "./navbar";
import { mnemonicToSeed } from "bip39"; 
import nacl from "tweetnacl";  
import { Keypair } from "@solana/web3.js"; 
import { derivePath } from "ed25519-hd-key";  

export default function Solana({mnemonic}) {
  const [index, setIndex] = useState(0); 
  const [publicKeys, setPublicKeys] = useState([]);  


  function solAction() {
    const seed = mnemonicToSeed(mnemonic);

    const path = `m/44'/501'/${index}'/0/0`;

    const { key } = derivePath(path, seed.toString("hex"));  

    const secretKey = nacl.sign.keyPair.fromSeed(key).secretKey;

    const keypair = Keypair.fromSecretKey(secretKey);

    setIndex(index + 1);

    setPublicKeys([...publicKeys, keypair.publicKey]);
  }

  return (
    <>
      <Navbar />
      <div className="text-white text-center p-3">
        <button className="text-white" onClick={solAction}>
          Add Account
        </button>
        {publicKeys.map((key, idx) => (
          <div key={idx}>({key.toBase58()})</div>
        ))}
      </div>
    </>
  );
}
