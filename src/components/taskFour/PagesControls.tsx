import React, { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { fetchGitUsersByURL } from "../../Redux/searchSlice";
import { IPagesControlsProps, IPageBtn } from "./interfaces";
import "../../assets/css/GitSearch/PagesControls.css";

const PagesControls: React.FC<IPagesControlsProps> = ({
  prevPage,
  nextPage,
  setPage,
  pageNum,
}: IPagesControlsProps) => {
  const pageLinks = useAppSelector((state) => state.searchGitUsers.pageLinks);
  const pagesCount = useMemo(
    () =>
      pageLinks
        .find(({ relation }) => relation === "last")
        ?.link.match(/\?page=\d+/g)
        ?.pop()
        ?.replace(/\?page=/g, "") ?? 1,
    [pageLinks]
  );
  const dispatch = useAppDispatch();

  const pageButtons: IPageBtn[] = useMemo(
    () =>
      pageLinks.map(({ link, relation }) => {
        switch (relation) {
          case "prev":
            return {
              position: 1,
              btn: (
                <button
                  type="button"
                  key={1}
                  onClick={() => {
                    dispatch(fetchGitUsersByURL(link));
                    prevPage();
                  }}
                >
                  Prev Page
                </button>
              ),
            };
          case "next":
            return {
              position: 3,
              btn: (
                <button
                  type="button"
                  key={3}
                  onClick={() => {
                    dispatch(fetchGitUsersByURL(link));
                    nextPage();
                  }}
                >
                  Next Page
                </button>
              ),
            };
          case "last":
            return {
              position: 4,
              btn: (
                <button
                  type="button"
                  key={4}
                  onClick={() => {
                    dispatch(fetchGitUsersByURL(link));
                    setPage(+pagesCount);
                  }}
                >
                  Last Page
                </button>
              ),
            };
          case "first":
            return {
              position: 0,
              btn: (
                <button
                  type="button"
                  key={0}
                  onClick={() => {
                    dispatch(fetchGitUsersByURL(link));
                    setPage(1);
                  }}
                >
                  First Page
                </button>
              ),
            };
          default:
            return {
              position: -1,
              btn: <></>,
            };
        }
      }),
    [dispatch, nextPage, pageLinks, pagesCount, prevPage, setPage]
  );

  const currentPageButton: { position: number; btn: JSX.Element } = {
    position: 2,
    btn: (
      <button
        type="button"
        key={2}
        disabled
        className={pageButtons.length === 0 ? "b-r-4px" : ""}
      >
        {pageNum}
      </button>
    ),
  };

  return (
    <div className="pages-controls">
      {pageButtons.length !== 0 ? (
        [...pageButtons, currentPageButton]
          .sort((a, b) => a.position - b.position)
          .map((el) => el.btn)
      ) : (
        <></>
      )}
    </div>
  );
};

export default PagesControls;
