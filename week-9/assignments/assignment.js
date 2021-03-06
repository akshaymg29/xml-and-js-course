const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });


  const renderTable = (data, first, last) => {
    const tableBody = document.getElementById("table-main");
  
    if (!tableBody) {
      throw new Error("No table element found");
    }

    let source = data;
  
    if (first) {
      source = source.filter(({ first_name }) => first_name.toLowerCase().includes(first));
    }

    if(last) {
        source = source.filter(({ last_name }) => last_name.toLowerCase().includes(last));
    }
  
    const rows = source.reduce(
      (acc, { id, first_name, last_name, email, gender, ip_address }) =>
        acc +
        `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td>
          <td>${email}</td><td>${gender}</td><td>${ip_address}</td></tr>`,
      ``
    );
  
    tableBody.innerHTML = rows;
  };

  const onSubmit = (event) => {
    event.preventDefault();
  
    const first = event.target.first_name.value;
    const last = event.target.last_name.value;
    
    loadData(`./data.json`).then((data) => renderTable(data, first, last));
  };
  
  const onReset = () => {
    loadData(`./data.json`).then((data) => renderTable(data));
  };

  loadData(`./data.json`).then((data) => renderTable(data));