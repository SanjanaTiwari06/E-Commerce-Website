import {
  CREATE_WISHLIST_RED,
  DELETE_WISHLIST_RED
} from "../Constant";

const savedWishlist =
  JSON.parse(localStorage.getItem("wishlist")) || [];

const initialState = savedWishlist;

export default function WishlistReducer(
  state = initialState,
  action
) {
  switch (action.type) {

    case CREATE_WISHLIST_RED: {

      const exists = state.find(
        item => item.id === action.payload.id
      );

      if (exists) return state;

      const newState = [...state, action.payload];

      localStorage.setItem(
        "wishlist",
        JSON.stringify(newState)
      );

      return newState;
    }

    case DELETE_WISHLIST_RED: {

      const newState = state.filter(
        item => item.id !== action.payload.id
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(newState)
      );

      return newState;
    }

    default:
      return state;
  }
}