const { getAll, getById } = require("./API/person");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");


  tableBody.innerHTML = "";
  let source = data;
  const rows = source.reduce(
    (acc, { id, first_name, last_name, email, phone_number, gender, city, state, country, postal_code}) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${phone_number}</td>
      <td>${gender}</td><td>${city}</td><td>${state}</td><td>${country}</td><td>${postal_code}</td></tr>`,
    ``
    );
  tableBody.innerHTML = rows;
  
};

const onSubmit = (event) => {
  event.preventDefault();

  const idParam = event.target.id.value;
  const fnameParam = event.target.firstNm.value;
  console.log(fnameParam)
  const lnameParam = event.target.lastNm.value;
  const gender = document.querySelector('input[name="gender"]:checked');
  var genderValue;
  if(gender)
    genderValue = gender.value;
  else
    genderValue = null;
  const cityParam = event.target.city.value;
  const stateParam = event.target.state.value;;
  const countryParam = event.target.country.value;
  const postalParam = event.target.postal.value;
  const emailParam = event.target.email.value;
  const phoneParam = event.target.phone.value;

  if(idParam)
    getById(idParam).then(({data}) => renderTable(data));
  else
  {
    getAll(fnameParam, lnameParam, genderValue, cityParam, stateParam, countryParam, postalParam
    ,emailParam,phoneParam).then(({data}) => renderTable(data));
  }
    
};

const onReset = () => {
  getAll().then(({data}) => renderTable(data));
};

getAll().then(({data}) => renderTable(data));

document.getElementById("myForm").addEventListener("submit", onSubmit);
document.getElementById("myForm").addEventListener("reset", onReset);