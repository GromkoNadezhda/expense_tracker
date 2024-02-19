import { Button } from "@mui/material";
import { ICommonProps } from "@types";
import "./BasicButton.scss";

export const BasicButton = ({ props }: { props: ICommonProps }) => (
  <Button
    variant={props.variant}
    className={props.className}
    onClick={props.onClick}
  >
    {props.title}
  </Button>
);
