import { ReactComponent as ImportIcon } from "../../../../assets/icons/icon-import.svg";

const Payment = () => {
   return (
      <div className="mw-962">
         <div className="tab-title-wrap">
            <h4 className="tab-title">Payment</h4>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="payment-card">
                  <div>
                     <h6 className="course-title">Program in C++</h6>
                  </div>
                  <div>
                     <div className="text-wrap">
                        <p className="text">Success</p>
                        <p className="text">10 June 2023</p>
                        <p className="text">₹ 300</p>
                        <p className="text">UPI</p>
                     </div>
                  </div>
                  <div>
                     <button className="btn btn-sm btn-link">
                        <span className="me-2">
                           <ImportIcon />
                        </span>
                        Invoice
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="payment-card">
                  <div>
                     <h6 className="course-title">Program in C++</h6>
                  </div>
                  <div>
                     <div className="text-wrap">
                        <p className="text">Success</p>
                        <p className="text">10 June 2023</p>
                        <p className="text">₹ 300</p>
                        <p className="text">UPI</p>
                     </div>
                  </div>
                  <div>
                     <button className="btn btn-sm btn-link">
                        <span className="me-2">
                           <ImportIcon />
                        </span>
                        Invoice
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Payment;