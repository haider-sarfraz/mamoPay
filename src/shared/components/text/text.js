import { useCallback } from "react";
import propTypes from 'prop-types';

import { textType } from "./text.theme";
import { ClassNames } from "shared/utils/common.utils";

export const Text = ({
  type,
  children,
  className,
  ...textProps
}) => {
  const getStyleProps = useCallback(() => {
    return { className: ClassNames(`${textType[type]} ${className}`) }
  }, [className, type]);

  return (
    <span
      {...getStyleProps()}
      {...textProps}
    >
      {children}
    </span>
  )
}
Text.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  type: propTypes.oneOf([
    'error',
    'button-1', 'button-2', 'button-3',
    'subtitles',
    'headline-1', 'headline-2', 'headline-3', 'headline-5',
    'paragraph-1', 'paragraph-2', 'paragraph-3', 'paragraph-4',
  ]),
}
Text.defaultProps = {
  type: 'subtitles',
  className: ''
};
