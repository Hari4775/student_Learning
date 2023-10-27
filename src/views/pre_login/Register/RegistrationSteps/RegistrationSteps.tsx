import React, { useState, useCallback, useRef } from "react";
import "./registration-steps.scss";

// logo
import assuranceLogo from "../../../../assets/logos/assurance-logo.svg";

// components
import CustomStepper from "../../../../components/CustomStepper/CustomStepper";
import OTPVerification from "./components/OTPVerification";
import CategorySelection from "./components/CategorySelection";
import MobileNumberVerification from "./components/MobileNumberVerification";

const RegistrationSteps = () => {
  const varificationRef = useRef<any>();
  const mobileOtpRef = useRef<any>();
  const registerFinishRef = useRef<any>();
  const [activeStep, setActiveStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const steps = [
    { label: "Enter mobile number" },
    { label: "OTP Confirmation" },
    { label: "Category Selection" },
  ];
  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber);
  };

  const createRegistrationFormSection = useCallback(() => {
    switch (activeStep) {
      case 0:
        return (
          <MobileNumberVerification
            ref={varificationRef}
            setIndex={setActiveStep}
            onPhoneNumberChange={handlePhoneNumberChange}
          />
        );
      case 1:
        return (
          <OTPVerification
            ref={mobileOtpRef}
            setIndex={setActiveStep}
            phoneNumber={phoneNumber}
          />
        );
      case 2:
        return (
          <CategorySelection ref={registerFinishRef} setIndex={setActiveStep} />
        );
      default:
        return null;
    }
  }, [activeStep]);

  const onNextAction = () => {
    switch (activeStep) {
      case 0:
        return varificationRef?.current?.onSaveTrigger();
      case 1:
        return mobileOtpRef?.current?.onSaveOtpTrigger();
      case 2:
        return registerFinishRef?.current?.onSaveFinishTrigger();
      default:
        return null;
    }
  };

  return (
    <div className="registration-steps-wrapper">
      <div className="logo-wrapper">
        <img src={assuranceLogo} className="logo" alt="" />
      </div>
      <div className="sectors-top">
        <div className="sector-wrap">
          <div className="sector-1">
            <div className="sector-2">
              <div className="sector-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectors-bottom">
        <div className="sector-wrap">
          <div className="sector-1">
            <div className="sector-2">
              <div className="sector-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="stepper-wrap-container">
        {/* <div className="logo-wrapper">
          <img src={assuranceLogo} className="logo" alt="" />
        </div>
        <div className="sectors-top">
          <div className="sector-wrap">
            <div className="sector-1">
              <div className="sector-2">
                <div className="sector-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sectors-bottom">
          <div className="sector-wrap">
            <div className="sector-1">
              <div className="sector-2">
                <div className="sector-3"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="steps-area">
          <div className="content-section">
            <div className="title-wrapper">
              <h4 className="logo-title d-block d-lg-none">Assurance</h4>
              <h1 className="form-title">Few More Steps to Go</h1>
              <p className="description">
                Select Option that will match you correctly
              </p>
            </div>

            {/* stepper section */}
            <div className="stepper-wrapper">
              <div className="step-indicator">
                <CustomStepper
                  steps={steps}
                  className="stepper-container"
                  stepClassName="step-wrapper"
                  nonLinear={false}
                  activeStep={activeStep}
                  connectorStyleConfig={{
                    completedColor: "#d43d35",
                    activeColor: "#d43d35",
                    disabledColor: "#d43d35",
                    style: activeStep !== steps.length ? "solid" : "dashed",
                    // style: "dashed",
                    size: 4,
                    stepSize: "2em",
                  }}
                  styleConfig={{
                    activeBgColor: "#d43d35",
                    completedBgColor: "#d43d35",
                    inactiveBgColor: "transparent",
                    activeTextColor: "#fff",
                    completedTextColor: "#fff",
                    inactiveTextColor: "#d43d35",
                    labelFontSize: "1rem",
                    fontWeight: "500",
                  }}
                />
              </div>

              <div className="step-content-wrapper">
                <div className="card-wrapper">
                  {createRegistrationFormSection()}
                </div>
              </div>

              <div className="navigation-btn-wrapper mw-480 mx-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <button
                    className={`${
                      activeStep !== 0 && activeStep !== steps.length
                        ? "btn-outline-black "
                        : "btn-outline-black disabled"
                    } btn step-btn `}
                    onClick={() =>
                      activeStep !== 0 &&
                      activeStep !== steps.length &&
                      setActiveStep(activeStep - 1)
                    }
                  >
                    Prev
                  </button>

                  <button
                    className={`${
                      activeStep !== steps.length - 1
                        ? "btn-outline-primary"
                        : "btn-primary"
                    } btn step-btn `}
                    onClick={() => onNextAction()}
                  >
                    {activeStep !== steps.length - 1 ? "Next" : "Finish"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSteps;
