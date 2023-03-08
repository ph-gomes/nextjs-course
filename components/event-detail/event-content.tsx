import classes from "./event-content.module.css";

export const EventContent = (props: { children: React.ReactNode }) => {
  return <section className={classes.content}>{props.children}</section>;
};
