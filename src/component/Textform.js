import React, { useState } from 'react'

export default function Textform(props) {

    
    const handleupclick =() =>{
      let  newtext = text.toUpperCase();
      settext(newtext);
     

    }

    const handleonchange =(event)=>{
        console.log('entered');
        settext(event.target.value)
    }
    const [text , settext] = useState("Enter your text")
    return (
        < >
            <div className='container'>
                <h1 className="form-floating  container">{props.name}</h1>
                <div className="form-floating  container " >
                    <textarea className="form-control mb-3" rows="8" id="mybox" value={text}  onChange={handleonchange}></textarea>

                    <button type="button" className="btn btn-primary mt-10" onClick={handleupclick} >Convert to uppercase</button>
                </div>
                <div className="container my-2">
                    <h1>Your text summary</h1>
                    <p> {text.split(" ").length} words, and {text.length} Characther</p>
                </div>

                
            </div>

        </>

    )
}
