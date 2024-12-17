import { SvgIcon, TSvgName } from "@/components/atoms/icon";
import React, { useCallback } from "react";
type TPolicy = THomePageSetting['policies'][0]

type TPoliciesProps = {
  policies: TPolicy[]
};

export const Policies: React.FC<TPoliciesProps> = ({ policies }) => {
  const renderPolicy = useCallback(
    ({ icon, title, description }: TPolicy) => (
      <li key={icon}>
        <div className="flex gap-4">
          <SvgIcon name={icon as TSvgName} />

          <div>
            <p className="font-bold">{title}</p>

            <p className="text-gray-400 mb-0">{description}</p>
          </div>
        </div>
      </li>
    ),
    []
  );
  return <ul className="flex gap-8">{policies.map(renderPolicy)}</ul>;
};
