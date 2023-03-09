import Link from "next/link";
import classes from "./button.module.css";

export interface ButtonProps {
  onClick?: () => void;
  link?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { link, children, onClick } = props;

  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};
