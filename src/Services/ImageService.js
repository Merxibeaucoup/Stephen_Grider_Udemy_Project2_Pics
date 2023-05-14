import axios from "axios";

export const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID BFPQVevxHv_1PbVXO43H8XIgtbsaM3yS_VbVy9Stze8",
    },
    params: {
      //   what user searches for
      query: "cars",
    },
  });

  console.log(response);

  return response;
};
