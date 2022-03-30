const scrape = async (query) => {
  console.log("hehe promises are easy");
  const url = new URL("http://localhost:3001/api/scrape");
  url.search = query || "? ";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  if (data) {
    return true;
  }
  return false;
};

export default scrape;
