import propTypes from "prop-types";
import { useMemo } from "react";

import { Button } from "../button/button";
import { Text } from "../text/text";

import { ReactComponent as LeftArrow } from "shared/assets/svgs/left-arrow-icon.svg";
import { ReactComponent as RightArrow } from "shared/assets/svgs/right-arrow-icon.svg";
import { ClassNames } from "../../utils/common.utils";

export const TableFooter = ({
  tableMeta,
  paginationDetail,
  className,
  onClick,
}) => {
  const { currentPage, totalPages } = paginationDetail;

  const { isPrevDisabled, isNextDisabled } = useMemo(() => {
    switch (true) {
      case currentPage <= 1:
        return { isPrevDisabled: true, isNextDisabled: false };
      case currentPage < totalPages:
        return { isPrevDisabled: false, isNextDisabled: false };
      case currentPage === totalPages:
        return { isPrevDisabled: false, isNextDisabled: true };
      default:
        return { isPrevDisabled: true, isNextDisabled: true };
    }
  });

  return (
    <div className={ClassNames(`h-14 ${className}`)}>
      <div>{tableMeta ? tableMeta : null}</div>

      <div className="flex items-center gap-4">
        <Text type="paragraph-3" className="text-black-500">
          Page {currentPage} of {totalPages}
        </Text>

        <div className="flex gap-2">
          <Button
            variant="table-navigation"
            disabled={isPrevDisabled}
            onClick={() => onClick({ direction: "previous" })}
          >
            <LeftArrow
              className={isPrevDisabled ? "text-black-100" : "text-black-500"}
            />
          </Button>
          <Button
            variant="table-navigation"
            disabled={isNextDisabled}
            onClick={() => onClick({ direction: "previous" })}
          >
            <RightArrow
              className={isNextDisabled ? "text-black-100" : "text-black-500"}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

TableFooter.propTypes = {
  tableMeta: propTypes.oneOfType([propTypes.string, propTypes.node]),
  paginationDetail: propTypes.shape({
    currentPage: propTypes.number,
    totalPages: propTypes.number,
  }),
  className: propTypes.string,
  onClick: propTypes.func,
};
TableFooter.defaultProps = {
  tableMeta: "",
  paginationDetail: {
    currentPage: 1,
    totalPages: 3,
  },
  className: "",
  onClick: null,
};
