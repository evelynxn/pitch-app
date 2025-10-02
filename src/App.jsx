import { useState, useEffect, useRef } from 'react';
import './App.css';
import ml5 from "ml5";
const modelURL = "/models"


function App() {

  const[modelLoaded, setModelLoaded] = useState(false);

  let pitch;
  const audioContext = useRef();
  const micInput = useRef();
  audioContext.current = new AudioContext ;

  useEffect(()=>{
    (async()=>{
      const micInput = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      pitch.current = ml5.pitchDetection(
        modelURL,
        audioContext.current,
        micInput,
        ()=> setModelLoaded(true)
      );
    })();
  },[]);

 


  const [count, setCount] = useState(0)

  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>My First React App 🚀</h1>
      <p>Hello world! This is React + Vite.</p>
      <button onClick={() => setCount(c => c + 1)}>
        You clicked {count} times
      </button>
    </main>
  );
}


export default App
