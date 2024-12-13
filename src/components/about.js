import React, {useState} from 'react'

export default function About() {
    const[myStyle, setMyStyle] = useState({
        backgroundColor:"white",
        color:"black"
    }
    
    );
    const changeDark = (() => {
        if(myStyle.color === "black"){
            setMyStyle({
                backgroundColor:"black",
                color:"white"
            })
        }
        else{
                setMyStyle({
                    backgroundColor:"black",
                    color:"white"
                })
            }
})

const changeLight = (() => {
    if(myStyle.color === "white"){
        setMyStyle({
            backgroundColor:"white",
            color:"black"
        })
    }
    else{
            setMyStyle({
                backgroundColor:"white",
                color:"black"
            })
        }
})
   
  return (
    <div className='container m-4' >
     <div className="card"  style={myStyle}>
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
 
</div>
<div className='py-3'>
  <button type="button" onClick={changeDark} className="btn btn-primary mx-2">Enable Dark Mode</button>
  <button type="button" onClick={changeLight} className="btn btn-primary">Enable Light Mode</button>
  </div>
    </div>
  )
}
