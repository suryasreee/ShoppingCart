let initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          productid: action.payload.productId,
          productimage: action.payload.productImage,
          productdressname: action.payload.productDress,
          productprice: action.payload.productPrice,
          productquantity: action.payload.productQuantity
          // count: action.payload.count
        }
      ];
    case "GET_PRODUCT":
      const newState = [...state];
      return newState;
    case "CHANGE_QUANTITY": {
      let newState1 = [...state];
      return newState1.map((value, index) =>
        index === action.payload.index
          ? {
              productquantity: action.payload.productQuantity,
              productid: action.payload.productId,
              productimage: action.payload.productImage,
              productdressname: action.payload.productDress,
              productprice: action.payload.productPrice
            }
          : {
              productid: value.productid,
              productimage: value.productimage,
              productdressname: value.productdressname,
              productprice: value.productprice,
              productquantity: value.productquantity
            }
      );
    }

    default:
      return state;
  }
}
