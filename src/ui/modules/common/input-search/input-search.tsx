"use client";

import { ChangeEvent, useEffect, useState } from "react";
import SearchIcon from "../icons/search-icon";
import styles from "./input-search.module.css";
import useDebounce from "@/ui/hooks/useDebounce";

const InputSearch = () => {
  const [query, setQuery] = useState("");
  const debouncedInputValue = useDebounce(query, 500);

  const fetchSearchResults = async (query: string) => {
    console.log(query);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetchSearchResults(debouncedInputValue);
  }, [debouncedInputValue]);

  return (
    <div className={styles.inputSearch}>
      <input
        value={query}
        placeholder="Search the archive"
        onChange={handleInputChange}
      />
      <SearchIcon />
    </div>
  );
};

export default InputSearch;
