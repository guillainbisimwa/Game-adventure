import 'regenerator-runtime/runtime';

const apiKey = 'RxD51trZR8StzzlR4NaN';
const URI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

const postScore = async (user, score) => {
  const data = {
    user,
    score,
  };

  try {
    const response = await fetch(URI, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error('Cant submit request now');
  } catch (error) {
    return error;
  }
};

const fetchScores = async () => {
  let tenBestScores = '';
  await fetch(URI, { mode: 'cors' })
    .then(
      (response) => {
        if (response.status !== 200) {
          return `Looks like there was a problem. Status Code: ${
            response.status}`;
        }
        response.json().then((data) => {
          data.sort((a, b) => b.scores - a.scores);
          let i = 1;
          data.slice(0, 10).forEach(element => {
            tenBestScores += `${i}. ${element.name} - [${element.scores}] \n`;
            i += 1;
          });
        });
        return tenBestScores;
      },
    )
    .catch((err) => (('Fetch Error :-S', err)));
};

export { postScore, fetchScores };