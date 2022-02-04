import React, { useState } from "react";



function Header (props) {

     const [ basla, setBasla] =useState ('')


    const handleChange =(e) =>{
        setBasla(e.target.value)
        console.log(e.target.value)
    }

    const hanleSubmit =(e) =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:basla
        })
        
setBasla('')
    }  



    return(
        <form className="form" onSubmit={hanleSubmit}> 
            <input 
            type='text'
            placeholder="bıtte eıngehen"
            value={basla}
            onChange={handleChange}
            style={{ height: '30px',width: 'x'}}
            />
        
<button className="but">CLICK</button>

        </form>
    )
}
export default Header;