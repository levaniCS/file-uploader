import React, { useState, useRef } from 'react'
import './App.css';

const App = () => {
  const fileRef = useRef(null)
  const [loading, setLoading] = useState(false)
 

  const onFileUpload = (e) => {
    e.preventDefault()
    setLoading(true)
    if(!fileRef.current.files[0]) {
      setLoading(false)
      return
    }
    const formData = new FormData(); 
   
    formData.append( 
      "myFile", 
      fileRef.current.files[0], 
      fileRef.current.files[0].name
    ); 
   
    
    // Upload File to project directory

    // Set default state
    fileRef.current.value = null 
    setLoading(false)
  }; 


  if(loading) {
    return <div className="App">Loading...</div>
  }

  return (
    <div className="App">
     <h1>File Uploader - React</h1>
     <hr />
      <form onSubmit={onFileUpload}> 
        <input 
          type="file" 
          accept=".jpg, .jpeg, .png, .gif, .tiff"
          ref={fileRef}
        /> 
        <button> Upload! </button> 
      </form> 
    </div>
  );
}

export default App;
