(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/final":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Giusto","last_name":"Corsham","email":"gcorsham0@gnu.org","gender":"Male","city":"Philadelphia","state":"Pennsylvania","country":"United States"},
{"id":2,"first_name":"Tamarah","last_name":"Trenholm","email":"ttrenholm1@vistaprint.com","gender":"Female","city":"New Orleans","state":"Louisiana","country":"United States"},
{"id":3,"first_name":"Albertina","last_name":"Ipplett","email":"aipplett2@cmu.edu","gender":"Female","city":"Chula Vista","state":"California","country":"United States"},
{"id":4,"first_name":"Putnam","last_name":"Derby","email":"pderby3@elpais.com","gender":"Male","city":"Dallas","state":"Texas","country":"United States"},
{"id":5,"first_name":"Valdemar","last_name":"Taynton","email":"vtaynton4@slate.com","gender":"Male","city":"Louisville","state":"Kentucky","country":"United States"},
{"id":6,"first_name":"Prent","last_name":"Myerscough","email":"pmyerscough5@netvibes.com","gender":"Male","city":"Washington","state":"District of Columbia","country":"United States"},
{"id":7,"first_name":"Marcos","last_name":"Kwiek","email":"mkwiek6@symantec.com","gender":"Male","city":"Lexington","state":"Kentucky","country":"United States"},
{"id":8,"first_name":"Mikey","last_name":"Gatehouse","email":"mgatehouse7@deliciousdays.com","gender":"Male","city":"Indianapolis","state":"Indiana","country":"United States"},
{"id":9,"first_name":"Fleming","last_name":"Myatt","email":"fmyatt8@dropbox.com","gender":"Non-binary","city":"Norfolk","state":"Virginia","country":"United States"},
{"id":10,"first_name":"Dagmar","last_name":"Daveley","email":"ddaveley9@exblog.jp","gender":"Female","city":"Evansville","state":"Indiana","country":"United States"},
{"id":11,"first_name":"Brigit","last_name":"Lineham","email":"blinehama@spiegel.de","gender":"Female","city":"Newport News","state":"Virginia","country":"United States"},
{"id":12,"first_name":"Phillie","last_name":"Bamforth","email":"pbamforthb@businessweek.com","gender":"Female","city":"Kansas City","state":"Kansas","country":"United States"},
{"id":13,"first_name":"Carrol","last_name":"Cabbell","email":"ccabbellc@eventbrite.com","gender":"Male","city":"Katy","state":"Texas","country":"United States"},
{"id":14,"first_name":"Colby","last_name":"Fotheringham","email":"cfotheringhamd@imageshack.us","gender":"Male","city":"Topeka","state":"Kansas","country":"United States"},
{"id":15,"first_name":"Carry","last_name":"Eskriet","email":"ceskriete@naver.com","gender":"Female","city":"Sacramento","state":"California","country":"United States"},
{"id":16,"first_name":"Booth","last_name":"Daniello","email":"bdaniellof@wix.com","gender":"Male","city":"Milwaukee","state":"Wisconsin","country":"United States"},
{"id":17,"first_name":"Pippa","last_name":"Abbiss","email":"pabbissg@narod.ru","gender":"Female","city":"New York City","state":"New York","country":"United States"},
{"id":18,"first_name":"Cullie","last_name":"Inglese","email":"cingleseh@ezinearticles.com","gender":"Male","city":"Charlotte","state":"North Carolina","country":"United States"},
{"id":19,"first_name":"Adelind","last_name":"Abrahmer","email":"aabrahmeri@virginia.edu","gender":"Female","city":"San Francisco","state":"California","country":"United States"},
{"id":20,"first_name":"Carree","last_name":"Cottie","email":"ccottiej@unc.edu","gender":"Female","city":"Harrisburg","state":"Pennsylvania","country":"United States"},
{"id":21,"first_name":"Aigneis","last_name":"Viscovi","email":"aviscovik@360.cn","gender":"Female","city":"New Haven","state":"Connecticut","country":"United States"},
{"id":22,"first_name":"Killy","last_name":"Greenhaugh","email":"kgreenhaughl@tinyurl.com","gender":"Male","city":"Salt Lake City","state":"Utah","country":"United States"},
{"id":23,"first_name":"Thatcher","last_name":"Evreux","email":"tevreuxm@linkedin.com","gender":"Male","city":"Corpus Christi","state":"Texas","country":"United States"},
{"id":24,"first_name":"Francyne","last_name":"Akenhead","email":"fakenheadn@addtoany.com","gender":"Female","city":"Fairbanks","state":"Alaska","country":"United States"},
{"id":25,"first_name":"Rhodie","last_name":"Shaxby","email":"rshaxbyo@salon.com","gender":"Female","city":"Richmond","state":"Virginia","country":"United States"},
{"id":26,"first_name":"Herve","last_name":"Piperley","email":"hpiperleyp@toplist.cz","gender":"Male","city":"Lincoln","state":"Nebraska","country":"United States"},
{"id":27,"first_name":"Hodge","last_name":"Crawshay","email":"hcrawshayq@theglobeandmail.com","gender":"Male","city":"Erie","state":"Pennsylvania","country":"United States"},
{"id":28,"first_name":"Kyla","last_name":"Blaxton","email":"kblaxtonr@miitbeian.gov.cn","gender":"Female","city":"Dallas","state":"Texas","country":"United States"},
{"id":29,"first_name":"Jolynn","last_name":"Crouse","email":"jcrouses@skype.com","gender":"Female","city":"Washington","state":"District of Columbia","country":"United States"},
{"id":30,"first_name":"Modesta","last_name":"Guppey","email":"mguppeyt@so-net.ne.jp","gender":"Polygender","city":"Arlington","state":"Virginia","country":"United States"},
{"id":31,"first_name":"Willa","last_name":"Sherlaw","email":"wsherlawu@twitpic.com","gender":"Female","city":"Colorado Springs","state":"Colorado","country":"United States"},
{"id":32,"first_name":"Sibyl","last_name":"Hanaby","email":"shanabyv@360.cn","gender":"Male","city":"North Las Vegas","state":"Nevada","country":"United States"},
{"id":33,"first_name":"Kinny","last_name":"Stonelake","email":"kstonelakew@cdc.gov","gender":"Male","city":"Irvine","state":"California","country":"United States"},
{"id":34,"first_name":"Lilli","last_name":"Weond","email":"lweondx@drupal.org","gender":"Female","city":"Charlottesville","state":"Virginia","country":"United States"},
{"id":35,"first_name":"Mirna","last_name":"Skowcraft","email":"mskowcrafty@edublogs.org","gender":"Female","city":"Cleveland","state":"Ohio","country":"United States"},
{"id":36,"first_name":"Lorant","last_name":"Trustey","email":"ltrusteyz@ezinearticles.com","gender":"Male","city":"Orange","state":"California","country":"United States"},
{"id":37,"first_name":"Tamma","last_name":"Skerm","email":"tskerm10@cafepress.com","gender":"Genderqueer","city":"Knoxville","state":"Tennessee","country":"United States"},
{"id":38,"first_name":"Bank","last_name":"Toderini","email":"btoderini11@businessinsider.com","gender":"Male","city":"Atlanta","state":"Georgia","country":"United States"},
{"id":39,"first_name":"Vladimir","last_name":"Simenon","email":"vsimenon12@wiley.com","gender":"Male","city":"Huntington","state":"West Virginia","country":"United States"},
{"id":40,"first_name":"Ximenez","last_name":"Cullinan","email":"xcullinan13@cyberchimps.com","gender":"Male","city":"Oakland","state":"California","country":"United States"},
{"id":41,"first_name":"Merrill","last_name":"Landeaux","email":"mlandeaux14@behance.net","gender":"Female","city":"Boise","state":"Idaho","country":"United States"},
{"id":42,"first_name":"Liz","last_name":"Yeldon","email":"lyeldon15@simplemachines.org","gender":"Female","city":"Atlanta","state":"Georgia","country":"United States"},
{"id":43,"first_name":"Gipsy","last_name":"Gotcliffe","email":"ggotcliffe16@fda.gov","gender":"Female","city":"Elizabeth","state":"New Jersey","country":"United States"},
{"id":44,"first_name":"Gorden","last_name":"Chamney","email":"gchamney17@canalblog.com","gender":"Male","city":"Garland","state":"Texas","country":"United States"},
{"id":45,"first_name":"Helaina","last_name":"Vondrach","email":"hvondrach18@elpais.com","gender":"Female","city":"Indianapolis","state":"Indiana","country":"United States"},
{"id":46,"first_name":"Gris","last_name":"Seys","email":"gseys19@example.com","gender":"Male","city":"Olympia","state":"Washington","country":"United States"},
{"id":47,"first_name":"Evvy","last_name":"Rasp","email":"erasp1a@skype.com","gender":"Female","city":"Columbia","state":"South Carolina","country":"United States"},
{"id":48,"first_name":"Magdalena","last_name":"Ginity","email":"mginity1b@1688.com","gender":"Female","city":"Springfield","state":"Massachusetts","country":"United States"},
{"id":49,"first_name":"Ebony","last_name":"Paler","email":"epaler1c@bing.com","gender":"Female","city":"Trenton","state":"New Jersey","country":"United States"},
{"id":50,"first_name":"Bary","last_name":"Skowcraft","email":"bskowcraft1d@last.fm","gender":"Male","city":"North Little Rock","state":"Arkansas","country":"United States"},
{"id":51,"first_name":"Michelle","last_name":"Bartolacci","email":"mbartolacci1e@google.cn","gender":"Female","city":"Wichita","state":"Kansas","country":"United States"},
{"id":52,"first_name":"Dinnie","last_name":"De Roeck","email":"dderoeck1f@w3.org","gender":"Female","city":"Waco","state":"Texas","country":"United States"},
{"id":53,"first_name":"Ebonee","last_name":"Dalton","email":"edalton1g@google.it","gender":"Female","city":"Richmond","state":"Virginia","country":"United States"},
{"id":54,"first_name":"Lockwood","last_name":"Vardon","email":"lvardon1h@loc.gov","gender":"Male","city":"Bradenton","state":"Florida","country":"United States"},
{"id":55,"first_name":"Jeniffer","last_name":"Sprigin","email":"jsprigin1i@msn.com","gender":"Female","city":"Louisville","state":"Kentucky","country":"United States"},
{"id":56,"first_name":"Darice","last_name":"Ferriby","email":"dferriby1j@imdb.com","gender":"Genderqueer","city":"Terre Haute","state":"Indiana","country":"United States"},
{"id":57,"first_name":"Kev","last_name":"Attoe","email":"kattoe1k@vimeo.com","gender":"Male","city":"Fort Pierce","state":"Florida","country":"United States"},
{"id":58,"first_name":"Edin","last_name":"Furmage","email":"efurmage1l@last.fm","gender":"Female","city":"Fort Lauderdale","state":"Florida","country":"United States"},
{"id":59,"first_name":"Aluino","last_name":"Sauniere","email":"asauniere1m@apache.org","gender":"Male","city":"Vero Beach","state":"Florida","country":"United States"},
{"id":60,"first_name":"Krista","last_name":"Pingston","email":"kpingston1n@wordpress.org","gender":"Female","city":"Savannah","state":"Georgia","country":"United States"},
{"id":61,"first_name":"Norry","last_name":"Jeenes","email":"njeenes1o@cafepress.com","gender":"Male","city":"Dayton","state":"Ohio","country":"United States"},
{"id":62,"first_name":"Geneva","last_name":"Labitt","email":"glabitt1p@telegraph.co.uk","gender":"Genderfluid","city":"Milwaukee","state":"Wisconsin","country":"United States"},
{"id":63,"first_name":"Alec","last_name":"Vials","email":"avials1q@netvibes.com","gender":"Male","city":"Tulsa","state":"Oklahoma","country":"United States"},
{"id":64,"first_name":"Jerrold","last_name":"Riolfi","email":"jriolfi1r@cbsnews.com","gender":"Male","city":"New Orleans","state":"Louisiana","country":"United States"},
{"id":65,"first_name":"Honey","last_name":"Yegorov","email":"hyegorov1s@ucla.edu","gender":"Female","city":"San Bernardino","state":"California","country":"United States"},
{"id":66,"first_name":"Rodie","last_name":"Scholer","email":"rscholer1t@ehow.com","gender":"Female","city":"Greensboro","state":"North Carolina","country":"United States"},
{"id":67,"first_name":"Kelley","last_name":"Gellan","email":"kgellan1u@naver.com","gender":"Female","city":"Baltimore","state":"Maryland","country":"United States"},
{"id":68,"first_name":"Jocelyne","last_name":"Kibby","email":"jkibby1v@vimeo.com","gender":"Female","city":"Newport News","state":"Virginia","country":"United States"},
{"id":69,"first_name":"Donnamarie","last_name":"Dotterill","email":"ddotterill1w@wordpress.org","gender":"Female","city":"Springfield","state":"Missouri","country":"United States"},
{"id":70,"first_name":"Haslett","last_name":"Balog","email":"hbalog1x@ycombinator.com","gender":"Male","city":"Salt Lake City","state":"Utah","country":"United States"},
{"id":71,"first_name":"Georgy","last_name":"Meni","email":"gmeni1y@bing.com","gender":"Male","city":"Baltimore","state":"Maryland","country":"United States"},
{"id":72,"first_name":"Conrado","last_name":"Simes","email":"csimes1z@github.io","gender":"Male","city":"Louisville","state":"Kentucky","country":"United States"},
{"id":73,"first_name":"Joleen","last_name":"Salkeld","email":"jsalkeld20@examiner.com","gender":"Bigender","city":"Louisville","state":"Kentucky","country":"United States"},
{"id":74,"first_name":"Eldon","last_name":"Managh","email":"emanagh21@webmd.com","gender":"Male","city":"Mobile","state":"Alabama","country":"United States"},
{"id":75,"first_name":"Margareta","last_name":"Giovanetti","email":"mgiovanetti22@joomla.org","gender":"Female","city":"Tacoma","state":"Washington","country":"United States"},
{"id":76,"first_name":"Ki","last_name":"Izatt","email":"kizatt23@privacy.gov.au","gender":"Female","city":"Los Angeles","state":"California","country":"United States"},
{"id":77,"first_name":"Efren","last_name":"Skirven","email":"eskirven24@washingtonpost.com","gender":"Male","city":"Pompano Beach","state":"Florida","country":"United States"},
{"id":78,"first_name":"Noby","last_name":"Galbreath","email":"ngalbreath25@umn.edu","gender":"Male","city":"White Plains","state":"New York","country":"United States"},
{"id":79,"first_name":"Marlowe","last_name":"Reader","email":"mreader26@tinypic.com","gender":"Non-binary","city":"Baltimore","state":"Maryland","country":"United States"},
{"id":80,"first_name":"Edithe","last_name":"Bortoluzzi","email":"ebortoluzzi27@independent.co.uk","gender":"Agender","city":"Detroit","state":"Michigan","country":"United States"},
{"id":81,"first_name":"Elbertine","last_name":"Marflitt","email":"emarflitt28@booking.com","gender":"Female","city":"Las Vegas","state":"Nevada","country":"United States"},
{"id":82,"first_name":"Major","last_name":"Phythien","email":"mphythien29@wordpress.com","gender":"Male","city":"New York City","state":"New York","country":"United States"},
{"id":83,"first_name":"Boonie","last_name":"Dickin","email":"bdickin2a@dion.ne.jp","gender":"Male","city":"Fort Worth","state":"Texas","country":"United States"},
{"id":84,"first_name":"Lorry","last_name":"Lefridge","email":"llefridge2b@va.gov","gender":"Female","city":"Kansas City","state":"Missouri","country":"United States"},
{"id":85,"first_name":"Nathanial","last_name":"Martland","email":"nmartland2c@hibu.com","gender":"Male","city":"Fairbanks","state":"Alaska","country":"United States"},
{"id":86,"first_name":"Renell","last_name":"Laffan","email":"rlaffan2d@hostgator.com","gender":"Female","city":"Tulsa","state":"Oklahoma","country":"United States"},
{"id":87,"first_name":"Frants","last_name":"Glazier","email":"fglazier2e@bizjournals.com","gender":"Male","city":"Huntsville","state":"Alabama","country":"United States"},
{"id":88,"first_name":"Selene","last_name":"Davson","email":"sdavson2f@miitbeian.gov.cn","gender":"Female","city":"Saint Louis","state":"Missouri","country":"United States"},
{"id":89,"first_name":"Jaclyn","last_name":"Clampe","email":"jclampe2g@php.net","gender":"Female","city":"Camden","state":"New Jersey","country":"United States"},
{"id":90,"first_name":"Zedekiah","last_name":"Krzysztof","email":"zkrzysztof2h@amazon.com","gender":"Male","city":"Philadelphia","state":"Pennsylvania","country":"United States"},
{"id":91,"first_name":"Chickie","last_name":"MacNeely","email":"cmacneely2i@shareasale.com","gender":"Bigender","city":"Dallas","state":"Texas","country":"United States"},
{"id":92,"first_name":"Curcio","last_name":"Constantinou","email":"cconstantinou2j@harvard.edu","gender":"Male","city":"Philadelphia","state":"Pennsylvania","country":"United States"},
{"id":93,"first_name":"Adel","last_name":"Roseaman","email":"aroseaman2k@hatena.ne.jp","gender":"Female","city":"Pasadena","state":"California","country":"United States"},
{"id":94,"first_name":"Whitney","last_name":"Ducket","email":"wducket2l@artisteer.com","gender":"Female","city":"Evansville","state":"Indiana","country":"United States"},
{"id":95,"first_name":"Anders","last_name":"Pinnick","email":"apinnick2m@census.gov","gender":"Agender","city":"Cincinnati","state":"Ohio","country":"United States"},
{"id":96,"first_name":"Corbet","last_name":"Statersfield","email":"cstatersfield2n@acquirethisname.com","gender":"Male","city":"Syracuse","state":"New York","country":"United States"},
{"id":97,"first_name":"Crissie","last_name":"Seckom","email":"cseckom2o@auda.org.au","gender":"Female","city":"El Paso","state":"Texas","country":"United States"},
{"id":98,"first_name":"Baryram","last_name":"France","email":"bfrance2p@apple.com","gender":"Male","city":"Terre Haute","state":"Indiana","country":"United States"},
{"id":99,"first_name":"Hodge","last_name":"Duchasteau","email":"hduchasteau2q@ameblo.jp","gender":"Male","city":"Dayton","state":"Ohio","country":"United States"},
{"id":100,"first_name":"Georgy","last_name":"Kingswood","email":"gkingswood2r@tuttocitta.it","gender":"Male","city":"Frankfort","state":"Kentucky","country":"United States"}]
},{}],3:[function(require,module,exports){
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
},{"./controllers/people":1}]},{},[3]);
