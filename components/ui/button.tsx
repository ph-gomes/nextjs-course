import Link from "next/link";
import classes from "./button.module.css";

export interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { link, children } = props;

  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
};
