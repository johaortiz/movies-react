import { createSlice } from '@reduxjs/toolkit'
import { getMovieByName } from '../../../utils/clientHttps';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: '',
    },
    reducers: {
        search: (state, action) => {
            state.value = action.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { search } = searchSlice.actions

export default searchSlice.reducer