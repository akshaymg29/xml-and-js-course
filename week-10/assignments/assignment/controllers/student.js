const data = require("../data/students.json");

const getData = () =>
new Promise((resolve) => {
  resolve({ code: 200, data});
});

const getAll = ({ rollno, firstname, lastname, nickname, marks}) =>
  new Promise((resolve) => {
    let finalData = Array.from(data);

    if (rollno) {
      finalData = finalData.filter((item) => item.rollno === rollno);
    }

    if (firstname) {
      finalData = finalData.filter((item) => item.firstname === firstname);
    }

    if (lastname) {
      finalData = finalData.filter((item) => item.lastname === lastname);
    }

    if (nickname) {
      finalData = finalData.filter((item) => item.nickname === nickname);
    }

    if (marks) {
        finalData = finalData.filter((item) => item.marks === marks);
    }

    resolve({ code: 200, data: JSON.stringify(finalData) });
  });

const getById = (rollno) =>
  new Promise((resolve) => {
    const person = data.find((dataValue) => dataValue.rollno === rollno);

    if (person) {
      resolve({ code: 200, data: JSON.stringify(person) });
    }
  });

  module.exports = {
    getAll,
    getById,
  };