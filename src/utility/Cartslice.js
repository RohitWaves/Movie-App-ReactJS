import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    } ,
  // Redux toolkit uses Immer behind the scenes
    reducers: {
        addItem: (state,action) => {
           // console.log(state,action,"reducer") //
            state.items.push(action.payload); //Redux is mutating the state
        },
        removeItem: (state,action) => {
            state.items.pop();
        },

        clearCart: (state,action) => {
            state.items.length = 0;
        }

        
    }
})

export const {addItem,removeItem,clearCart} = Cartslice.actions;
export default Cartslice.reducer