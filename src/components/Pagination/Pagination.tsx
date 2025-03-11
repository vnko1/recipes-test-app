import React from "react";

import { Pagination, Stack } from "@mui/material";
import { usePagination } from "../../hooks";

interface Props {
  count: number;
}

const CustomPagination: React.FC<Props> = ({ count }) => {
  const [page, setPage] = usePagination();

  if (count < 2) return null;

  return (
    <Stack spacing={2} sx={{ paddingY: 4 }}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={(_, value) => setPage(value)}
        page={page}
      />
    </Stack>
  );
};

export default CustomPagination;
