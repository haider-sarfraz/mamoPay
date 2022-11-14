import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "shared/constants/routes";

import { InvoicesPage } from "features/invoices/invoices-page";
import { OverviewPage } from "features/overview/overview-page";
import { PaymentsLinkPage } from "features/payment-links/payment-links-page";
import { PaymentsPage } from "features/payments/payments-page";
import { SettlementsPage } from "features/settlements/settlements-page";
import { SettingsPage } from "features/settings/settings-page";
import { Menubar } from "features/menubar/menubar";
import { Dashboard } from "features/dashboard/dashboard";
import "./app.scss";

const AppContainer = () => {
  return (
    <div className="flex h-full">
      <Menubar />
      <Dashboard />
    </div>
  );
};

function App() {
  return (
    <div id="app" className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainer />}>
            <Route path={routes.overview} element={<OverviewPage />} />
            <Route path={routes.payment_links} element={<PaymentsLinkPage />} />
            <Route path={routes.invoices} element={<InvoicesPage />} />
            <Route path={routes.payments} element={<PaymentsPage />} />
            <Route path={routes.settlements} element={<SettlementsPage />} />
            <Route path={routes.settings} element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
