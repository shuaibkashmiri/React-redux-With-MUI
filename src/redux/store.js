import { configureStore } from "@reduxjs/toolkit";
import { getDataReducer } from "./reducers";



const store=configureStore({
    reducer:{
        getData:getDataReducer
    }
})

export default store