import Navigation from "@components/navigation";
import Provider from "@components/provider";
import "@styles/globals.css";
import { FC, ReactNode } from "react";

export const metadata = {
  title: "Prompt Sharer",
  description: "Discover & Share AI Prompts",
};

const RootLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navigation />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

type Props = {
  children: ReactNode;
};

export default RootLayout;
