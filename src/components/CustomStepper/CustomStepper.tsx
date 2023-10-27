import React from "react";
import { Stepper } from "react-form-stepper";

const CustomStepper = ({ ...props }) => {
  return (
    <Stepper
      {...props}
      connectorStateColors={true}
      // connectorStyleConfig={{
      //   completedColor: '#ffbd13',
      //   activeColor: '#ffbd13',
      //   disabledColor: '#eee',
      // }}
      // styleConfig={{
      //   activeBgColor: '#ffd813',
      //   completedBgColor: '#ffbd13',
      //   inactiveBgColor: '#eee',
      //   activeTextColor: '#111',
      //   completedTextColor: '#222',
      //   inactiveTextColor: '#444',
      // }}
    />
  );
};

export default CustomStepper;
