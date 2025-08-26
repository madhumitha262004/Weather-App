import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:10
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:function(state)
        {
            state.count = state.count+1

        },

        decrement:function(state)
        {
            state.count = state.count-1
        }
    }
})


const store = configureStore({
    //  reducer:function(count = 10){
    //     return count
    // }
    reducer: {
        counter:counterSlice.reducer
    }
        // counter: function (count = 11, actions)     //count inc and dec panradhu oru actions 
        // //actions ah store la dha store pananum 
        // {

        //     if (actions.type === "INC") {
        //          count = count + 1
        //     }

        //     else{
        //         count  = count-1
        //     }
        //     return count
        // }
   
})

const {increment} = counterSlice.actions
const {decrement} = counterSlice.actions

export default store
export {increment}

export {decrement}