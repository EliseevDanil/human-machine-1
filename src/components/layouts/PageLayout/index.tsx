import type { PropsWithChildren } from "react";

import s from "./PageLayout.module.scss";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={s["page-wrapper"]}>
    <main className={s["page-layout"]}>{children}</main>
  </div>
);

export default PageLayout;
