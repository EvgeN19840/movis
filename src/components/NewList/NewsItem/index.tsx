import React from "react";
import { NavLink } from "react-router-dom";
import { routeDeteil as routeDeteilPage } from "../../../pages/DeteilPage";
import { INews } from "../../../types/INews";
import "./styles.scss";

interface InewsItemParams {
  item: INews;
}

const NewsItem: React.FC<InewsItemParams> = ({ item }) => (
  <NavLink className="newsItem" to={routeDeteilPage(item.show.id)}>
    <div className="container">

      <div className="wrap">
        <div className="filmimg">
          <img className="img2" src={item.show.image.medium} alt={item.show.image.medium} />
        </div>
        <div className="filmname">{item.show.name}</div>
        <div className="filmold">{item.show.premiered} </div>
        <div className="filmbody">{item.show.genres}</div>

      </div>
    </div>
  </NavLink>
);
export default NewsItem;
