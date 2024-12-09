"use client";
import { useQuery } from "@tanstack/react-query";
import LiveFeedbackContentDetail from "@/components/detail/liveFeedbackContentDetail";
import getLiveFeedbackDetail from "@/services/getLiveFeedbackDetail";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const LiveFeedbackDetail = () => {
  const params = useParams<{ postId: string }>();

  const { data } = useQuery({
    queryKey: ["liveFeedbackDetail", { id: params.postId }],
    queryFn: () => getLiveFeedbackDetail({ id: params.postId })
  });
  console.log(data);

  return (
    <div className="m-auto flex max-w flex-col gap-5 p-10">
      {data && <LiveFeedbackContentDetail liveFeedback={data.result} />}
    </div>
  );
};

export default LiveFeedbackDetail;
