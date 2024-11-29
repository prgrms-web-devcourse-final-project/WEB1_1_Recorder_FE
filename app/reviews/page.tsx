import SearchBox from "@/components/reviews/searchBox";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";

const Reviews = () => {
  const reviewList = [
    {
      id: 1,
      users_id: 1,
      title: "title1",
      type: ["typescript", "react"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false,
      userInfo: {
        userName: "user123",
        userImage: "https://github.com/shadcn.png"
      }
    },
    {
      id: 2,
      users_id: 2,
      title: "title2",
      type: ["python"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false
    },
    {
      id: 3,
      users_id: 3,
      title: "title3",
      type: ["java", "spring"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false
    },
    {
      id: 1,
      users_id: 1,
      title: "title1",
      type: ["typescript", "react"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false,
      userInfo: {
        userName: "user123",
        userImage: "https://github.com/shadcn.png"
      }
    },
    {
      id: 2,
      users_id: 2,
      title: "title2",
      type: ["python"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false
    },
    {
      id: 3,
      users_id: 3,
      title: "title3",
      type: ["java", "spring"],
      state: "state",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia, illo, iste earum maxime molestias incidunt vitae consequuntur sint porro placeat. Quibusdam, ullam aperiam rem earum ipsa magnam nobis odio.",
      read_count: 10,
      created_at: "2020-10-10",
      updated_at: "2020-10-11",
      is_deleted: false,
      is_anomyous: false
    }
  ];
  return (
    <main className="m-auto my-10 max-w px-4 lg:px-20">
      <SearchBox />
      <section className="my-10">
        <ReviewSummaryList reviewList={reviewList} size="lg" />
      </section>
    </main>
  );
};

export default Reviews;
