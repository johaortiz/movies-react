import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import searchReducer from './slices/search/filterSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        search: searchReducer,
    },
})