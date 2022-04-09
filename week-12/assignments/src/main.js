const { getAll } = require("./controllers/people");

const renderTable = (data, genderParam=""
  , cityParam="", stateParam="") => {
  const tableBody = document.getElementById("table-body");

  const dropDown = document.getElementById("state");
  if (!tableBody && !dropDown) {
    throw new Error("No table element found");
  }

  let source = data;

  source.filter( x =>{
    var option = document.createElement("option");
        option.value = x.state;
        option.text = x.state;
        dropDown.appendChild(option);
  });

  if (genderParam) {
    source = source.filter(({ gender }) => gender.includes(genderParam));
  }

  if (cityParam) {
    source = source.filter(({ city }) => city.includes(cityParam));
  }

  if (stateParam) {
    source = source.filter(({ state }) => state.includes(stateParam));
  }

  const rows = source.reduce(
    (acc, { id, first_name, last_name, email, gender, city, state, country}) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${city}</td>
      <td>${state}</td><td>${country}</td></tr>`,
    ``
    );
  tableBody.innerHTML = rows;
  
};

const onSubmit = (event) => {
  event.preventDefault();

  const queryString = window.location.search;
  console.log(queryString);

  var ele = document.getElementsByClassName("Gender");
  
  var gender;
  for(i = 0; i < ele.length; i++) {
        
      if(ele[i].type="radio") {
        
          if(ele[i].checked)
            gender = ele[i]
      }
    }

  const cityParam = event.target.city

  const stateParam = document.getElementById('state-list').selectedOptions[0].value

  console.log(stateParam);
  getAll().then(({data}) => renderTable(data, gender, cityParam, stateParam));
};

const onReset = () => {
  getAll().then(({data}) => renderTable(data));
};

getAll().then(({data}) => renderTable(data));

module.exports = {
  onSubmit,
  onReset
};