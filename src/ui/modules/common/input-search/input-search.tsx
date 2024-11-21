/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ChangeEvent, useEffect, useState } from "react";
import SearchIcon from "../icons/search-icon";
import styles from "./input-search.module.css";
import useDebounce from "@/ui/hooks/useDebounce";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import { runSetSearchQuery } from "@/ui/lib/context/chicago-institute-context/actions/runs";
import CloseIcon from "../icons/close-icon";

const InputSearch = () => {
  const { dispatch } = useChicagoArtInsTituteContext();

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

  return (
    <div className={styles.inputSearch}>
      <input
        className={styles.input}
        value={query}
        placeholder="Search the archive"
        onChange={onInputCHangeHandler}
      />
      <button
        className={styles.button}
        onClick={onClickHandler}
        style={{ cursor: query.length ? "pointer" : "initial" }}>
        {query?.length ? (
          <CloseIcon className={styles.icon} color="black" />
        ) : (
          <SearchIcon className={styles.icon} />
        )}
      </button>
    </div>
  );
};

export default InputSearch;
