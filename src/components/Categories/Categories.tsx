import React from "react";
import { useSearchParams } from "react-router";
import { Chip, Stack } from "@mui/material";

import { useGetCategoriesQuery } from "../../redux";

const Categories: React.FC = () => {
  const { data } = useGetCategoriesQuery(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("c")?.toString();

  const onHandleClick = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("c", term);
      params.set("p", "1");
    } else {
      params.delete("c");
    }
    setSearchParams(params);
  };
  return (
    <Stack direction="row" spacing={1} sx={{ p: 2, flexWrap: "wrap" }}>
      <Chip
        label={"All"}
        onClick={() => onHandleClick("")}
        color={!currentCategory ? "primary" : "default"}
      />
      {data?.categories.map((category) => (
        <Chip
          color={
            currentCategory === category.strCategory ? "primary" : "default"
          }
          key={category.idCategory}
          label={category.strCategory}
          onClick={() => onHandleClick(category.strCategory)}
        />
      ))}
    </Stack>
  );
};

export default Categories;
