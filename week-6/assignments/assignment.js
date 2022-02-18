const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
  const generateTableRow = (item) => {

    const id = Array.from(item.getElementsByTagName(`id`))[0];
    let name = Array.from(item.getElementsByTagName(`first_name`)).map(
      ({ textContent }) => textContent
    );

    name.push (Array.from(item.getElementsByTagName(`last_name`)).map(
      ({ textContent }) => textContent
    ));
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ipAddress = Array.from(item.getElementsByTagName(`ip_address`))[0];
    
    return `<tr>
      <td>${id.textContent}</td>
      <td>${name.join(" ")}</td>
      <td>${email.textContent}</td>
      <td>${gender.textContent}</td>
      <td>${ipAddress.textContent}</td>
    </tr>`;
  };
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `person`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
  };
  
  loadData(`http://127.0.0.1:8080/people.xml`, renderTable);
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };
  