
import { ReactComponent as TrashIcon } from "../../../../assets/icons/icon-trash.svg";

const Account = () => {
   return (
      <div className="mw-962">
         <div className="tab-title-wrap">
            <h4 className="tab-title">Delete Account</h4>
            <p className="desc">
               By deleting you will lose all the courses you are
               enrolled, you cannot undo!
            </p>
         </div>
         <div className="">
            <button
               type="button"
               role="button"
               className="btn btn-md btn-primary"
               data-bs-toggle="modal"
               data-bs-target="#staticBackdrop"
            >
               <span className="me-2">
                  <TrashIcon />
               </span>
               Delete Account
            </button>
         </div>
      </div>
   )
};

export default Account;