import { BreadcrumbAdmin } from "@/components";
import * as AllLucideIcons from "react-icons/lu";

const Lucide = () => {
  const allLucideIcons = Object.keys(AllLucideIcons);
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Lucide Icons" subtitle="Icons" />
        <div className="p-6 border border-default-200 rounded-lg">
          <div className="px-6">
            <div
              className="grid lg:grid-cols-5 md:grid-cols-3 gap-6 icons-list-demo"
              id="icons"
            >
              {allLucideIcons.map((icon, idx) => {
                const Icon = AllLucideIcons[icon];
                return (
                  <div className="flex items-center gap-3" key={idx}>
                    <Icon name={icon} size={24} />
                    <span className="text-sm">{icon.slice(2)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lucide;
