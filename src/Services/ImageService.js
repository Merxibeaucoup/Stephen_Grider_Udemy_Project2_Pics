import axios from "axios";

/* get images by name */
export const searchImages = async (input) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID BFPQVevxHv_1PbVXO43H8XIgtbsaM3yS_VbVy9Stze8",
    },
    params: {
      //   what user searches for
      query: input,
    },
  });

  console.log(response.data.results);
  return response;
};
