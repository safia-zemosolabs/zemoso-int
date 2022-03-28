import theme from "../../../../themes";
import Add, { AddProps } from "./Add";

export default {
  title: "atoms/icons/Add",
  component: Add,
};

export const component = (props: AddProps) => <Add color={props.color}></Add>;

component.args = {
  color: theme.palette.secondary.main,
};
