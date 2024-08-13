import { colorVariants } from "@/common";
import { toSentenceCase } from "@/utils";

const DefaultBadges = () => {
  return (
    <div className="w-full">
      <h4 className="mb-6 text-default-700">Default</h4>
      <div className="flex flex-wrap items-end gap-2">
        {colorVariants.map((color, idx) => {
          return (
            <span
              key={idx}
              className={`inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded text-xs font-medium bg-${color} text-white`}
            >
              {toSentenceCase(color)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const PillBadges = () => {
  return (
    <div className="w-full">
      <h4 className="mb-6 text-default-700">Pill Badges</h4>
      <div className="flex flex-wrap items-end gap-2">
        {colorVariants.map((color, idx) => {
          return (
            <span
              key={idx}
              className={`inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-full text-xs font-medium bg-${color} text-white`}
            >
              {toSentenceCase(color)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const LightenBadges = () => {
  return (
    <div className="w-full">
      <h4 className="mb-6 text-default-700">Badges Lighten</h4>
      <div className="flex flex-wrap items-end gap-2">
        {colorVariants.map((color, idx) => {
          return (
            <span
              key={idx}
              className={`inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded text-xs font-medium bg-${color}/10 text-${color}`}
            >
              {toSentenceCase(color)}
            </span>
          );
        })}
        <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded text-xs font-medium bg-dark/10 text-dark">
          Dark
        </span>
      </div>
    </div>
  );
};

const Badges = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <h2 className="font-medium text-base text-default-600 mb-4">Badges</h2>
        <div className="grid 2xl:grid-cols-3 gap-6">
          <DefaultBadges />
          <PillBadges />
          <LightenBadges />
        </div>
      </div>
    </div>
  );
};

export default Badges;
