import { createReducer } from "@reduxjs/toolkit"


const initialState={
    name:"Shoaib",
    Email:"shoaib@gmail.com"
}

export const getDataReducer=createReducer(initialState,(builder)=>{
builder.addCase("success",(state,action)=>{
    state.name="Kashmiri"
    state.username="ShoaibKahmiri"
})
})