import { useState } from 'react'
import './App.css'
import penisimg from "./assets/penis.png"
import soundpezdec from "./assets/applepay.mp3"
import kamzoner from "./assets/KFC-OR-MAC.mp3"
import cumzoner from "./assets/ВПТБ.mp3"

function App() {
  const [count, setCount] = useState(0)
  const [musicaboba, setmusicaboba] = useState(<></>)
  
  function click() {
    const rand: Number = Math.floor(Math.random() * 1000);
    if (rand == 5 || rand == 6 || rand == 7 || rand == 8) {
      document.querySelector(".audiopizdec3").play();
    } else if (rand == 1) {
      document.querySelector(".audiopizdec4").play();
    } else {
    }
    document.querySelector(".audiopizdec2").play();
    setCount(count + 1);
  }
  
  return (
    <>
      <div>
        <img src={penisimg} alt="" width={150} onClick={(() => { click() })} />
        <h1>Вы кликнули {count} раз.</h1>
        <audio className="audiopizdec2" src={soundpezdec}></audio>
        <audio className="audiopizdec3" src={kamzoner}></audio>
        <audio className="audiopizdec4" src={cumzoner}></audio>
      </div>
    </>
  )
}

export default App