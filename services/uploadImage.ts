import Cookies from "js-cookie";

type uploadImageResponseProps = Promise<{
  message: string;
  result: {
    name: string;
    imageUrl: string;
  };
}>;

const uploadImage = async (imageFile: File): uploadImageResponseProps => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const headers: Record<string, string> = {};
    if (typeof window !== "undefined") {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/image`, {
      method: "POST",
      headers,
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || `Status: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default uploadImage;
