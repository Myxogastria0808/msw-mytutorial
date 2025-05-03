// 何も返さないパターン
const noneFetcher = async (): Promise<void> => {
  const none: void = await fetch("http://localhost:3000/api/greeting/none")
    .then((res) => {
      console.log("none: ", res);
    })
    .catch((err) => {
      console.error("none: ", err);
    });
  return none;
};

export default noneFetcher;
