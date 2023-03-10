import classes from "./error-alert.module.css";

interface ErrorAlertProps {
  children: React.ReactNode;
}

export const ErrorAlert = (props: ErrorAlertProps) => {
  const { children } = props;
  return <div className={classes.alert}>{children}</div>;
};
