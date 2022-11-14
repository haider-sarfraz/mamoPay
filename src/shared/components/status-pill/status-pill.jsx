import { useMemo } from "react";
import propTypes from "prop-types";

import { ClassNames } from "../../utils/common.utils";
import { Text } from "../text/text";

export const StatusPill = ({ status }) => {
  const { backgroundColor, textColor } = useMemo(() => {
    if (status === "Outstanding") {
      return {
        backgroundColor: "bg-mamo-blue-50",
        textColor: "text-mamo-blue-500",
      };
    }
    if (status === "Cancelled") {
      return { backgroundColor: "bg-black-50", textColor: "text-black-300" };
    }
    if (status === "Paid") {
      return {
        backgroundColor: "bg-harmony-green-50",
        textColor: "text-harmony-green-400",
      };
    }
  }, [status]);

  return (
    <div
      className={ClassNames(
        `flex items-center px-3 py-1.5 w-fit rounded-2xl ${backgroundColor}`
      )}
    >
      <Text type="button-3" className={textColor}>
        {status}
      </Text>
    </div>
  );
};
StatusPill.propTypes = {
  status: propTypes.string.isRequired,
};
