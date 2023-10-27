import React, { useEffect, useState } from "react";
import "./course-streaming.scss";

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
import { ReactComponent as CheckCircleFilledIcon } from "../../../assets/icons/icon-tick-circle.svg";
import { ReactComponent as SendIcon } from "../../../assets/icons/icon-send.svg";

// components
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import Chat from "../../../components/Chat/chat";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { myLearningDetails, setmylearningDetails } from "../../../redux/pages/courseSlice";
import Videocard from "../../../components/VidoCard/Videocard";

const CourseStreaming = () => {

  const dispatch = useDispatch<any>()
  const location = useLocation(); 
  const {slug} = useParams();
  const id = location.state?.courseId;

  const [myLearningDetailsData, setMylearningDetailsData] = useState<any>([]);
  const [chapterdata,setChapterdata] = useState<any>([]);
  // const [tutorialData,setTutorialData] = useState<any>([]);
  const [openChapter, setOpenChapter] = useState<any>();
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);


  const mylearningDetailsInfo = useAppSelector((state)=> state.course.myLearningDetails);

  useEffect(()=>{
    if (id && slug)
     { dispatch(myLearningDetails(id,slug)); 
     }
     return ()=>{dispatch(setmylearningDetails([])) }
  },[id,slug,dispatch]);

  useEffect(() => {
    if (mylearningDetailsInfo) {
      setMylearningDetailsData(mylearningDetailsInfo);
      setChapterdata(mylearningDetailsInfo?.chapters);
    }
  }, [mylearningDetailsInfo]);

  const testHandler=()=>{
    // if()
    // dispatch(testList())
   }

  const chats = [
    {
      id: 1,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 2,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 3,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 4,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 5,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 6,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
  ];

  return (
    <>
      <div className="course-streaming-page">
        <div className="course-streaming">
          <div className="container-lg">
            <div className="row">
          {/* video player */}
          <div className="col-12 col-xl-7 col-xxl-8">
                <div className="video-player-wrapper">
                  <h4 className="course-title"> {myLearningDetailsData.name} </h4>
                  <div className="video-player">
                  {currentVideoUrl ? (
                      <Videocard currentVideoUrl={currentVideoUrl}/>
                    ) : (
                      <p>Select a video to play.</p>
                    )}
                  </div>

                  test component
                  {/* video player */}
                  <div className="test-area">
                    <h3 className="test-title">Test 1</h3>
                    <div className="test-wrapper">
                      <h4 className="question mb-4">1{")"} .What is a token</h4>
                      <div className="row g-sm-4">
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio1"
                            />
                            <label htmlFor="radio1">Option 1</label>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio2"
                            />
                            <label htmlFor="radio2">Option 2</label>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio3"
                            />
                            <label htmlFor="radio3">Option 3</label>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio4"
                            />
                            <label htmlFor="radio4">Option 4</label>
                          </div>
                        </div>
                      </div>

                      {/* result component */}
                      <div className="results-sec">
                        <div className="result-title">Congratulations</div>
                        {/* use class names "green" for green color, and "red" for red color */}
                        {/* <span className="score red">8</span> */}
                        <p className="results">
                          You scored <span className="score green">8</span> out
                          of <span className="score">10</span>
                        </p>
                      </div>

                      <div className="mt-5 d-flex align-items-center justify-content-between">
                        <button className="btn btn-md btn-outline-primary disabled">
                          Prev
                        </button>
                        <button className="btn btn-md btn-outline-primary ">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* tab section */}
                <div className="tab-section">
                  <div className="nav-wrap">
                    <ul
                      className="nav nav-pills mb-3 mb-md-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-about-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-about"
                          type="button"
                          role="tab"
                          aria-controls="pills-about"
                          aria-selected="true"
                        >
                          About
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-test-score-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-test-score"
                          type="button"
                          role="tab"
                          aria-controls="pills-test-score"
                          aria-selected="false"
                        >
                          Test Score
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-about"
                      role="tabpanel"
                      aria-labelledby="pills-about-tab"
                    >
                      <div className="mw-962">
                        <div className="tab-title-wrap">
                          {/* <h4 className="tab-title">About</h4> */}
                          <p className="desc">
                          {myLearningDetailsData.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-test-score"
                      role="tabpanel"
                      aria-labelledby="pills-test-score-tab"
                    >
                      <div className="mw-962">
                        <div className="row">
                          <div className="col-12">
                            <div className="test-score-card">
                              <div>
                                <h5 className="title">Chapter 1 Test 1</h5>
                              </div>
                              <p className="score">
                                {/* <span className="green">8</span> */}
                                <span className="red">3</span>
                                /20
                              </p>
                              <div>
                                <button className="btn btn-sm btn-outline-primary">
                                  Take Retest
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="test-score-card">
                              <div>
                                <h5 className="title">Chapter 1 Test 1</h5>
                              </div>
                              <p className="score">
                                {/* <span className="green">8</span> */}
                                <span className="red">3</span>
                                /20
                              </p>
                              <div>
                                <button className="btn btn-sm btn-outline-primary">
                                  Take Retest
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="test-score-card">
                              <div>
                                <h5 className="title">Chapter 1 Test 1</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* course content section */}
              <div className="col-12 col-xl-5 col-xxl-4">
                {/* course content */}
                <div className="sub-section mb-5 mb-xl-3">
                  <h4 className="sub-section-title mb-3 d-none d-xl-block">
                  {myLearningDetailsData.name}
                  </h4>
                  {/* NOTE: for devs: content added only for first accordion, 2 and 3 are just placeholders please don't change the classnames from its position  , also give unique id names accordingly -- remove this comment after integration */}
                  <div className="course-content-section">
                    <div className="course-sec-scroll-area">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >

                      {chapterdata?.map((chapter:any)=>(
                        <div className="accordion-item chapter-accordion" key={chapter.id}>
                          <h2
                            className="accordion-header"
                            id={`flush-heading${chapter.id}`}
                          >
                            <button
                              className={`accordion-button ${openChapter === chapter.id ? '' : 'collapsed'}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${chapter.id}`}
                              aria-expanded={openChapter === chapter.id ? 'true' : 'false'}
                              aria-controls={`flush-collapse${chapter.id}`}
                            >
                            {chapter?.name}
                            </button>
                          </h2>
                          <div
                            id={`flush-collapse${chapter.id}`}
                            className={`accordion-collapse collapse ${openChapter === chapter.id ? 'show' : ''}`}
                            aria-labelledby={`flush-heading${chapter.id}`}
                            data-bs-parent="#accordionFlushExample"
                          >
                             {chapter?.tutorial.map((tutorial: any) => (
                              <div className="accordion-body"  key={tutorial.id}>
                              {/* inner cards - completed */}
                             
                              <button
                                    onClick={() =>
                                      setCurrentVideoUrl(tutorial?.video_link) }
                                    className={`inner-card completed${tutorial.id}`}
                                    type="button"
                                  >
                            
                                <div className="d-flex align-items-center">
                                  <span className="start-icon me-2">
                                    <VideoOctagonIcon />
                                    {/* <ClipboardTextIcon /> */}
                                  </span>
                                  <h6 className="inner-heading">{tutorial.name}</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">23:45</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    <CheckCircleFilledIcon />
                                    {/* <div className="circle"></div> */}
                                  </span>
                                </div>
                              </button>
                          
                              {/* inner cards */}
                              {chapterdata?.filter((chapter: any) => chapter.test !== null)
                                .map((chapter: any) => (                             
                                  <button className="inner-card" type="button" onClick={testHandler} >
                                  <div className="d-flex align-items-center" key={chapter.id}>
                                    <span className="start-icon me-2">
                                     {/* <VideoOctagonIcon />  */}
                                     <ClipboardTextIcon />
                                  </span>
                                  <h6 className="inner-heading">{chapter.test.name}</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">5 Que</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    {/* <CheckCircleFilledIcon /> */}
                                   <div className="circle"></div>
                                  </span>
                                </div>
                              </button> 
                           ))}

                            </div>
                            ))}

                          </div>
                        </div>
                ))}            
                       
                      </div>
                    </div>
                  </div>
                </div>
                {/* doubts section */}
                <div className="doubts-wrapper mb-5 d-none d-xl-block">
                  <div className="title-sec">
                    <h5 className="title">Doubts</h5>
                  </div>
                  <div className="chat-section">
                    <div className="scroll-area">
                      {chats.map((chat) => (
                        <div className="chat-bubble-wrapper" key={chat.id}>
                          {chat.isUser !== true ? (
                            <div>
                              <div className="avatar-wrap me-3">
                                <img
                                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                          ) : null}
                          <div
                            className={`chat-bubble ${
                              chat.isUser === true
                                ? "user-chat-bubble"
                                : "tutor-chat-bubble"
                            }`}
                          >
                            <p className="message">{chat.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="form-group">
                      <input type="text" className="form-control" />
                      <button className="send-btn">
                        <SendIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </>
  );
};

export default CourseStreaming;
