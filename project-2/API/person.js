const people = require("../data/Data.json");

const getAll = (first_name, last_name, gender, city, state, country, postal_code, email, phone_number,) =>
  new Promise((resolve) => {
    let result = Array.from(people);
    console.log(city)
    if (first_name) {
      result = result.filter((item) => item.first_name.includes(first_name));
    }
    if (last_name) {
      result = result.filter((item) => item.last_name.includes(last_name));
    }

    if (email) {
      result = result.filter((item) => item.email.includes(param));
    }

    if (phone_number) {
        result = result.filter((item) => item.phone_number.includes(phone_number));
    }

    if (gender) {
      result = result.filter((item) => item.gender.includes(gender));
    }

    if (city) {
      result = result.filter((item) => item.city.includes(city));
    }

    if (state) {
      result = result.filter((item) => item.state.includes(state));
    }

    if (country) {
      result = result.filter((item) => item.country(country));
    }

    if (postal_code) {
        result = result.filter((item) => item.postal_code.includes(postal_code));
    }
    console.log(result)
    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = people.find((item) => item.id === Number(id));
    const persons = [];
    persons.push(person)
    if (person) {
      resolve({ code: 200, data: persons });
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
