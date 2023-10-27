import React, { useEffect, useState } from "react";
import "./cart.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// icons
import { ReactComponent as TicketIcon } from "../../../assets/icons/icon-ticket.svg";

// images
import searchIllustration from "../../../assets/images/search-illustraion.svg";

// components
import CartItemCard from "../../../components/Cards/CartItemCard/CartItemCard";
import { useAppSelector } from "../../../redux/hooks";
import { cartCheckout, getCartList, setCartList } from "../../../redux/pages/courseSlice";

const Cart = () => {

  const [cartData,setCartData] =useState<any>([])
  const dispatch = useDispatch<any>()
  const navigate = useNavigate();
  const cartInfo = useAppSelector((state)=>state.course.cartList);
  
  useEffect(() => {
    dispatch( getCartList());
    return(() => {
      dispatch(setCartList([]));
    });
  }, []);

  useEffect(() => {
    if (cartInfo ) {
      setCartData(cartInfo);
    }
  }, [cartInfo]);

  const searchHandler =()=>{
    navigate("/course")
  }
  const checkoutHandler =  () =>{
    dispatch(cartCheckout())
    navigate("/payment")
  }
   
  return (
    <div className="cart">
      <div className="cart-listing">
        <div className="container-lg">
          <div className="title-section">
            <h4 className="section-title">Cart</h4>
          </div>

          {cartData.length > 0 ? (
            <div className="row mb-5">
              <div className="col-12 col-md-8 order-2 order-md-1 ">
                <div className="cart-item-wrap">
                  <div className="row gy-3">
                  {cartData.map((course:any,key:any) => (
                      <div key={key} className="col-12 ">
                        <CartItemCard courseData={course} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 order-1 order-md-2 ">
                <div className="price-card">
                  <h4 className="title">Price Details</h4>
                  <ul>
                    <li>
                      <div className="price-det">
                        <p className="subtitle">
                          Create a Chatbot using Python sdlfdf sldjfdlkfj
                          slfkjdslkfjdsl
                        </p>
                        <p className="price">₹ 320</p>
                      </div>
                    </li>
                    <li>
                      <div className="price-det">
                        <p className="subtitle">
                          Create a Chatbot using Python
                        </p>
                        <p className="price">₹ {cartData.price}</p>
                      </div>
                    </li>
                    <li>
                      <div className="price-det">
                        <p className="subtitle">Discount</p>
                        <p className="price discount-price">-₹ 320</p>
                      </div>
                    </li>
                  </ul>
                  <div className="line"></div>
                  <div className="total-price">
                    <p className="subtitle">Total</p>
                    <p className="price">₹ 320</p>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-lg btn-primary w-100 checkout-btn"  onClick={checkoutHandler}>
                      Checkout
                    </button>
                  </div>
                  <div className="line"></div>
                  <div className="coupon-section">
                    <h5 className="section-title">Coupon</h5>
                    <p className="desc">
                      Apply coupon code to get additional discount
                    </p>
                    <div className="form-control-wrap mb-3">
                      <div className="icon-form-control">
                        <div className="start-icon">
                          <TicketIcon />
                        </div>
                        <input
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                      <p className="validation-text">Invalid coupon code!</p>
                    </div>
                    <button className="btn btn-md btn-outline-primary w-100">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12 col-sm-10 col-lg-6 mx-auto">
                <div className="empty-cart mt-5 mb-5">
                  <div className="img-wrapper mb-3">
                    <img src={searchIllustration} alt="search illustration" />
                  </div>
                  <p className="desc mb-3">
                    Looks like your cart is empty, Don’t waste time, lets get
                    learn somthing new !
                  </p>
                  <button className="btn btn-md btn-primary"  onClick={searchHandler}>
                    Search Course
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
