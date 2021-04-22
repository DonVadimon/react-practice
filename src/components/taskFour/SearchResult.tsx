import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { fetchGitUsers } from "../../Redux/searchSlice";
import SearchResultUserCard from "./SearchResultUserCard";
import fetchStatuses from "../../Redux/fetchStatuses";
import PagesControls from "./PagesControls";
import SearchLoader from "./SearchLoader";
import "../../assets/css/GitSearch/SearchResult.css";
import UserNotFoundMsg from "./UserNotFoundMsg";

const SearchResult: React.FC = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useAppDispatch();
  const { users, query, status } = useAppSelector(
    (state) => state.searchGitUsers
  );

  const nextPage = () => {
    setPageNum((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageNum((prev) => prev - 1);
  };

  const setPage = (num: number) => {
    setPageNum(num);
  };

  useEffect(() => {
    dispatch(fetchGitUsers({ query, pageNum }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    users.length === 0 &&
    (status === fetchStatuses.idle || status === fetchStatuses.succeeded)
  ) {
    return <UserNotFoundMsg />;
  }

  return status === fetchStatuses.idle || status === fetchStatuses.loading ? (
    <SearchLoader />
  ) : (
    <div className="search-result-container">
      <div className="search-result-cards-container">
        <h1 className="search-result-header">Search result</h1>
        {users.map((user) => (
          <SearchResultUserCard key={user.id} user={user} />
        ))}
      </div>
      {status === fetchStatuses.succeeded ? (
        <PagesControls
          prevPage={prevPage}
          nextPage={nextPage}
          pageNum={pageNum}
          setPage={setPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default withRouter(SearchResult);
