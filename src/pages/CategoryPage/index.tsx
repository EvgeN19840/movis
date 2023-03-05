import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../store/categorypage/actions";
import { getFilmCategory } from "../../store/categorypage/selector";
import routeCategory from "./routes";
import { useEffect } from "react";
import NewsList from "../../components/NewList";
import "./styles.scss";

import { TypedDispatch } from "../../store";

const CategoryPage = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const newsList = useSelector(getFilmCategory);

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  return (
    <div className="secondpage">
      <div className="secondpageitem">
        <div className="secondtext">
          Выбранная категория: <span> Cars</span>
        </div>
        <div className="itemtext">
          {newsList.length > 0 && <NewsList list={newsList.slice(0, 20)} />}
      </div>
      </div>
    </div>
  );
};
export { routeCategory };
export default CategoryPage;
