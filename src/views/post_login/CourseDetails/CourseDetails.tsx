import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./course-details.scss";
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";

// icons
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as ClipboardTextIcon } from "../../../assets/icons/icon-clipboard-text.svg";
import { ReactComponent as Book2Icon } from "../../../assets/icons/icon-book-2.svg";
import { ReactComponent as CupIcon } from "../../../assets/icons/icon-cup.svg";
import { ReactComponent as UserOctagonIcon } from "../../../assets/icons/icon-user-octagon.svg";
import { ReactComponent as HeartFilledIcon } from "../../../assets/icons/icon-heart-filled.svg";
import { ReactComponent as HeartOutlineIcon } from "../../../assets/icons/icon-heart-outline.svg";
import { ReactComponent as CheckCircleIcon } from "../../../assets/icons/icon-check-circle.svg";
import { ReactComponent as VideoOctagonIcon } from "../../../assets/icons/icon-video-octagon.svg";

// redux
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { addtoWishListStore, courseCartStore, deleteWishListStore, getCourseDetails, getCourseList, getWishList, setCourseDetails, setCourseList,getCartList } from "../../../redux/pages/courseSlice";

interface Course {
  id: number;
  name: string;
  description: string;
};

const CourseDetails = () => {

  const location = useLocation();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [courseDetailsdata,setCourseDetailsdata] = useState<any>([]);
  const [chapterData,setChapterdata] = useState<any>([]);
  const [openChapter, setOpenChapter] = useState<any>();
  const [coursecard, setCoursecard] = useState<any>([]);
  const [wishList,setWishList] =useState<any>(false)
  const [wishListID,setWishListID] = useState<any>([]);
  const [cartData, setCartData] =useState<any>([]) 

  const courseDetailinfo = useAppSelector((state) => state.course.courseDetails);
  const courseListInfo = useAppSelector((state) => state.course.courseList);
  const wishlistInfo = useAppSelector((state) => state.course.getWishList);


  const { slug } = useParams();
  const id = location.state?.courseId;
  const program_id = courseDetailsdata.program_id;
  const subject_id = courseDetailsdata.id;
  const cartInfo = useAppSelector((state)=>state.course.cartList);
  console.log(cartInfo,"cartinfoo");


  const cartHandler = ()=>{
    if (subject_id && program_id) {
      dispatch(courseCartStore({subject_id,program_id}));
   }
   };

   useEffect(() => {
    if (cartInfo ) {
      setCartData(cartInfo);
    }
  }, [cartInfo]);
   
   useEffect(() => {
    if (wishlistInfo?.data) {
      const mappedData = wishlistInfo.data.map((item:any) => {
        return item.id; 
      })
      setWishListID(mappedData);
    }
  }, [wishlistInfo]);

   const wishListHandler = () => {
    if (wishListID.includes(subject_id)) {
      setWishListID(wishListID.filter((id: any) => id !== subject_id));
      dispatch(deleteWishListStore({ subject_id })).then(() => {
        dispatch(getWishList());
      });
    } else {
      setWishListID([...wishListID, subject_id]);
      dispatch(addtoWishListStore({ subject_id })).then(() => {
        dispatch(getWishList());
    })
  };
}

   useEffect(()=>{
    if (id && slug) { dispatch(getCourseDetails(id,slug)); }
    return ()=>{dispatch(setCourseDetails([])) }
  },[id,slug,dispatch]);

  useEffect(() => {
    if (courseDetailinfo) {
      setCourseDetailsdata(courseDetailinfo);
      setChapterdata(courseDetailinfo?.chapters)
    }
  }, [courseDetailinfo]);

  useEffect(() => {
    if (Array.isArray(courseDetailinfo.slug) && courseDetailinfo.slug.length > 0) {
       setCourseDetailsdata(courseDetailinfo);
       const slugElements = courseDetailinfo.slug.map((item: string, index: number) => (
        <div key={index}>{item}</div>
      ));
      setCourseDetailsdata(slugElements);
    }
  }, [courseDetailinfo.slug]);

  useEffect(() => {
    dispatch(getCourseList());
    return(() => {
      dispatch(setCourseList([]));
    });
  }, []);

  useEffect(() => {
    if (courseListInfo) {
      setCoursecard(courseListInfo);
    }
  }, [courseListInfo]);

  const handleWishlistAction = (subject_id: any) => {
    if  (wishListID.includes(subject_id)) {
      setWishListID(wishListID.filter((id: any) => id !== subject_id));
      dispatch(deleteWishListStore({ subject_id }));
    } else {
      setWishListID([...wishListID, subject_id]);
      dispatch(addtoWishListStore({ subject_id }));
    }
  };

  return (
    <div className="course-details-page">
      <div className="course-details py-3">
        <div className="container-lg">
          <div className="row">
            {/* title section */}
            <div className="col-12 col-xl-8">
              <div className="title-wrapper">
                <div>
                  <button className="back-btn" onClick={() => navigate(-1)}>
                    <PaginationLeftArrowIcon />
                  </button>
                </div>
                <div>
                  <h1 className="course-title">
                  {courseDetailsdata.name}
                  </h1>
                  <p className="course-desc">
                  {courseDetailsdata.short_description}
                  </p>
                </div>
              </div>
            </div>

            {/* video player */}
            <div className="col-12 col-xl-8">
              <div className="video-player-wrapper">
                <div className="video-player">video player goes here</div>
              </div>
            </div>

            {/* right side box */}
            <div className="col-12 col-xl-4">
              <div className="course-side-box">
                <h4 className="title">{courseDetailsdata.name}</h4>

                <div className="row">
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <ClipboardTextIcon />
                      </span>
                      <p className="desc">Tests</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <Book2Icon />
                      </span>
                      <p className="desc">Lectures and Notes</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <CupIcon />
                      </span>
                      <p className="desc">Certificate of completion</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <UserOctagonIcon />
                      </span>
                      <p className="desc">Mentor Support</p>
                    </div>
                  </div>
                </div>

                <div className="line"></div>

                <div className="price-section">
                  <p className="new-price">{courseDetailsdata.actual_price}</p>
                  <p className="old-price striked">{courseDetailsdata.price}</p>
                  <p className="offer">{courseDetailsdata.offer_value}</p>
                </div>
                <div className="btn-section">
                  <div className="btn-wrap ">
                    <button className="btn btn-lg btn-primary"
                    onClick={cartHandler}>
                      Add to Cart
                    </button>
                  </div>
                  <div>
                  <button className="wish-list-btn" 
                   onClick={wishListHandler}>
                   {wishListID.includes(subject_id) ? (
                    <HeartFilledIcon />
                      ) : (
                    <HeartOutlineIcon />
                     )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* about */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">About</h4>
                <p className="summary">
                {courseDetailsdata.description}
                </p>
              </div>
            </div>

            {/* what you will learn section */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">What you will learn</h4>
                <div className="course-goals">
                  <div className="row gy-3">
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">Introduction to programming</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">Publishing our work</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">Advanced programming approaches</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">3 Real world project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* course content section */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">Course Content</h4>
                {/* NOTE: for devs: content added only for first accordion, 2 and 3 are just placeholders please don't change the classnames from its position  , also give unique id names accordingly -- remove this comment after integration */}
                <div className="course-content-section">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                    >
                    { chapterData?.map((chapter:any)=>(

                    <div className="accordion-item chapter-accordion" key={chapter.id}>
                      <h2 className="accordion-header" id={`flush-heading${chapter.id}`}>
                        <button
                          className= {`accordion-button ${openChapter === chapter.id ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${chapter.id}`}
                          aria-expanded= {openChapter === chapter.id ? 'true' : 'false'}
                          aria-controls= {`flush-collapse${chapter.id}`}
                        >
                           {chapter.name}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${chapter.id}`}
                        className={`accordion-collapse collapse ${openChapter === chapter.id ? 'show' : ''}`}
                        aria-labelledby={`flush-heading${chapter.id}`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div
                            className="accordion accordion-flush "
                            id={`accordionFlushInnerExample${chapter.id}`}
                          >
                            <div className="accordion-item accordion-inner">
                              <h2
                                className="accordion-header"
                                id={`flush-inner-headingOne${chapter.id}`}
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#flush-inner-collapseOne${chapter.id}`}
                                  aria-expanded="false"
                                  aria-controls={`flush-collapseOne${chapter.id}`}
                                >
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                    <div className="d-flex align-items-center">
                                      <span className="me-2">
                                        <VideoOctagonIcon />
                                        {/* <ClipboardTextIcon /> */}
                                      </span>
                                      <h6 className="inner-accordion-heading">
                                        Tokens
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <button className="btn btn-sm btn-link me-3">
                                        Preview
                                      </button>
                                      <p className="text me-3">23:40</p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="flush-inner-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-inner-headingOne"
                                data-bs-parent="#accordionFlushInnerExample"
                              >
                                <div className="accordion-body">
                                  <p className="desc">
                                  {chapter.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item accordion-inner">
                              <h2
                                className="accordion-header"
                                id="flush-inner-headingTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-inner-collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseTwo"
                                >
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                    <div className="d-flex align-items-center">
                                      <span className="me-2">
                                        <VideoOctagonIcon />
                                        {/* <ClipboardTextIcon /> */}
                                      </span>
                                      <h6 className="inner-accordion-heading">
                                        Operators
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <button className="btn btn-sm btn-link me-3">
                                        Preview
                                      </button>
                                      <p className="text me-3">23:45</p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="flush-inner-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-inner-headingTwo"
                                data-bs-parent="#accordionFlushInnerExample"
                              >
                                <div className="accordion-body">
                                  <p className="desc">
                                  {chapter.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* as per Abhinav no accordion needed for test in course details page-- remove this comment on integration */}
                            <div className="test-card d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <span className="me-2">
                                  {/* <VideoOctagonIcon /> */}
                                  <ClipboardTextIcon />
                                </span>
                                <h6 className="inner-accordion-heading">
                                  Test 1
                                </h6>
                              </div>
                              <div className="d-flex align-items-center">
                                {/* <button className="btn btn-sm btn-link me-3">
                                        Preview
                                      </button> */}
                                <p className="text me-3">5 Que</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  </div>
                </div>
              </div>
            </div>

            {/* course you may interested section */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">Course you may interested</h4>
                <div className="row gx-4 gy-4 mb-4">
                {coursecard.map((course:Course) => (
                    <div className="col-12 col-sm-4 " key={course.id}>
                      <CourseCard 
                      courseData={course}
                      wishListID={wishListID} 
                      onWishlistAction={handleWishlistAction}
                      source="courseDetails"
                      />
                    </div>
                  ))}
                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-link">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
