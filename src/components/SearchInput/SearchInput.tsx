import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { TextField } from "@mui/material";

const SearchInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("s")?.toString() || "");

  useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set("s", term.trim());
        params.set("p", "1");
        // params.delete("c");
      } else {
        params.delete("s");
      }
      setSearchParams(params);
    }, 300);

    return () => clearTimeout(t);
  }, [searchParams, setSearchParams, term]);

  return (
    <TextField
      id="outlined-basic"
      label="Search your recipe"
      variant="outlined"
      fullWidth
      defaultValue={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
};

export default SearchInput;
