import { BreadcrumbAdmin } from "@/components";
// pages
import IconWidgets from "./IconWidget";
import NormalWidgets from "./NormalWidgets";
import CardWidget from "./CardWidget";
import ChartWidget from "./ChartWidget";
import ImageCardWidget from "./ImageCardWidget";
import TeamWidget from "./TeamWidget";

// data
import { cardWidget, chartWidget, iconWidget, valueWidget } from "./data";

const Widget = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Widget" subtitle="Admin" />
        <div className="space-y-5">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
            {(iconWidget || []).map((value, idx) => {
              return (
                <IconWidgets
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  icon={value.icon}
                  variant1={value.variant1}
                  variant2={value.variant2}
                />
              );
            })}
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
            {(valueWidget || []).map((value, idx) => {
              return (
                <NormalWidgets
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  color={value.color}
                  width={value.width}
                  subText={value.subText}
                />
              );
            })}
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
            {(cardWidget || []).map((value, idx) => {
              return (
                <CardWidget
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  color={value.color}
                  chartColor={value.chartColor}
                  percentage={value.percentage}
                />
              );
            })}
          </div>

          <div className="grid xl:grid-cols-3 md:grid-col-2 gap-5">
            {(chartWidget || []).map((value, idx) => {
              return (
                <ChartWidget
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  chartColor={value.chartColor}
                />
              );
            })}
          </div>
        </div>

        <h4 className="text-lg py-6 text-default-700">Profile/User</h4>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
          <ImageCardWidget />
        </div>

        <h4 className="text-lg mb-3 pb-1 text-default-700">Team</h4>
        <div className="space-y-5">
          <TeamWidget />
        </div>
      </div>
    </div>
  );
};

export default Widget;
