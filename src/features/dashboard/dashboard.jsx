import { Outlet } from "react-router-dom";
import propTypes from "prop-types";

import { DashboardHeader } from "./dashboard-header";
import { DashboardSubHeader } from "./dashboard-subheader";

export const Page = ({ children }) => {
  return (
    <div className="h-page overflow-y-auto p-0 pt-12 md:p-12 bg-black-25">
      {children}
    </div>
  );
};
Page.propTypes = {
  children: propTypes.node,
};

export const Dashboard = () => {
  return (
    <div className="w-full h-full bg-gray-400">
      <DashboardHeader />
      <DashboardSubHeader />
      <Page>
        <Outlet context={[]} />
      </Page>
    </div>
  );
};
