import { useState } from "react";
const Homepage = () => {


    const [name,setName] = useState("Shalini")
    const clickHandler = () =>{

        console.log("Hello");

    }

    const clickHandlerCustomised = (name) =>{

        console.log("Hello",name);


    }

    const changeName =() =>
    {
        setName("Nehal")
        console.log("Name changed to ",name);

    }
    return (  
 <div className="home">
    <h2>Home Page</h2>
    <p>{name}</p>
    <button onClick={clickHandler}>Say hello</button>
    <button onClick={()=>{clickHandlerCustomised("Lorsen")}}>Say hello to</button>
    <button onClick={changeName }>Say hello</button>

 </div>
        );
}
 
export default Homepage;