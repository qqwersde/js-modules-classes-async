// eslint-disable-next-line no-unused-vars
export const getPoetry = async () => {
  // eslint-disable-next-line no-unused-vars,no-param-reassign,no-undef
  const url = "https://v1.jinrishici.com/all.json";
  const arr = [];
  await new Promise(function (resolve, reject) {
    // eslint-disable-next-line no-undef
    fetch(url, { method: "GET" })
      // eslint-disable-next-line consistent-return
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // eslint-disable-next-line no-undef
        if (data.code === 404) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(`request exception${data.msg}`);
        } else {
          resolve(data);
          console.log(data);
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log(err);
      });
  })
    .then((data) => {
      console.log(data);
      const { origin } = data;
      arr.push(origin);
      const { author } = data;
      arr.push(author);
      const { content } = data;
      arr.push(content);
    })
    .catch((ex) => {
      console.log(ex);
    });
  return arr;
};

export const getPoetryTwo = async () => {
  const url = "https://v1.jinrishici.com/all.json";
  // eslint-disable-next-line no-unused-vars
  const arr = [];
  await fetch(url, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data);
      const { origin } = data;
      arr.push(origin);
      const { author } = data;
      arr.push(author);
      const { content } = data;
      arr.push(content);
    })
    .catch((err) => {
      console.log(err);
    });
  return arr;
};
