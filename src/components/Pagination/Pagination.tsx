import React from "react";
import { useSearchParams } from "react-router";
import { Pagination, Stack } from "@mui/material";

interface Props {
  count: number;
  page: number;
}

const CustomPagination: React.FC<Props> = ({ count, page }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleChange = (_: unknown, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("p", value.toString());
    setSearchParams(params);
  };

  if (count < 2) return null;

  return (
    <Stack spacing={2} sx={{ paddingY: 4 }}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={onHandleChange}
        page={page || 1}
      />
    </Stack>
  );
};

export default CustomPagination;
