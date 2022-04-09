const people = require("../data/final");

const getAll = ({ id, first_name, last_name, email, gender, city, state, country} = {}) =>
  new Promise((resolve) => {
    let result = Array.from(people);

    if (id) {
      result = result.filter((item) => item.id === Number(id));
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((item) => item.last_name === last_name);
    }

    if (email) {
      result = result.filter((item) => item.email === email);
    }

    if (gender) {
      result = result.filter((item) => item.email === gender);
    }

    if (city) {
      result = result.filter((item) => item.city === city);
    }

    if (state) {
      result = result.filter((item) => item.state === state);
    }

    if (country) {
      result = result.filter((item) => item.country === country);
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: product });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
