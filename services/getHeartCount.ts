import fetchInstance from "@/services/fetchInstance";

type getHeartCountResponseProps = Promise<{
  message: string;
  result: {
    goodCount: number;
    badCount: number;
  };
}>;

const getHeartCount = async (answerId: number): getHeartCountResponseProps => {
  try {
    const data = await fetchInstance.get(`/answers/${answerId}/heart/count`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getHeartCount;
