import { Text } from "shared/components/text/text";
import { ReactComponent as MenubarLogo } from "shared/assets/svgs/mamo-pay-logo-business-white-1.svg";
import { ReactComponent as MenuIcon } from "shared/assets/svgs/hamburger-icon.svg";
import { Button } from "shared/components/button/button";
import { usePageLocation } from "../../shared/hooks/location.hooks";

const Breadcrumb = () => {
  const formattedLocation = usePageLocation();

  return (
    <div className="flex items-center bg-mamo-white-500 border-b-2 h-11 lg:h-16.25 pl-5 md:pl-8 lg:pl-12">
      <Text type="paragraph-4" className="text-mamo-black-200">
        Home
        <span className="capitalize">
          {formattedLocation ? ` > ${formattedLocation}` : ""}
        </span>
      </Text>
    </div>
  );
};

export const DashboardHeader = () => {
  return (
    <>
      <div className="flex lg:hidden items-center justify-between px-5 md:px-8 h-14 bg-mamo-blue-500">
        <div className="flex gap-4">
          <MenuIcon />
          <MenubarLogo />
        </div>
        <Button variant="profile-rounded" className="bg-mamo-blue-300">
          <Text type="headline-5" className="text-mamo-white-500">
            D
          </Text>
        </Button>
      </div>
      <Breadcrumb />
    </>
  );
};
