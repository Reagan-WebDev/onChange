import React, {useState} from 'react';
import './MyComponent.css';

function MyComponent() {

    const[name, setName]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    return(
        <div>
            <input type="text" value= {name} onChange = {handleNameChange} />
            <p className="myP">Name: {name}</p>
        </div>
    );
}

export default MyComponent;