export const remote2Base64 = async (remoteUrl) => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(remoteUrl)}`
    );
    const data = await response.json();
    return data.contents;
  } catch (error) {
    console.error(error);
  }
};
