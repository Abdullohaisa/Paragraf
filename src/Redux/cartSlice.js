import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    totalCost: 0,
  },
  reducers: {
    addToCart(state, action) {
      const itemExists = state.items.some(
        (itemObj) => itemObj.item.id === action.payload.id
      );
      if (!itemExists) {
        state.items.push({ item: action.payload, quantity: 1 });
      } else {
        console.log(action.payload.id);
        state.items = state.items.map((itemObj) =>
          itemObj.item.id === action.payload.id
            ? { ...itemObj, quantity: itemObj.quantity + 1 }
            : itemObj
        );
      }
    },

    removeOrder(state, action) {
      console.log(action.payload);
      state.items = state.items.filter(
        (itemObj) => itemObj.item.id !== action.payload
      );
    },
    
    removeSingleOrder(state, action) {
      const itemIdToRemove = action.payload;
      const itemIndex = state.items.findIndex(
        (itemObj) => itemObj.item.id === itemIdToRemove
      );

      if (itemIndex !== -1) {
        const currentItem = state.items[itemIndex];

        console.log(currentItem);
        if (currentItem.quantity > 1) {
          state.items[itemIndex] = {
            ...currentItem,
            quantity: currentItem.quantity - 1,
          };
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    removeAllOrders(state, action) {
      (state.items = []), (state.totalCost = 0);
    },
    orderTotalCost(state, action) {
      state.totalCost = state.items.reduce((acc, itemObj) => {
        return acc + itemObj.quantity * itemObj.item.price;
      }, 0);
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  removeSingleOrder,
  removeOrder,
  removeAllOrders,
  orderTotalCost,
  removeCheckedItems,
} = cartSlice.actions;
