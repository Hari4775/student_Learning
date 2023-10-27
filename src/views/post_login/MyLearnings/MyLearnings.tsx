import React, { useEffect, useState } from "react";
import "./my-learnings.scss";

// icons
import { ReactComponent as SearchIcon } from "../../../assets/icons/icon-search.svg";
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as PaginationRightArrowIcon } from "../../../assets/icons/icon-arrow-right.svg";

// components
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import {addtoWishListStore, deleteWishListStore, getWishList, mylearningList, setGetWishList,setmylearningList} from "../../../redux/pages/courseSlice";

const MyLearnings = () => {
  const [inputValue, setInputValue] = useState("");
  const [mylearning, setmylearning] = useState<any>([]);
  const [wishListdata, setWishListdata] = useState<any>(false);
  const [wishListID, setWishListID] = useState<any>([]);

  const dispatch = useDispatch<any>();
  const mylearningInfo = useAppSelector((state) => state.course.mylearningList);
  const wishlistInfo = useAppSelector((state) => state.course.getWishList);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    if (wishlistInfo)
     setWishListdata(wishlistInfo);
  }, [wishlistInfo]);

  useEffect(() => {
    dispatch(mylearningList());
    return () => {
      dispatch(setmylearningList([]));
    };
  }, []);

  useEffect(() => {
    if (mylearningInfo) setmylearning(mylearningInfo);
  }, [mylearningInfo]);

  useEffect(() => {
    if (wishlistInfo?.data) {
      const mappedData = wishlistInfo.data.map((item:any) => {
        return item.id; 
      })
      setWishListID(mappedData);
    }
  }, [wishlistInfo]);


  const wishListHandler = () => {
    dispatch(getWishList());
    return () => {
      dispatch(setGetWishList([]));
    };
  };

  const handleWishlistAction = (subject_id: any) => {
    if (wishListID.includes(subject_id)) {
      setWishListID(wishListID.filter((id: any) => id !== subject_id));
      dispatch(deleteWishListStore({ subject_id })).then(() => {
        dispatch(getWishList());
      });
    } else {
      setWishListID([...wishListID, subject_id]);
      dispatch(addtoWishListStore({ subject_id })).then(() => {
        dispatch(getWishList());
      });
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="my-learnings">
      <div className="my-learnings-listing">
        <div className="container-lg">
          <div className="title-section">
            <h4 className="section-title">My Learnings</h4>
            <div className="search-filter-wrap mb-4">
              <div className="search-wrap">
                <div className="form-control-wrap">
                  <div className="icon-form-control">
                    <div className="start-icon">
                      <SearchIcon />
                    </div>
                    <input
                      className="form-control"
                      placeholder="Search Courses here"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div
                      className={`auto-suggestions-menu ${
                        inputValue.length > 0 ? "h-auto" : "h-0"
                      }`}
                    >
                      <ul>
                        <li>
                          <button className="suggestion">
                            Suggestions 1fdfdf sdfsdf sdfsdf sf
                          </button>
                        </li>
                        <li>
                          <button className="suggestion">
                            Suggestions 1fdfdf sdfsdf sdfsdf sf
                          </button>
                        </li>
                        <li>
                          <button className="suggestion">
                            Suggestions 1fdfdf sdfsdf sdfsdf sf
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-section">
            <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-learnings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-learnings"
                  type="button"
                  role="tab"
                  aria-controls="pills-learnings"
                  aria-selected="true"
                >
                  Learnings
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-wishlist-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-wishlist"
                  type="button"
                  role="tab"
                  aria-controls="pills-wishlist"
                  aria-selected="false"
                  onClick={wishListHandler}
                >
                  Wishlist
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-learnings"
                role="tabpanel"
                aria-labelledby="pills-learnings-tab"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="row gx-4 gy-4 mb-5">
                      {mylearning?.data?.map((course: any, key: any) => (
                        <div
                          key={key}
                          className="col-12 col-sm-6 col-lg-4 col-xl-3"
                        >
                          <CourseCard
                            courseData={course}
                            wishListID={wishListID}
                            onWishlistAction={handleWishlistAction}
                            source="mylearning"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pagination-wrapper">
                      <nav aria-label="...">
                        <ul className="pagination mb-0">
                          <li className="page-item disabled me-4">
                            <a
                              className="page-link"
                              href={mylearning?.links?.[0]?.url}
                            >
                              <span className="me-2">
                                <PaginationLeftArrowIcon />
                              </span>
                              {mylearning?.links?.[0]?.label}
                            </a>
                          </li>

                          <li className="page-item">
                            <a
                              className="page-link"
                              href={mylearning?.links?.[1]?.url}
                            >
                              {mylearning?.links?.[1]?.label}
                            </a>
                          </li>

                          <li className="page-item ms-4">
                            <a
                              className="page-link "
                              href={mylearning?.links?.[2].url}
                            >
                              {mylearning?.links?.[2]?.label}
                              <span className="ms-2">
                                <PaginationRightArrowIcon />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-wishlist"
                role="tabpanel"
                aria-labelledby="pills-wishlist-tab"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="row gx-4 gy-4 mb-5">
                      {wishListdata?.data?.map((course: any, key: any) => (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                          <CourseCard
                            courseData={course}
                            wishListID={wishListID}
                            onWishlistAction={handleWishlistAction}
                            source="viewDetails"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pagination-wrapper">
                      <nav aria-label="...">
                        <ul className="pagination mb-0">
                          <li className="page-item disabled me-4">
                            <a
                              className="page-link"
                              href={wishListdata?.links?.[1]?.url} 
                              >
                              <span className="me-2">
                                <PaginationLeftArrowIcon />
                              </span>
                              {wishListdata?.links?.[0]?.label}
                            </a>
                          </li>
                          <li className="page-item">
                            <a  className="page-link"
                              href={wishListdata?.links?.[1]?.url} >
                              {wishListdata?.links?.[1]?.label}
                            </a>
                          </li>

                          <li className="page-item ms-4">
                            <a  className="page-link"
                              href={mylearning?.links?.[2].url}
                            >
                              {wishListdata?.links?.[2]?.label}
                              <span className="ms-2">
                                <PaginationRightArrowIcon />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default MyLearnings;
