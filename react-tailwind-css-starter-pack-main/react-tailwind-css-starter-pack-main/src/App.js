import { useState } from "react";


import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count - 1); 
  }

  function increaseHandler(){
    setCount(count + 1); 
  }

  function resetHandler(){
    setCount(0); 
  }


  return (
        <div className="w-[100vw] h-[100vh] flex flex-col  justify-center items-center bg-black text-white gap-10">
            <div className="font-medium text-2xl ">Increment & Decrement</div>
            <div className="flex justify-center items-center gap-10 bg-white text-black p-2 rounded-sm">
                <button className="text-4xl font-bold border-r-2 px-4" onClick={decreaseHandler}>-</button>

                <div className="font-medium text-2xl ">
                {count}
                </div>

                <button className="text-4xl font-bold border-l-2 px-4" onClick={increaseHandler}>+</button>
            </div>
            <button className="bg-white text-black text-xl p-2" onClick={resetHandler}>Reset</button>
        </div>
  );
}

export default App;
