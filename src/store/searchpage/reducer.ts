import { AnyAction } from "redux";
import { IDeteil } from "types/IDeteil";
import { INews } from "types/INews";

const initialState = {
  movie: [],
};

export interface IStoreD {
  movie: INews[];
}

const movieReduserSearchPage = (
  stateD: IStoreD = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "cinema/setCinema":
      return { ...stateD, movie: action.payload };
    default:
      return stateD;
  }
};
export default movieReduserSearchPage;
