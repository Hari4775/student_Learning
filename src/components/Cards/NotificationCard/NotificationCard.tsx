import React, { useState } from "react";
import "./notification-card.scss";

// icons
import { ReactComponent as MessageFilledIcon } from "../../../assets/icons/icon-message-filled.svg";
import { ReactComponent as MessageOutlineIcon } from "../../../assets/icons/icon-message-outline.svg";

const NotificationCard = (props: any) => {
  const notification = props.notification;

  return (
    <div className="notification-card">
      <div className="icon-sec">
        <div className="icon-wrap">
          {notification.readStatus === true ? (
            <MessageOutlineIcon />
          ) : (
            <MessageFilledIcon />
          )}
        </div>
      </div>

      <div className="notification-card-body">
        <h3
          className={`notification-card-title ${
            notification.readStatus !== true && "fw-bold"
          }`}
        >
          {notification.title}
        </h3>
        <p className="notification-card-desc">{notification.description}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
