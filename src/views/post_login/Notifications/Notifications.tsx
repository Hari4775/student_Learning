import React, { useState } from "react";
import "./notifications.scss";

// icons
import { ReactComponent as SearchIcon } from "../../../assets/icons/icon-search.svg";
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as PaginationRightArrowIcon } from "../../../assets/icons/icon-arrow-right.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/icon-edit.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/icon-profile.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/icon-trash.svg";

import { ReactComponent as LockDotsIcon } from "../../../assets/icons/icon-lock-dots.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/icon-lock.svg";
import { ReactComponent as EyeIcon } from "../../../assets/icons/icon-eye.svg";
import { ReactComponent as EyeSlashedIcon } from "../../../assets/icons/icon-eye-slash.svg";
import { ReactComponent as InfoCircleIcon } from "../../../assets/icons/icon-info-circle.svg";
import { ReactComponent as ImportIcon } from "../../../assets/icons/icon-import.svg";

// components
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import NotificationCard from "../../../components/Cards/NotificationCard/NotificationCard";

const Notifications = () => {
  const unReadMessages = [
    {
      id: 1,
      title: "notification 1",
      description: "loreme ipsdjfk slkjfdlk flskkjfsldkfjldsjfdlskfj",
      readStatus: false,
    },
    {
      id: 2,
      title: "notification 1",
      description: "loreme ipsdjfk slkjfdlk flskkjfsldkfjldsjfdlskfj",
      readStatus: false,
    },
  ];
  const readMessages = [
    {
      id: 3,
      title: "notification 1",
      description: "loreme ipsdjfk slkjfdlk flskkjfsldkfjldsjfdlskfj",
      readStatus: true,
    },
    {
      id: 4,
      title: "notification 1",
      description: "loreme ipsdjfk slkjfdlk flskkjfsldkfjldsjfdlskfj",
      readStatus: true,
    },
  ];
  return (
    <div className="notifications-page">
      <div className="notifications-wrapper">
        <div className="container-lg">
          <div className="title-section">
            <h4 className="section-title">Notifications</h4>
          </div>
          <div className="mw-780">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h6 className="subtitle">Unread</h6>
                  <button className="btn btn-link notification-btn">
                    Mark all as read
                  </button>
                </div>
              </div>
              {unReadMessages.map((message) => (
                <div className="col-12">
                  <NotificationCard notification={message} />
                </div>
              ))}
              <div className="col-12">
                <div className="d-flex mb-3">
                  <h6 className="subtitle">Read</h6>
                </div>
              </div>
              {readMessages.map((message) => (
                <div className="col-12">
                  <NotificationCard notification={message} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
