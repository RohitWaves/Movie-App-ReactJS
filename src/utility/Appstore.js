import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import Cartslice from "./Cartslice";

const Appstore = configureStore({
    reducer : {
      cart: cartReducer,
    }
});

export default Appstore;