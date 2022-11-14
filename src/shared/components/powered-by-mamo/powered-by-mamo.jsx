import { Text } from "shared/components/text/text";
import { ReactComponent as MenuFooterIcon } from "shared/assets/svgs/heart-icon.svg";

export const PoweredByMamo = () => {
  return (
    <div className="w-61 h-full flex items-center pl-4 gap-2.5">
      <MenuFooterIcon />
      <Text type="paragraph-4" className="text-mamo-white-500 opacity-50">
        Powered by Mamo
      </Text>
    </div>
  );
};
