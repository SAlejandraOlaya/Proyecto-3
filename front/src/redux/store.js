import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from "./reducer.js"

const store = configureStore({
    reducer: userSlice.reducer,
       


})

export default store;


