import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import registerSlice from "./registerSlice";
import darkModeSlice from "./darkModeSlice";
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";




const registerConfig = {
    key:'register',
    storage
}
const darkConfig = {
    key:'dark',
    storage
}

const cartConfig = {
    key: "basket",
    storage,
  };



const favouriteConfig = {
    key: "favourite",
    storage,
  };

  
  export const rootReducer = combineReducers({
    register: persistReducer(registerConfig, registerSlice),
    darkMode: persistReducer(darkConfig, darkModeSlice),
    basket: persistReducer(cartConfig, cartSlice),
    favourite: persistReducer(favouriteConfig, favouriteSlice),
  });