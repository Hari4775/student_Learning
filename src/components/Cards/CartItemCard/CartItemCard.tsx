import React, { useState } from "react";
import "./cart-item-card.scss";

// icons
import { ReactComponent as HeartFilledIcon } from "../../../assets/icons/icon-heart-filled.svg";
import { ReactComponent as HeartOutlineIcon } from "../../../assets/icons/icon-heart-outline.svg";
import { useDispatch } from "react-redux";
import { getCartList, removeCart } from "../../../redux/pages/courseSlice";

interface IDCart{
  courseData: any;
};

const CartItemCard:React.FC<IDCart>=(props) => {
  const {
    courseData = {}
  } = props;

  const dispatch = useDispatch<any>();
  const [wishList, setWishList] = useState<boolean>(courseData.wishList);
  const cart_id = courseData.cart_id
  const item_id = courseData.id

  const deleteHandler =()=>{
    if(cart_id && item_id){
      dispatch(removeCart({cart_id,item_id}))
      dispatch( getCartList());
    }
  }

  return (
    <div className="cart-item-card">
      <div className="img-sec">
        <div className="thumbnail-wrap">
          <img
            src={courseData.thumb_image}
            className="thumbnail"
            alt="course-thumbnail"
          />
        </div>
      </div>

      <div className="course-card-body">
        <div className="details">
          <div className="title-wrap">
            <h3 className="course-card-title">{courseData.name}</h3>
            <p className="course-card-desc">{courseData.description}</p>
          </div>
          <div className="d-flex btn-sec">
            <button className="btn btn-sm btn-link"  onClick={deleteHandler}>Delete</button>
            <button className="btn btn-sm btn-link-black">
              Add to wishlist
            </button>
          </div>
        </div>
        <div>
          <div className="price-wrap">
            <p className="new-price text-end">{courseData.actual_price}</p>
            <p className="old-price striked text-end">{courseData.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
