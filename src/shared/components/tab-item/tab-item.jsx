import { useMemo } from "react";
import propTypes from "prop-types";

import { Button } from "shared/components/button/button";
import { Text } from "shared/components/text/text";

export const TabItem = ({ children, isSelected, onClick }) => {
  const { buttonType, textColor } = useMemo(() => {
    return {
      buttonType: isSelected ? "tab-item-selected" : "tab-item",
      textColor: isSelected ? "text-mamo-blue-500" : "text-black-200",
    };
  }, [isSelected]);

  return (
    <Button variant={buttonType} className="w-max" onClick={onClick}>
      <Text type="button-1" className={`w-max ${textColor}`}>
        {children}
      </Text>
    </Button>
  );
};
TabItem.propTypes = {
  children: propTypes.node,
  isSelected: propTypes.bool,
  onClick: propTypes.func,
};
