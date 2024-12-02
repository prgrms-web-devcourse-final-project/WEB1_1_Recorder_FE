type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const MyPageTop = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex gap-6 border-b-2 mb-10">
      <p
        className={`text-24pt cursor-pointer border-b-2 ${
          activeTab === "info" ? "border-btnColor" : "border-transparent"
        } hover:border-btnColor`}
        onClick={() => setActiveTab("info")}
      >
        나의 정보
      </p>
      <p
        className={`text-24pt cursor-pointer border-b-2 ${
          activeTab === "questions" ? "border-btnColor" : "border-transparent"
        } hover:border-btnColor`}
        onClick={() => setActiveTab("questions")}
      >
        나의 활동
      </p>
    </div>
  );
};

export default MyPageTop;
