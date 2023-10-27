// components
import DeleteModal from "../../../components/modals/DeleteModal/DeleteModal";
import General from "./General/General";
import Payment from "./Payment/Payment";
import ChangePassword from "./ChangePassword/ChangePassword";
import Account from "./Account/Account";
import "./settings.scss";

const Settings = () => {
  
  return (
    <>
      <div className="settings-page">
        <div className="setting-wrapper">
          <div className="container-lg">
            <div className="title-section">
              <h4 className="section-title">Settings</h4>
            </div>

            <div className="tab-section">
              <div className="nav-wrap">
                <ul
                  className="nav nav-pills mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-general-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-general"
                      type="button"
                      role="tab"
                      aria-controls="pills-general"
                      aria-selected="true"
                    >
                      General
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-payment-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-payment"
                      type="button"
                      role="tab"
                      aria-controls="pills-payment"
                      aria-selected="false"
                    >
                      Payment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-security-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-security"
                      type="button"
                      role="tab"
                      aria-controls="pills-security"
                      aria-selected="false"
                    >
                      Security
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-account-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-account"
                      type="button"
                      role="tab"
                      aria-controls="pills-account"
                      aria-selected="false"
                    >
                      Account
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-general"
                  role="tabpanel"
                  aria-labelledby="pills-general-tab"
                >
                  <General/>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-payment"
                  role="tabpanel"
                  aria-labelledby="pills-payment-tab"
                >
                  <Payment/>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-security"
                  role="tabpanel"
                  aria-labelledby="pills-security-tab"
                >
                  <ChangePassword/>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-account"
                  role="tabpanel"
                  aria-labelledby="pills-account-tab"
                >
                  <Account/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal />
    </>
  );
};

export default Settings;
