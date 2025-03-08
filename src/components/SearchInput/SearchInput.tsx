import React from "react";
import { useSearchParams } from "react-router";
import { TextField } from "@mui/material";

const SearchInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleChange = (term: string) => {
    setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set("s", term.trim());
        params.set("p", "1");
      } else {
        params.delete("s");
      }
      setSearchParams(params);
    }, 300);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Search your recipe"
      variant="outlined"
      fullWidth
      defaultValue={searchParams.get("s")?.toString()}
      onChange={(e) => onHandleChange(e.target.value)}
    />
  );
};

export default SearchInput;
