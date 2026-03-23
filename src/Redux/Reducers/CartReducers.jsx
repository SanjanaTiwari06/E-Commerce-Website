import {
  CREATE_CART_RED,
  GET_CART_RED,
  DELETE_CART_RED,
  UPDATE_CART_RED,
} from "../Constant";

const initialState = [];

export default function CartReducers(
  state = initialState,
  action
) {
  switch (action.type) {

    case CREATE_CART_RED:
      return [...state, action.payload];

    case GET_CART_RED:
      return [...action.payload]; // ⭐ VERY IMPORTANT

    case UPDATE_CART_RED:
      return state.map((item) =>
        item.id === action.payload.id
          ? action.payload
          : item
      );

   case DELETE_CART_RED:
  return state.filter(
    (item) => item.id !== action.payload.id
  );
    default:
      return state;
  }
}
