import React, { useEffect, useState } from "react";
import "./course-card.scss";
import { Link, useLocation } from "react-router-dom";


// icons
import { ReactComponent as HeartFilledIcon } from "../../../assets/icons/icon-heart-filled.svg";
import { ReactComponent as HeartOutlineIcon } from "../../../assets/icons/icon-heart-outline.svg";
import { useAppSelector } from "../../../redux/hooks";


interface IDCourse{
  courseData: any;
  wishListID:any;
  source:any;
  onWishlistAction: (courseId: any) => void; 
};

const CourseCard:React.FC<IDCourse> = (props) => {
 
  const {
    courseData = {},
    wishListID = [],
    onWishlistAction,
    source,
  } = props;
  
  const location =useLocation();
  const courseId = location;
  const subject_id =courseData.id;

  const wishListHandler = () => {
    onWishlistAction(courseData.id); 
  };

  return (
    <div className="course-card">
      <div className="thumbnail-wrap">
        <img
          src={courseData?.thumb_image}
            className="thumbnail"
          alt="course-thumbnail"
        />
      </div>
      <div className="course-card-body">
        <div className="title-wrap">
          <h3 className="course-card-title">{courseData?.courseName}</h3>
          <div>
          {/* {courseData?.courseProgress === false ? null  */}
            {source === "mylearning" ? null : (
              <button onClick={wishListHandler} className="wishlist-btn">
                {wishListID.includes(courseData.id) ? (
                  <HeartFilledIcon />
                ) : (
                  <HeartOutlineIcon />
                )}

              </button>
            )}
          </div>
        </div>
        <p className="course-card-desc">{courseData?.description}</p>
        {courseData?.courseProgress == true ? (
          <div className="progress-wrap">
            <h6 className="progress-title">Progress</h6>
            <div className="progress-track">
              {/* pass the percentage value to the width property to get the completion width for progress bar - remove this comment after integration */}
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
            <div className="d-flex justify-content-end">
              <p className="text">60% completed</p>
            </div>
          </div>
        ) : (
          <>
            <div className="price-wrap">
              <p className="new-price">{courseData?.price}</p>
              <p className="old-price striked">{courseData.actual_price}</p>
            </div>
            <Link  to={
           source === "mylearning"
           ? `/course-streaming/${courseData?.slug}`
           : `/course-details/${courseData.slug}`      
           }  state={{ courseId: courseData.id }}   className="btn btn-sm btn-outline-primary w-100">
           {source === "mylearning" ? "View Course" : "View Details"}
            </Link>
            
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
