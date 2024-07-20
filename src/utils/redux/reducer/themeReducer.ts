import { createSlice } from "@reduxjs/toolkit";

const themeReducer= createSlice({
    name:"themeReducer",
    initialState:{
        dark:false
    },
    reducers:{
        setTheme(state,action){
            state.dark=action.payload
        }
    }
})

export default themeReducer.reducer;
export const {
    setTheme
}=themeReducer.actions

export const Theme = (state:any)=>state.themeReducer.dark