"use client"

import { generateMnemonic   } from "bip39"
import { useState } from "react"

import { SolanaWallet } from "./SolanaWallet"




export const Mnemonic =   ()=> {

      const [ mnemonic , setMnemonic ] = useState<string>("")
     
      const generateMnemonicfunction = ()=>{
        setMnemonic( ()=> generateMnemonic())
      }

     

  


     
    return (
        <div>
     <div className="mnemonic  p-">
      <button onClick={generateMnemonicfunction}> { mnemonic ?  " Genrate New Seed " : "Create Seed"} </button>
       <input type="text" value={mnemonic} readOnly  />
     </div>

<div>
   { mnemonic ? <SolanaWallet  mnemonic={mnemonic}/> : <div></div>} 

</div>

        </div>


    )
}

