import { MainHeader } from "./main-header";

export const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};
