import { useRef } from "react"
export const Start = ({ setUserName }) => {
  const first = useRef()
  const handleClick = () => {
    first.current.value && setUserName(first.current.value)
  }
  return (
    <div className="start">
      <input type="text" placeholder="enter your name " className="inputName" ref={first} />
      <button className="startBtn" onClick={handleClick}>Start</button>
    </div>
  );

}

