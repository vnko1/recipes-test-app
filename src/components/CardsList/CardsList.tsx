import React from "react";
import { Stack } from "@mui/material";

interface Props extends React.PropsWithChildren {
  classNames?: string;
}
const CardsList: React.FC<Props> = ({ children, classNames = "" }) => {
  return (
    <Stack
      direction="row"
      sx={{ paddingY: 4, flexWrap: "wrap", gap: 10, justifyContent: "center" }}
      className={classNames}
    >
      {children}
    </Stack>
  );
};

export default CardsList;
