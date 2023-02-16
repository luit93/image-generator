import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";

import './App.css'

function App() {
  const [prompt,setPrompt]= useState('')
  const [result,setResult]=useState('')
  const [num,setNum]=useState('1')
  const [size,setSize]= useState('720x720')
  const config = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(config);

  const makeImage= async()=>{
    const res =await openai.createImage({
      
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });
    setResult(res.data.data[0].url)
  
  }
  return (
    <div className='app-main'>
      <h1>Image Generator</h1>
      <h3>Created using DALL·E and openAI</h3>
      <h4>Enter a prompt to generate an image</h4>
      <input className='prompt-input' placeholder='Type something funny' onChange={(e)=> setPrompt(e.target.value)}/>


      {/* <label for='size'>Number of images(1-4)</label>
      <input className='prompt-num' type="number" min='1' max='4' onChange={(e)=> setNum(e.target.value)}/> */}
      {/* <label for='size'>Choose a size:</label>
      <select id="size" name="size" onChange={(e)=>setSize(e.target.value)}>
        <option value="320">Profile</option>
        <option value="1080x566">Landscape</option>
        <option value="1080x1360">Portrait</option>
        <option value="1024x1024">Square</option>
      </select> */}


      <button onClick={makeImage}>Generate Image</button>
      
      {result.length >0 ? <img className='result-image' src={result} alt='result'/> : <></>}
    </div>
  )
}

export default App
