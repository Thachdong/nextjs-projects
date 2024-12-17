import { SvgIcon } from "@/components/atoms/icon";
import React, { useCallback } from "react";

type TReview = TAboutPageSetting["reviews"][0];

type TAboutReviewsProps = {
  reviews: TReview[]
};

export const AboutReviews: React.FC<TAboutReviewsProps> = ({ reviews }) => {
  const renderReivew = useCallback(
    (review: TReview) => (
      <div key={review.id} className="flex gap-4">
        <img className="rounded-full align-middle" width={210} src={review.avatar} alt={review.username} />

        <div className="flex flex-col gap-4 font-bold">
          <SvgIcon name="quote" />

          <p className="text-gray-500">{review.reviews}</p>

          <p>{review.username}</p>
        </div>
      </div>
    ),
    []
  );
  return (
    <section>
      <h4 className="text-xl text-center font-bold mb-12">Reivews</h4>

      <div className="w-1/2 mx-auto flex flex-col gap-12">{reviews.map(renderReivew)}</div>
    </section>
  );
};
