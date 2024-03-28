import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      auth
      {children}
    </div>
  );
};

export default Layout;
