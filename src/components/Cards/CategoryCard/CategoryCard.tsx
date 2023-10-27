import React from "react";
import "./category-card.scss";
import { ReactComponent as BriefcaseIcon } from "../../../assets/icons/icon-briefcase.svg";

interface IDCategory {
  category: any;
  selecetdCategory: any;
  setSelectedCategory: (data: any) => void;
  setIndex: any;
}

const CategoryCard: React.FC<IDCategory> = (props) => {
  const {
    category = "",
    selecetdCategory = "",
    setSelectedCategory = () => {},
  } = props;
  return (
    <button
      onClick={() => {
        setSelectedCategory(category?.id);
      }}
      role="button"
      type="button"
      className={`${
        category?.id === selecetdCategory
          ? "category-card selected"
          : "category-card"
      }`}
    >
      <div className="icon-wrap">
        <BriefcaseIcon />
      </div>
      <h5 className="category-card-title">{category?.name}</h5>
      <p className="desc">{category?.description}</p>
    </button>
  );
};

export default CategoryCard;
