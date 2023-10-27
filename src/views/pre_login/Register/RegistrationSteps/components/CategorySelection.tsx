import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// icons
import { ReactComponent as BookIcon } from "../../../../../assets/icons/icon-book.svg";
import { ReactComponent as AwardIcon } from "../../../../../assets/icons/icon-award.svg";
import { ReactComponent as GraduationCapIcon } from "../../../../../assets/icons/icon-graduation-cap.svg";
import { ReactComponent as BriefcaseIcon } from "../../../../../assets/icons/icon-briefcase.svg";

// components
import CategoryCard from "../../../../../components/Cards/CategoryCard/CategoryCard";
import { useAppSelector } from "../../../../../redux/hooks";
import { registerFinish } from "../../../../../redux/pages/loginSlice";
import { RootState } from "../../../../../redux/rootReducer";

interface Category {
  setIndex: (data: any) => void;
}
const CategorySelection = forwardRef<any, Category>((props, ref) => {
  const { setIndex = () => {} } = props;

  const registerFinishRef = useRef<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [isSuccess, setIsSucess] = useState<boolean>(false);
  const [categories, setCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>("");
  const courseCategories = useAppSelector(
    (state: RootState) => state.course.courseCategory
  );
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  useImperativeHandle(ref, () => ({
    onSaveFinishTrigger: () => {
      registerFinishRef?.current?.requestSubmit();
    },
  }));

  useEffect(() => {
    setCategories(courseCategories);
  }, [courseCategories]);

  useEffect(() => {
    if (isSuccess) {
      setIsSucess(true); 
      navigate("/courses"); 
    }
  }, [isSuccess, navigate]);

  const onSubmit = async () => {
    if (selectedCategory) {
      try {
        dispatch(registerFinish({ program: selectedCategory }, setIndex));
        setIsSucess(true);
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  return (
    <div className="category-section  mb-5">
      <form ref={registerFinishRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-4">
          {categories?.map((category: any, key: any) => (
            <div key={key} className="col-6 col-lg-3">
              <CategoryCard
                category={category}
                selecetdCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setIndex={setIndex}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
});

export default CategorySelection;
