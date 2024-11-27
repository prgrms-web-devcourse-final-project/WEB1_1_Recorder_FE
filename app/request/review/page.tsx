"use client";

import RequestReviewForm from "@/components/request/review/requestReviewForm";

const RequestReview = ({}) => {
  return (
    <div className="m-auto max-w p-10">
      <h2 className="border-l-8 border-l-primary pl-5 text-3xl font-bold">리뷰 요청</h2>
      <RequestReviewForm />
    </div>
  );
};

export default RequestReview;
