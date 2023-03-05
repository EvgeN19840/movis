import React, { useEffect } from "react";
import routeDeteil from "./routes";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadMovisDeteilPage } from "store/deteilpage/actions";
import { getDeteilFilms } from "store/deteilpage/selector";
import { TypedDispatch } from "../../store";
import star from "../../pictures/star.png";

import { ID } from "types/ID";

import "./styles.scss";

const DeteilPage = () => {
  const { id } = useParams<ID>();
  const dispatch = useDispatch<TypedDispatch>();
  const news = useSelector(getDeteilFilms);


  useEffect(() => {
    dispatch(loadMovisDeteilPage(id));
  }, [dispatch]);

  return (
    <section className="newsPostItem">
      {news.id ? (
        <div className="newsDeteilWrapper">
           <img
            className="imgdet"
            src={news.image.medium}
            alt={news.image.medium}
          />
          <div className="starrat">
          <img className="imgstar" src={star} alt={star} />
             <div className="rating">{news.rating .average}</div>
       
             </div>
<div className="wrapDeteilPage">
          <div className="namefilm">{news.name}</div>
          <div className="prem"><h3 className="stylyname">Год выхода:</h3>  {news.premiered}</div>
          <div className="country">
           <h3 className="stylyname"> Страна: </h3>  {" "}
                  {news.network.country.name}
          </div>

          <div className="genres"><h3 className="stylyname"> Жанр:</h3> {news.genres} </div>
          <div className="summary"><h3 className="stylyname">Описание:</h3> {news.summary}</div>
          <div className="language">Язык: {news.language}</div>
               </div>
        </div>
        
      ) : (
        <>
          {" "}
          <h2>ERROR</h2>{" "}
        </>
      )}
    </section>
  );
};
export { routeDeteil };

export default DeteilPage;

