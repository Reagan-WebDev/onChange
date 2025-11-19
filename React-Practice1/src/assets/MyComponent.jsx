import React, {useState} from 'react';
import './MyComponent.css';

function MyComponent() {

    const[name, setName]=useState("");
    const[quantity, setQuantity]=useState()

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    return(
        <div>
            <input type="text" value= {name} onChange = {handleNameChange} />
            <p className="myP">Name: {name}</p>

            <input type="number" value= {quantity} onChange = {handleQuantityChange} />
            <p className="myP">Quantity: {quantity}</p>

        </div>
    );
}

export default MyComponent;