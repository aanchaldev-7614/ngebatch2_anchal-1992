import React,{useState} from "react";



function ControlledComponent(){
    const [name,setname] = useState<string>("Guest");
    const handleInput = (e:any) => {
        setname(e.target.value);
    }

    return<div >
        <input type="text" value={name} onInput={(event : any) => setname(event.target.name)}></input>
        <p style={{color:'red'}}>name is {name}</p>
    </div>
}

export default ControlledComponent;