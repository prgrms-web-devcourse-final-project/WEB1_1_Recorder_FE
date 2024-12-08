import fetchInstance from "@/services/fetchInstance";

type getStackListResponseProps = Promise<{
  message: string;
  result: { skillStacks: string[] };
}>;

const getStackList = async (): getStackListResponseProps => {
  try {
    const data = await fetchInstance.get("/tech");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getStackList;
