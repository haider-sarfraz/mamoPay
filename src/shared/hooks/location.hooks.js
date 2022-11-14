import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const usePageLocation = () => {
  const { pathname } = useLocation();

  const formattedLocation = useMemo(() => {
    const formattedPath = pathname.replace("/", "");
    return formattedPath?.replace("-", " ");
  }, [pathname]);
  return formattedLocation;
}
