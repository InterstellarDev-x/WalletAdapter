"use client"

import { Keypair, PublicKey } from "@solana/web3.js"
import { mnemonicToSeed } from "bip39"
import { derivePath } from "ed25519-hd-key"
import React, {  useState } from "react"
import nacl from "tweetnacl"

interface SolanaWalletInterface {
    mnemonic : string
}


export const SolanaWallet = ( props : SolanaWalletInterface) : React.ReactNode => {

     const [walletIndedx , setWalletIndex ] = useState<number>(0)
      const [publickey , setPublicKey] = useState<PublicKey[]>([])

       const  generateSolanaAddress  =  async ()=> {
        const seed   =  await mnemonicToSeed(props.mnemonic)
        const path = "m/44'/501'/" + walletIndedx + "'/0'";
        const key = derivePath(path , seed.toString('hex')).key
        const secretKey = nacl.sign.keyPair.fromSeed(key).secretKey
        const keypair = Keypair.fromSecretKey(secretKey)
        setWalletIndex((prev : number) => prev += 1)
        setPublicKey([...publickey , keypair.publicKey ])
      }


    return (
        <div>
       <div className="wallet">
      <button className="px-4 py-2 rounded bg-red-500 border-2 text-white " onClick={generateSolanaAddress} >Gnerate Solana address </button>
     </div>
    

    <div>
      {publickey.map((s) => ( <div key={Math.random()*10000}> {s.toString()}</div>) )}
    </div>
    </div>
    )
}