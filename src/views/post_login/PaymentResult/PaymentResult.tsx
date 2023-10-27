import React, { useState } from "react";
import "./payment-result.scss";

// images
import smartPhoneIllustration from "../../../assets/images/smartphone-illustration.svg";
import warningIllustration from "../../../assets/images/warning-illustration.svg";
import { useNavigate } from "react-router-dom";

const PaymentResult = () => {

  const navigate = useNavigate()
  const [paymentStatus, setPaymentStatus] = useState(true);

  const startLearnHandler =()=>{
     navigate("/my-learnings")
  }

  return (
    // payment success and failed components are managed in this page itself -- remove comment after integration
    // change the usestate value to false inorder to see the payment failed component
    <div className="payment-result">
      <div className="payment-status-wrapper">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-sm-10 mx-auto">
              <div className="status-wrapper mt-5 mb-5">
                <h3 className="title mb-4">
                  {paymentStatus == true
                    ? "Payment Successful"
                    : "Payment Failed"}
                </h3>

                <div
                  className={`img-wrapper mb-3 ${
                    paymentStatus == true && "payment-success-img"
                  } `}
                >
                  <img
                    src={
                      paymentStatus == true
                        ? smartPhoneIllustration
                        : warningIllustration
                    }
                    alt={
                      paymentStatus == true
                        ? "smartphone illustration"
                        : "warning illustration"
                    }
                  />
                </div>
                {paymentStatus == true ? (
                  <p className="desc mb-3">
                    Your payment is successful, you can start learning now
                  </p>
                ) : (
                  <p className="desc mb-3">
                    Your payment is failed, try after sometimes, if the problem
                    still persist{" "}
                    <button className="btn btn-sm btn-link">Contact Us</button>
                  </p>
                )}
                <button className="btn btn-md btn-primary" onClick={startLearnHandler}>
                  {paymentStatus == true ? " Start Learning" : "Go to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;
