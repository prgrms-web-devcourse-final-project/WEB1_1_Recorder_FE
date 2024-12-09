import fetchInstance from "@/services/fetchInstance";

type getHeartStatusResponseProps = Promise<{
  message: string;
  result: {
    isGood: boolean;
    isBad: boolean;
  };
}>;

const getHeartStatus = async (answerId: number): getHeartStatusResponseProps => {
  try {
    const data = await fetchInstance.get(`/answers/${answerId}/heart`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getHeartStatus;
