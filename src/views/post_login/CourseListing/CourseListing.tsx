import React, { useEffect, useState } from "react";
import "./course-listing.scss";
import Banner from "../../../components/Banner/Banner";
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { addtoWishListStore, deleteWishListStore, getCourseList, getWishList, setCourseList } from "../../../redux/pages/courseSlice";


// icons
import { ReactComponent as SearchIcon } from "../../../assets/icons/icon-search.svg";
import { ReactComponent as SortIcon } from "../../../assets/icons/icon-sort.svg";
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as PaginationRightArrowIcon } from "../../../assets/icons/icon-arrow-right.svg";

const CourseListing = () => {
  const [inputValue, setInputValue] = useState("");
  const [courseListData, setCourseListData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCourseList, setFilteredCourseList] = useState<any>([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("name"); 
  const [sortedCourseList, setSortedCourseList] = useState<any>([]);
  const [wishListID,setWishListID] = useState<any>([]);

  const dispatch = useDispatch<any>();
  const courseInfo = useAppSelector((state) => state.course.courseList);
  const wishlistInfo = useAppSelector((state) => state.course.getWishList);

  
  const itemsPerPage = 7; 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourseList = courseListData.slice(indexOfFirstItem, indexOfLastItem);


  const filterCourses = (input: string) => {
    setInputValue(input);
    const filteredList = courseListData.filter((course: any) =>
      course.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCourseList(filteredList);
    setInputValue(input)
  };

  useEffect(() => {
    dispatch(getCourseList());
    return(() => {
      dispatch(setCourseList([]));
    });
  }, []);

  useEffect(() => {
    if (wishlistInfo?.data) {
      const mappedData = wishlistInfo.data.map((item:any) => {
        return item.id; 
      })
      setWishListID(mappedData);
    }
  }, [wishlistInfo]);
 
  useEffect(() => {
    if (courseInfo && courseInfo?.length) {
      setCourseListData([...courseInfo]);
    }
  }, [courseInfo]);

  useEffect(() => {
    const sortedList = [...courseListData];
    sortedList.sort((a: any, b: any) => {
      if (sortField === "name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortField === "date") {
        return sortOrder === "asc" ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

    setSortedCourseList(sortedList);
  }, [courseListData, sortField, sortOrder]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  
  const handleSortChange = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleWishlistAction = (subject_id: any) => {
    if  (wishListID.includes(subject_id)) {
      setWishListID(wishListID.filter((id: any) => id !== subject_id));
      dispatch(deleteWishListStore({ subject_id })).then(() =>{
        dispatch(getWishList());
      });
    } else {
      setWishListID([...wishListID, subject_id]);
      dispatch(addtoWishListStore({ subject_id })).then(() =>{
        dispatch(getWishList())
      });
    }
  };

  return (
    <div className="course-listing-page">
      <Banner />
      <div className="course-listing py-3">
        <div className="container-lg">
          <div className="title-section">
            <h4 className="section-title mb-2">Courses</h4>
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
                      onChange={(e) => filterCourses(e.target.value)}                    />
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
              <div>
                <div className="dropdown sort-dropdown">
                  <button
                    className="btn btn-outline-black dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-2">
                      <SortIcon />
                    </span>
                    Sort
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className={`dropdown-item ${
                          sortField === "name" ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => handleSortChange("name")}>
                        Name
                      </a>
                    </li>
                    <li>
                      <a className={`dropdown-item ${
                          sortField === "date" ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => handleSortChange("date")}>
                        Date
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-4 gy-4 mb-5">
          {inputValue === ""? sortedCourseList.map((course:any, key:any)=>(
              <div key={key} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <CourseCard  
                courseData={course} 
                wishListID={wishListID} 
                onWishlistAction={handleWishlistAction} 
                source="courseDetails"
                />
              </div>
            ))
            :filteredCourseList?.map((course: any, key: any) => (
              <div key={key} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <CourseCard 
                  courseData={course} 
                  wishListID={wishListID} 
                  onWishlistAction={handleWishlistAction} 
                  source="courseDetails"
                />
              </div>
            ))}
          </div>
          <div className="pagination-wrapper">
            <nav aria-label="...">
              <ul className="pagination mb-0">
                <li className="page-item disabled me-4">
                  <a className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                    <span className="me-2">
                      <PaginationLeftArrowIcon />
                    </span>
                    Prev
                  </a>
                </li>
                {Array(Math.ceil(courseListData.length / itemsPerPage)).fill(null).map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index +1 ? 'active' : ''}`}>
                  <a className="page-link" href="#">
                  {index + 1}
                  </a>
                </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(courseListData.length / itemsPerPage) ? 'disabled' : ''}`}>
                  <a className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                    Next
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
  );
};

export default CourseListing;
