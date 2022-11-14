import { useCallback } from "react";
import propTypes from "prop-types";

import { buttonType } from "./button.theme";
import { ClassNames } from "../../utils/common.utils";

export const Button = ({
  id,
  variant,
  type,
  children,
  className,
  ...buttonProps
}) => {
  const getStyleProps = useCallback(() => {
    return { className: ClassNames(`${buttonType[variant]} ${className}`) };
  }, [className, variant]);

  return (
    <button id={id} type={type} {...buttonProps} {...getStyleProps()}>
      {children}
    </button>
  );
};
Button.propTypes = {
  id: propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  type: propTypes.string,
  variant: propTypes.oneOf([
    "profile-rounded",
    "pill-primary",
    "menubar-primary",
    "tab-item",
    "tab-item-selected",
    "table-navigation",
  ]),
};
Button.defaultProps = {
  id: "",
  type: "button",
  variant: "primary",
  className: "",
};
