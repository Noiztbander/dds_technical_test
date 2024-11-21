/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ChangeEvent, useEffect, useState } from "react";
import SearchIcon from "../icons/search-icon";
import styles from "./input-search.module.css";
import useDebounce from "@/ui/hooks/useDebounce";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import {
  runSetSearchQuery,
  runUpdateArtworks,
} from "@/ui/lib/context/chicago-institute-context/actions/runs";
import { fetchGetArtworks } from "@/app/actions";
import CloseIcon from "../icons/close-icon";

const InputSearch = () => {
  const { dispatch, state } = useChicagoArtInsTituteContext();

  const [query, setQuery] = useState("");
  const debouncedInputValue = useDebounce(query, 500);

  const onInputCHangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onClickHandler = () => {
    if (query?.length) {
      setQuery("");
    }
  };

  useEffect(() => {
    dispatch(runSetSearchQuery(debouncedInputValue));
  }, [debouncedInputValue]);

  useEffect(() => {
    fetchGetArtworks({ query: state.filter.query || "" }).then((result) => {
      const { pagination, artworks } = result;
      dispatch(runUpdateArtworks({ pagination, artworks }));
    });
  }, [state.filter.query]);

  return (
    <div className={styles.inputSearch}>
      <input
        value={query}
        placeholder="Search the archive"
        onChange={onInputCHangeHandler}
      />
      <button
        onClick={onClickHandler}
        style={{ cursor: query.length ? "pointer" : "initial" }}>
        {query?.length ? <CloseIcon /> : <SearchIcon />}
      </button>
    </div>
  );
};

export default InputSearch;
