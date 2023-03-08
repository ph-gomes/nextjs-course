import classes from "./logistics-item.module.css";

export const LogisticsItem = (props: {
  icon: () => JSX.Element;
  children: React.ReactNode;
}) => {
  const { icon: Icon, children } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};
