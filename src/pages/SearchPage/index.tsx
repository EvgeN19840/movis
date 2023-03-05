import { useEffect } from "react";
import routeSearch from "./routes";
import { getSearchFilms } from "store/searchpage/selector";
import { useDispatch, useSelector } from "react-redux";
import { TypedDispatch } from "../../store";
import { ICategory } from "types/ICategory";
import { useParams } from "react-router-dom";
import { IDeteil } from "types/IDeteil";
import { loadSearchPage } from "store/searchpage/actions";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import NewsList from "components/NewList";
import "./styles.scss";

const SearchPage = () => {
  const { register, handleSubmit } = useForm<IDeteil>();
  const { category } = useParams<ICategory>();
  const dispatch = useDispatch<TypedDispatch>();
  const newsList = useSelector(getSearchFilms);

  const onSubmit: SubmitHandler<IDeteil> = (category) => {
    dispatch(loadSearchPage(category.genres));
  };

  useEffect(() => {
    dispatch(loadSearchPage(category));
  }, [dispatch, category]);

  return (
    <div className="wrapsearch">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="clearfon">
          <h1 className="searchcategory">Поиск по категории</h1>
          <input
            className="searchinput"
            {...register("genres")}
            type="text"
            placeholder="example: animals"
          />
          <button className="searchbutton">Send</button>
          <h3 className="searchresulttext">Результаты поиска:</h3>

          {newsList.length > 1 ? (
            <div className="searchresult">
              {newsList.length > 0 && <NewsList list={newsList.slice(0, 4)} />}
            </div>
          ) : (
            <>
              {" "}
              <h3 className="firstext">
                Введите поисковый запрос для отображения результатов
              </h3>{" "}
            </>
          )}
        </div>
      </form>
      <div className="newcategory">{}</div>
    </div>
  );
};
export { routeSearch };
export default SearchPage;
