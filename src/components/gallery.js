import React from 'react'

export default function gallery({onclickbutton}) {


  const clickPlay = () => {
    console.log('Playing');
  };

  const clickUpload = () => {
    console.log('Uploading');
  };
  return (
    <div className ="container m-4">
       
       <button className="btn btn-primary mx-3" onClick={clickPlay}>Play Movie</button>
        <button className="btn btn-primary mx-3" onClick={clickUpload}>Upload Image</button>
       <button className="btn btn-primary mx-3" onClick={onclickbutton}>Click Me</button>
        <Profile/>
       
     
    </div>
  )
}

export function Profile(){
    return(
        <>
        <h1 className="m-3">Good work</h1>
        </>
    )
}
