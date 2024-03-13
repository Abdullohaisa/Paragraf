import { createSlice } from "@reduxjs/toolkit";


const favouriteSlice = createSlice({
    name:'favourite',
    initialState:{
        like:false,
        likeCard:[],
        
    },
    reducers:{
        favourite: (state, action) => {
            
          state.like = !state.like

           if (state.like) {
            state.likeCard.push(action.payload)
           }else {
            state.likeCard = state.likeCard.filter(card => card.id !== action.payload.id)
           }


        },
    }
})

export  default favouriteSlice.reducer;
export const { favourite } = favouriteSlice.actions