import { Text } from "shared/components/text/text";
import { usePageLocation } from "../../shared/hooks/location.hooks";

export const DashboardSubHeader = () => {
  const formattedLocation = usePageLocation();

  return (
    <div className="flex flex-col gap-3 justify-center h-35 bg-mamo-white-500 pl-5 md:pl-8 lg:pl-12">
      <Text type="headline-1" className="text-black-500 capitalize">
        {formattedLocation}
      </Text>
      <Text type="paragraph-2" className="text-mamo-black-300">
        Total outstanding amount:{" "}
        <Text type="button-1" className="text-black-500 font-bold">
          AED 1,915.76
        </Text>
      </Text>
    </div>
  );
};
