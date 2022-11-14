// import propTypes from 'prop-types';

import { MenubarOptions } from "./menubar-options";
import { Text } from "shared/components/text/text";
import { Button } from "shared/components/button/button";
import { Divider } from "shared/components/divider/divider";
import { PoweredByMamo } from "shared/components/powered-by-mamo/powered-by-mamo";
import { ReactComponent as MenubarLogo } from "shared/assets/svgs/mamo-pay-logo-business-white-1.svg";

export const Menubar = () => {
  return (
    <div className="relative hidden lg:flex flex-col h-full min-w-65 bg-mamo-blue-500">
      <MenubarLogo className="ml-6 mt-4 mb-4.25" />
      <Divider />

      <div id="menu-buttons" className="mt-10 flex flex-col items-center">
        <Button variant="pill-primary" className="bg-mamo-pink-500">
          <Text type="button-2" className="text-mamo-white-500">
            Create payment link
          </Text>
        </Button>
        <MenubarOptions />
      </div>
      <div
        id="menu-footer"
        className="absolute bottom-0 h-14 w-full flex flex-col items-center"
      >
        <Divider />
        <PoweredByMamo />
      </div>
    </div>
  );
};
// Menubar.propTypes = {
//   wrapperCss: propTypes.string,
// }
// Menubar.defaultProps = {
//   wrapperCss: '',
// }
