import fetchInstance from "@/services/fetchInstance";

type addHeartRequestProps = { answerId: number; isGood: boolean; isAdd: boolean };
type addHeartResponseProps = Promise<{
  message: string;
  result: {
    goodCount: number;
    badCount: number;
  };
}>;

const addHeart = async ({ answerId, isGood, isAdd }: addHeartRequestProps): addHeartResponseProps => {
  try {
    const data = await fetchInstance.post(`/answers/${answerId}/heart`, { isGood: isGood, click: isAdd });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default addHeart;
