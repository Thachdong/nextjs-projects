import { getS3Url } from "@/libs/utils/s3-utils";
import React, { useCallback } from "react";

type TFounder = TAboutPageSetting["founders"][0]

type TAboutFounderProps = {
  founders: TFounder[];
};

export const AboutFounder: React.FC<TAboutFounderProps> = ({ founders }) => {
  const renderFounder = useCallback(
    ({ id, name, avatar }: TFounder) => (
      <div key={id} className="flex flex-col gap-2">
        <img src={getS3Url(avatar)} width={275} alt={name} />
        <p className="font-bold capitalize">{name}</p>
      </div>
    ),
    []
  );
  return (
    <section>
      <h4 className="text-xl text-center font-bold mb-12">The Founders</h4>

      <div className="flex gap-4 justify-center">
        {founders.map(renderFounder)}
      </div>
    </section>
  );
};
