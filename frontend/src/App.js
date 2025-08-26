import { useSelector,useDispatch } from "react-redux";
 //store la ulla count ah access panna indha function ah use panro
// Dispatch it's mentioned for actitons

import { increment } from "./store";
import { decrement } from "./store";

function App() {
  const count = useSelector(function(state){
    // return state

    return state.counter.count
  })

  const dispatch = useDispatch()
  
  function IncFunctions()
  {
     dispatch(increment())
  }

  function DecFunctions()
  {
    dispatch (decrement())
  }
  return (
   <div>
     <h1 >Helloo {count}</h1>

   <div className="flex gap-5">
     <button className="border border-black" onClick={IncFunctions}>IncFunction</button>
    <button className="border border-black" onClick={DecFunctions}>Decrement</button>
   </div>
   </div>
  );
}

export default App;
