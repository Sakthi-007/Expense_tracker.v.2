import React, { useEffect } from "react";
import { useState } from "react";
import './index.css'

function For(props) {

    const [name, setName] = useState("")
    const [Amount, setAmount] = useState(0)
    console.log(props.name, props.amount);
    useEffect(()=>{
        setName(props.name)
    },[props.name])
    useEffect(()=>{
        setAmount(props.amount)
    },[props.amount])

function handleSubmit(e) { 
    e.preventDefault();
    props.Submit(name, Amount)

}

function handleTitle(e) {
    setName(e.target.value)
}

function handleAmount(e) {
    setAmount(e.target.value)
}


return (

    <>
        <form onSubmit={handleSubmit}>
            
            <div className="input-container">

                <label for="name">Name:</label>
                <input class="input-container" type="text" id="name" value={name} name="name" onChange={handleTitle} />
            </div>

            <div className="input-container">
                <label for="amount">Amount:</label>
                <input class="input-container" type="number" id="amount" value={Amount} name="amount" onChange={handleAmount} />
            </div>

            <button type="submit"  >Add</button>

        </form>

    </>
)
}
export default For