import "@styles/globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "StellarOcean",
  description: "Discover The Ocean & The Space",
};

type Props = {
  children?: ReactNode;
  // any props that come into the component
};

const RootLayout = ({ children, ...props }: Props) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
