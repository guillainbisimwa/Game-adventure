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

const fetchScores = async (print) => {
  try {
    const response = await fetch(URI, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const result = await response.json();
      let i = 1;
      result.result.sort((a, b) => b.score - a.score).slice(0, 10).forEach(element => {
        print.text += `${i}. ${element.user} - [${element.score}] \n`;
        i += 1;
      });
    }
    throw new Error('Cant get request now');
  } catch (error) {
    return error;
  }
};

export { postScore, fetchScores };