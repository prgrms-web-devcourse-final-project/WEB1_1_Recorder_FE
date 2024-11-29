import SearchBox from "@/components/reviews/searchBox";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { ReviewListItem } from "@/types/reviewTypes";

const Reviews = () => {
  const reviewList: ReviewListItem[] = [
    {
      id: 1,
      writer: "user1",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    },
    {
      id: 2,
      writer: "user2",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    },
    {
      id: 3,
      writer: "user3",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    },
    {
      id: 4,
      writer: "user4",
      title: "title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem veritatis, aliquid recusandae possimus quos quo at eligendi eos tenetur assumenda velit aliquam cum culpa sint sit molestiae obcaecati impedit.",
      createdAt: "2020-10-10",
      answerCount: 3,
      readCount: 10,
      stacks: ["typescript", "react"]
    }
  ];
  return (
    <div className="m-auto max-w lg:px-20">
      <SearchBox />
      <section className="my-10">
        <ReviewSummaryList reviewList={reviewList} size="lg" />
      </section>
    </div>
  );
};

export default Reviews;
