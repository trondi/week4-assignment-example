import axios from "axios";

async function getComments() {
  try {
    console.info("calling api");

    const response = await axios.get(`${process.env.REACT_APP_API_ADDRESS}`);
    const successResult = { state: "success", data: response.data };
    return successResult;
  } catch (e) {
    if (e instanceof Error) {
      alert(`통신에 실패했습니다. 다시 시도해주세요: ${e.message}`);
    }
    const failResult = { state: "fail", data: [] };
    return failResult;
  }
}

export default getComments;
