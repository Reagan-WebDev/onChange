import React, {useState} from 'react';
import './MyComponent.css';

function MyComponent() {

    const[name, setName]=useState("");
    const[quantity, setQuantity]=useState();
    const[comment, setComment]=useState("");
    const[shipping, setShipping]=useState("Delivery");
    const[price, setPrice]=useState(0);

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    function handlePriceChange(event){
        setPrice(event.target.value);
    }

    return(
        <div>
            <input type="text" value= {name} onChange = {handleNameChange} />
            <p className="myP">Name: {name}</p>

            <input type="number" value= {quantity} onChange = {handleQuantityChange} />
            <p className="myP">Quantity: {quantity}</p>

            <textarea value = {comment} onChange = {handleCommentChange}>{comment}</textarea>
            <p>Comment: {comment}</p>

            <select value={shipping} onChange = {handleShippingChange}>
                <option value="Pick-Up">Pick-Up</option>
                <option value="Delivery">Delivery</option>
            </select>
            <p>Shipping: {shipping}</p>

             <input type="number" value= {price} onChange = {handlePriceChange} />
            <p className="myP">Price: Ksh. {price}</p>

        </div>
    );
}

export default MyComponent;