import { useDispatch, useSelector } from "react-redux";
import { loadMovisMainPage } from "../../store/mainpage/actions";
import { getFilms } from "../../store/mainpage/selector";
import routeMain from "./routes";
import { useEffect } from "react";
import NewsList from "../../components/NewList";
import "./styles.scss";

import React from "react";

import { TypedDispatch } from "../../store";

const MainPage = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const newsList = useSelector(getFilms);

  useEffect(() => {
    dispatch(loadMovisMainPage());
  }, [dispatch]);


  return (
    <div className="mainpage">
      <div className="movis">MOVIESinfo</div>
      <div className="maintext">Самый популярный портал о фильмах</div>
      <div className="news">
        {newsList.length > 0 && <NewsList list={newsList.slice(0, 8)} />}
      </div>
    </div>
  );
};
export { routeMain };
export default MainPage;
