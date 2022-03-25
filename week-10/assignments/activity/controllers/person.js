const data = require("../data/data.json");

const getData = () =>
new Promise((resolve) => {
  resolve({ code: 200, data});
});

const getAll = ({ id, first_name, last_name, email, gender, ip_address }) =>
  new Promise((resolve) => {
    let finalData = Array.from(data);

    if (id) {
      finalData = finalData.filter((item) => item.id === Number(id));
    }

    if (first_name) {
      finalData = finalData.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      finalData = finalData.filter((item) => item.last_name === last_name);
    }

    if (email) {
      finalData = finalData.filter((item) => item.email === email);
    }

    if (gender) {
        finalData = finalData.filter((item) => item.gender === gender);
    }

    if (ip_address) {
        finalData = finalData.filter((item) => item.ip_address === ip_address);
    }

    resolve({ code: 200, data: JSON.stringify(finalData) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = data.find((dataValue) => dataValue.id === Number(id));

    if (person) {
      resolve({ code: 200, data: JSON.stringify(person) });
    }
  });

  module.exports = {
    getAll,
    getById,
  };