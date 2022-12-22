import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addProductAction } from "./ProductStore/ProductAction";

export function CardButton({ product, index, count }) {
  const dispatch = useDispatch();
  let [added, setAdded] = useState(false);
  let addToCart = (productid, image, dressname, price) => {
    setAdded(true);
    let productArray = {
      productId: productid,
      productImage: image,
      productDress: dressname,
      productPrice: price,
      productQuantity: 1
    };
    let newarry = [];
    newarry = productArray;
    dispatch(addProductAction(newarry));
  };
  return (
    <div className="">
      {!added ? (
        <div className="addProductBtnDiv">
          <Button
            className="addProductBtn"
            onClick={() =>
              addToCart(product.id, product.image, product.title, product.price)
            }
          >
            Add
          </Button>
        </div>
      ) : (
        <div className="addProductBtnDiv">
          {/* <Button className="addProductBtn">Remove</Button> */}
          <label className="addedLabel">Product Added</label>
        </div>
      )}
    </div>
  );
}
