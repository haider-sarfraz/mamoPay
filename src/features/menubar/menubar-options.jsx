import propTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "shared/components/button/button";
import { routes } from "shared/constants/routes";
import { Text } from "shared/components/text/text";
import { ClassNames } from "shared/utils/common.utils";

import { ReactComponent as OverviewIcon } from "shared/assets/svgs/overview-icon.svg";
import { ReactComponent as InvoicesIcon } from "shared/assets/svgs/invoices-icon.svg";
import { ReactComponent as PaymentsIcon } from "shared/assets/svgs/payments-icon.svg";
import { ReactComponent as SettingsIcon } from "shared/assets/svgs/settings-icon.svg";
import { ReactComponent as SettlementsIcon } from "shared/assets/svgs/settlements-icon.svg";
import { ReactComponent as LinkIcon } from "shared/assets/svgs/link-icon.svg";

const menuOptions = [
  { icon: OverviewIcon, label: "Overview", path: routes.overview },
  { icon: LinkIcon, label: "Payments links", path: routes.payment_links },
  { icon: InvoicesIcon, label: "Invoices", path: routes.invoices },
  { icon: PaymentsIcon, label: "Payments", path: routes.payments },
  { icon: SettlementsIcon, label: "Settlements", path: routes.settlements },
  { icon: SettingsIcon, label: "Account Settings", path: routes.settings },
];

const MenuOption = ({ option, Icon }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = pathname === `/${option.path}`;
  const cssOverrides = isSelected ? "bg-mamo-blue-400 rounded-xl" : "";

  return (
    <Button
      variant="menubar-primary"
      className={ClassNames(`text-mamo-white-500 pl-4 ${cssOverrides}`)}
      onClick={() => {
        navigate(option.path);
      }}
    >
      <span className="flex gap-4.5">
        <Icon />
        <Text type="button-2">{option.label}</Text>
      </span>
    </Button>
  );
};
MenuOption.propTypes = {
  option: propTypes.shape({
    label: propTypes.string,
    path: propTypes.string,
  }),
  Icon: propTypes.object,
};

export const MenubarOptions = () => {
  return (
    <div className="flex flex-col gap-2">
      {menuOptions.map((option) => {
        return (
          <MenuOption key={option.label} Icon={option.icon} option={option} />
        );
      })}
    </div>
  );
};
