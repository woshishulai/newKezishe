import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "@/store/store";


type InitCount = {
  count:number
};

const initialState:InitCount ={
  count:0
}

export const HomeCountSlice = createSlice ({
  name:'homeCount',
  initialState,
  reducers:{
    addCount :(state)=>{
      state.count++
    },
    changeCount :(state,action)=>{
      state.count=state.count+action.payload
    }
  }
})

export const {addCount,changeCount } = HomeCountSlice.actions

export default HomeCountSlice.reducer