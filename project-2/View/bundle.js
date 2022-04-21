(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/Data.json":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Nikaniki","last_name":"Lackemann","email":"nlackemann0@amazon.com","gender":"Genderfluid","phone_number":"2022771335","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20244"},
{"id":2,"first_name":"Chuck","last_name":"Quiddington","email":"cquiddington1@icio.us","gender":"Male","phone_number":"9379127901","city":"Dayton","state":"Ohio","country":"United States","postal_code":"45408"},
{"id":3,"first_name":"Robbert","last_name":"Rawcliffe","email":"rrawcliffe2@e-recht24.de","gender":"Agender","phone_number":"7188118436","city":"Flushing","state":"New York","country":"United States","postal_code":"11355"},
{"id":4,"first_name":"Thomas","last_name":"Ziehms","email":"tziehms3@noaa.gov","gender":"Bigender","phone_number":"4154637381","city":"San Francisco","state":"California","country":"United States","postal_code":"94116"},
{"id":5,"first_name":"Blinni","last_name":"Kingett","email":"bkingett4@bloomberg.com","gender":"Female","phone_number":"7146263385","city":"Los Angeles","state":"California","country":"United States","postal_code":"90040"},
{"id":6,"first_name":"Donna","last_name":"Deerr","email":"ddeerr5@de.vu","gender":"Female","phone_number":"5025918029","city":"Louisville","state":"Kentucky","country":"United States","postal_code":"40293"},
{"id":7,"first_name":"Alexandro","last_name":"Cree","email":"acree6@guardian.co.uk","gender":"Male","phone_number":"2604865241","city":"Fort Wayne","state":"Indiana","country":"United States","postal_code":"46862"},
{"id":8,"first_name":"Missie","last_name":"Furmedge","email":"mfurmedge7@unblog.fr","gender":"Female","phone_number":"2164362288","city":"Cleveland","state":"Ohio","country":"United States","postal_code":"44191"},
{"id":9,"first_name":"Tam","last_name":"Stratford","email":"tstratford8@comcast.net","gender":"Male","phone_number":"7249445638","city":"Pittsburgh","state":"Pennsylvania","country":"United States","postal_code":"15205"},
{"id":10,"first_name":"Padriac","last_name":"Norewood","email":"pnorewood9@baidu.com","gender":"Male","phone_number":"8581083323","city":"San Diego","state":"California","country":"United States","postal_code":"92145"},
{"id":11,"first_name":"Levin","last_name":"Lechmere","email":"llechmerea@reverbnation.com","gender":"Male","phone_number":"6783392933","city":"Atlanta","state":"Georgia","country":"United States","postal_code":"30311"},
{"id":12,"first_name":"Alica","last_name":"Aitken","email":"aaitkenb@360.cn","gender":"Female","phone_number":"5082626856","city":"Worcester","state":"Massachusetts","country":"United States","postal_code":"01605"},
{"id":13,"first_name":"Agatha","last_name":"Sherwood","email":"asherwoodc@hostgator.com","gender":"Genderfluid","phone_number":"9727658751","city":"Dallas","state":"Texas","country":"United States","postal_code":"75205"},
{"id":14,"first_name":"Templeton","last_name":"Coenraets","email":"tcoenraetsd@artisteer.com","gender":"Male","phone_number":"7049039730","city":"Charlotte","state":"North Carolina","country":"United States","postal_code":"28225"},
{"id":15,"first_name":"Madelon","last_name":"Ilchenko","email":"milchenkoe@friendfeed.com","gender":"Female","phone_number":"8121168668","city":"Evansville","state":"Indiana","country":"United States","postal_code":"47747"},
{"id":16,"first_name":"Joseph","last_name":"Vahey","email":"jvaheyf@sogou.com","gender":"Male","phone_number":"7655235425","city":"Indianapolis","state":"Indiana","country":"United States","postal_code":"46202"},
{"id":17,"first_name":"Hannis","last_name":"Shakelady","email":"hshakeladyg@intel.com","gender":"Agender","phone_number":"3167073414","city":"Wichita","state":"Kansas","country":"United States","postal_code":"67205"},
{"id":18,"first_name":"Francesca","last_name":"Maloney","email":"fmaloneyh@buzzfeed.com","gender":"Female","phone_number":"3188118569","city":"Shreveport","state":"Louisiana","country":"United States","postal_code":"71166"},
{"id":19,"first_name":"Kissie","last_name":"Jados","email":"kjadosi@google.it","gender":"Female","phone_number":"4026200386","city":"Omaha","state":"Nebraska","country":"United States","postal_code":"68117"},
{"id":20,"first_name":"Benedetto","last_name":"Paskins","email":"bpaskinsj@shareasale.com","gender":"Male","phone_number":"4073463009","city":"Orlando","state":"Florida","country":"United States","postal_code":"32868"},
{"id":21,"first_name":"Alisun","last_name":"Polo","email":"apolok@blogger.com","gender":"Female","phone_number":"4791821542","city":"Fort Smith","state":"Arkansas","country":"United States","postal_code":"72905"},
{"id":22,"first_name":"Sarena","last_name":"Iglesias","email":"siglesiasl@pcworld.com","gender":"Genderfluid","phone_number":"6067022998","city":"London","state":"Kentucky","country":"United States","postal_code":"40745"},
{"id":23,"first_name":"Myrwyn","last_name":"Gainfort","email":"mgainfortm@cpanel.net","gender":"Bigender","phone_number":"8285658281","city":"Asheville","state":"North Carolina","country":"United States","postal_code":"28815"},
{"id":24,"first_name":"Adair","last_name":"Fryer","email":"afryern@php.net","gender":"Male","phone_number":"8316824463","city":"Santa Cruz","state":"California","country":"United States","postal_code":"95064"},
{"id":25,"first_name":"Celestyn","last_name":"Vinson","email":"cvinsono@engadget.com","gender":"Female","phone_number":"8052329147","city":"Ventura","state":"California","country":"United States","postal_code":"93005"},
{"id":26,"first_name":"Sherri","last_name":"Trett","email":"strettp@blogtalkradio.com","gender":"Genderfluid","phone_number":"8035466578","city":"Columbia","state":"South Carolina","country":"United States","postal_code":"29203"},
{"id":27,"first_name":"Creigh","last_name":"Longstaff","email":"clongstaffq@google.ca","gender":"Male","phone_number":"8655162036","city":"Knoxville","state":"Tennessee","country":"United States","postal_code":"37995"},
{"id":28,"first_name":"Aubrie","last_name":"Lideard","email":"alideardr@flavors.me","gender":"Female","phone_number":"7656410075","city":"Crawfordsville","state":"Indiana","country":"United States","postal_code":"47937"},
{"id":29,"first_name":"Chickie","last_name":"Malarkey","email":"cmalarkeys@irs.gov","gender":"Male","phone_number":"4235573971","city":"Kingsport","state":"Tennessee","country":"United States","postal_code":"37665"},
{"id":30,"first_name":"Merissa","last_name":"Gegg","email":"mgeggt@irs.gov","gender":"Female","phone_number":"4022547757","city":"Omaha","state":"Nebraska","country":"United States","postal_code":"68179"},
{"id":31,"first_name":"Lyon","last_name":"Walmsley","email":"lwalmsleyu@craigslist.org","gender":"Male","phone_number":"6198379896","city":"San Diego","state":"California","country":"United States","postal_code":"92137"},
{"id":32,"first_name":"Yanaton","last_name":"Shutt","email":"yshuttv@nytimes.com","gender":"Male","phone_number":"8019883140","city":"Salt Lake City","state":"Utah","country":"United States","postal_code":"84120"},
{"id":33,"first_name":"Dolley","last_name":"Hacker","email":"dhackerw@eventbrite.com","gender":"Polygender","phone_number":"8048163939","city":"Richmond","state":"Virginia","country":"United States","postal_code":"23285"},
{"id":34,"first_name":"Gunther","last_name":"Johantges","email":"gjohantgesx@princeton.edu","gender":"Male","phone_number":"9407440632","city":"Denton","state":"Texas","country":"United States","postal_code":"76205"},
{"id":35,"first_name":"Dionis","last_name":"Laws","email":"dlawsy@irs.gov","gender":"Female","phone_number":"5187185557","city":"Albany","state":"New York","country":"United States","postal_code":"12242"},
{"id":36,"first_name":"Mace","last_name":"Jessep","email":"mjessepz@constantcontact.com","gender":"Male","phone_number":"6196235699","city":"San Diego","state":"California","country":"United States","postal_code":"92170"},
{"id":37,"first_name":"Bronnie","last_name":"Creeber","email":"bcreeber10@addthis.com","gender":"Male","phone_number":"3202663927","city":"Saint Cloud","state":"Minnesota","country":"United States","postal_code":"56372"},
{"id":38,"first_name":"Riki","last_name":"Lathwood","email":"rlathwood11@plala.or.jp","gender":"Female","phone_number":"5718937374","city":"Alexandria","state":"Virginia","country":"United States","postal_code":"22333"},
{"id":39,"first_name":"Dael","last_name":"Burrett","email":"dburrett12@hc360.com","gender":"Male","phone_number":"6142048591","city":"Columbus","state":"Ohio","country":"United States","postal_code":"43231"},
{"id":40,"first_name":"Frannie","last_name":"Flew","email":"fflew13@dmoz.org","gender":"Female","phone_number":"9514448232","city":"Riverside","state":"California","country":"United States","postal_code":"92513"},
{"id":41,"first_name":"Nicoli","last_name":"Brennen","email":"nbrennen14@jiathis.com","gender":"Agender","phone_number":"7135471009","city":"Spring","state":"Texas","country":"United States","postal_code":"77388"},
{"id":42,"first_name":"Jacki","last_name":"Howgill","email":"jhowgill15@usgs.gov","gender":"Female","phone_number":"7192067021","city":"Colorado Springs","state":"Colorado","country":"United States","postal_code":"80935"},
{"id":43,"first_name":"Moira","last_name":"Wife","email":"mwife16@wikispaces.com","gender":"Female","phone_number":"8608341906","city":"Hartford","state":"Connecticut","country":"United States","postal_code":"06145"},
{"id":44,"first_name":"Ambrose","last_name":"O'Feeny","email":"aofeeny17@bloglines.com","gender":"Male","phone_number":"2026265406","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20470"},
{"id":45,"first_name":"Nalani","last_name":"Dubery","email":"ndubery18@drupal.org","gender":"Female","phone_number":"5853737033","city":"Rochester","state":"New York","country":"United States","postal_code":"14639"},
{"id":46,"first_name":"Kev","last_name":"Libri","email":"klibri19@blinklist.com","gender":"Polygender","phone_number":"5019922269","city":"Little Rock","state":"Arkansas","country":"United States","postal_code":"72231"},
{"id":47,"first_name":"Saraann","last_name":"Bahike","email":"sbahike1a@newsvine.com","gender":"Female","phone_number":"8041573908","city":"Richmond","state":"Virginia","country":"United States","postal_code":"23293"},
{"id":48,"first_name":"Stavro","last_name":"Litzmann","email":"slitzmann1b@ox.ac.uk","gender":"Male","phone_number":"9149390278","city":"Yonkers","state":"New York","country":"United States","postal_code":"10705"},
{"id":49,"first_name":"Henriette","last_name":"Dundon","email":"hdundon1c@webs.com","gender":"Female","phone_number":"9169594731","city":"Sacramento","state":"California","country":"United States","postal_code":"94250"},
{"id":50,"first_name":"Robin","last_name":"Blayd","email":"rblayd1d@whitehouse.gov","gender":"Female","phone_number":"8182961162","city":"Northridge","state":"California","country":"United States","postal_code":"91328"},
{"id":51,"first_name":"Garth","last_name":"Reddin","email":"greddin1e@cam.ac.uk","gender":"Male","phone_number":"5624380182","city":"San Francisco","state":"California","country":"United States","postal_code":"94110"},
{"id":52,"first_name":"Vincenty","last_name":"Aspinall","email":"vaspinall1f@hexun.com","gender":"Male","phone_number":"3052861691","city":"Miami","state":"Florida","country":"United States","postal_code":"33185"},
{"id":53,"first_name":"Eveline","last_name":"Toxell","email":"etoxell1g@nytimes.com","gender":"Female","phone_number":"8181537017","city":"Los Angeles","state":"California","country":"United States","postal_code":"90005"},
{"id":54,"first_name":"Orville","last_name":"Sinnott","email":"osinnott1h@vistaprint.com","gender":"Male","phone_number":"6612650949","city":"Bakersfield","state":"California","country":"United States","postal_code":"93381"},
{"id":55,"first_name":"Germaine","last_name":"Arrell","email":"garrell1i@pbs.org","gender":"Female","phone_number":"5125994481","city":"Austin","state":"Texas","country":"United States","postal_code":"78715"},
{"id":56,"first_name":"Sybil","last_name":"Mardoll","email":"smardoll1j@drupal.org","gender":"Female","phone_number":"4027572445","city":"Lincoln","state":"Nebraska","country":"United States","postal_code":"68517"},
{"id":57,"first_name":"Keen","last_name":"Houten","email":"khouten1k@cnbc.com","gender":"Male","phone_number":"4102911798","city":"Baltimore","state":"Maryland","country":"United States","postal_code":"21265"},
{"id":58,"first_name":"Anett","last_name":"Hebdon","email":"ahebdon1l@printfriendly.com","gender":"Female","phone_number":"2027968071","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20535"},
{"id":59,"first_name":"Beryl","last_name":"Indge","email":"bindge1m@walmart.com","gender":"Female","phone_number":"8183114648","city":"Burbank","state":"California","country":"United States","postal_code":"91505"},
{"id":60,"first_name":"Grace","last_name":"Goodwell","email":"ggoodwell1n@si.edu","gender":"Bigender","phone_number":"9107574391","city":"Wilmington","state":"North Carolina","country":"United States","postal_code":"28410"},
{"id":61,"first_name":"Beverie","last_name":"Bauld","email":"bbauld1o@reddit.com","gender":"Female","phone_number":"2086212060","city":"Boise","state":"Idaho","country":"United States","postal_code":"83732"},
{"id":62,"first_name":"Buckie","last_name":"Scogin","email":"bscogin1p@independent.co.uk","gender":"Male","phone_number":"9045393529","city":"Jacksonville","state":"Florida","country":"United States","postal_code":"32255"},
{"id":63,"first_name":"Devlen","last_name":"Dewett","email":"ddewett1q@taobao.com","gender":"Male","phone_number":"2102783822","city":"San Antonio","state":"Texas","country":"United States","postal_code":"78225"},
{"id":64,"first_name":"Toinette","last_name":"Mehew","email":"tmehew1r@princeton.edu","gender":"Female","phone_number":"3057671752","city":"Miami Beach","state":"Florida","country":"United States","postal_code":"33141"},
{"id":65,"first_name":"Carie","last_name":"Kuhlmey","email":"ckuhlmey1s@1und1.de","gender":"Female","phone_number":"2127337898","city":"New York City","state":"New York","country":"United States","postal_code":"10115"},
{"id":66,"first_name":"August","last_name":"Feather","email":"afeather1t@ebay.com","gender":"Non-binary","phone_number":"7047275540","city":"Charlotte","state":"North Carolina","country":"United States","postal_code":"28272"},
{"id":67,"first_name":"Anissa","last_name":"Prinne","email":"aprinne1u@chron.com","gender":"Female","phone_number":"7046181678","city":"Charlotte","state":"North Carolina","country":"United States","postal_code":"28263"},
{"id":68,"first_name":"Alexandrina","last_name":"Drakeford","email":"adrakeford1v@squidoo.com","gender":"Female","phone_number":"2143351173","city":"Arlington","state":"Texas","country":"United States","postal_code":"76096"},
{"id":69,"first_name":"Haze","last_name":"Stroban","email":"hstroban1w@desdev.cn","gender":"Male","phone_number":"7066073200","city":"Columbus","state":"Georgia","country":"United States","postal_code":"31914"},
{"id":70,"first_name":"Misha","last_name":"Gritsunov","email":"mgritsunov1x@mlb.com","gender":"Female","phone_number":"9737143269","city":"Paterson","state":"New Jersey","country":"United States","postal_code":"07505"},
{"id":71,"first_name":"Wainwright","last_name":"Bulcroft","email":"wbulcroft1y@typepad.com","gender":"Male","phone_number":"3613856344","city":"Corpus Christi","state":"Texas","country":"United States","postal_code":"78465"},
{"id":72,"first_name":"Colette","last_name":"Lassells","email":"classells1z@1und1.de","gender":"Female","phone_number":"9182224952","city":"Tulsa","state":"Oklahoma","country":"United States","postal_code":"74126"},
{"id":73,"first_name":"Donovan","last_name":"Petrakov","email":"dpetrakov20@deviantart.com","gender":"Male","phone_number":"4078152232","city":"Orlando","state":"Florida","country":"United States","postal_code":"32859"},
{"id":74,"first_name":"Bendicty","last_name":"Shackle","email":"bshackle21@feedburner.com","gender":"Male","phone_number":"2818198593","city":"Spring","state":"Texas","country":"United States","postal_code":"77386"},
{"id":75,"first_name":"Bettina","last_name":"Sterland","email":"bsterland22@washington.edu","gender":"Female","phone_number":"6027881446","city":"Phoenix","state":"Arizona","country":"United States","postal_code":"85062"},
{"id":76,"first_name":"Doralia","last_name":"Deevey","email":"ddeevey23@salon.com","gender":"Female","phone_number":"2128042905","city":"New York City","state":"New York","country":"United States","postal_code":"10034"},
{"id":77,"first_name":"Jillana","last_name":"Hansana","email":"jhansana24@wisc.edu","gender":"Female","phone_number":"8161885882","city":"Kansas City","state":"Missouri","country":"United States","postal_code":"64125"},
{"id":78,"first_name":"Emile","last_name":"Featherstonehaugh","email":"efeatherstonehaugh25@cbsnews.com","gender":"Male","phone_number":"9707781523","city":"Fort Collins","state":"Colorado","country":"United States","postal_code":"80525"},
{"id":79,"first_name":"Pavel","last_name":"Truscott","email":"ptruscott26@flickr.com","gender":"Male","phone_number":"2057739661","city":"Birmingham","state":"Alabama","country":"United States","postal_code":"35225"},
{"id":80,"first_name":"Currie","last_name":"MacTavish","email":"cmactavish27@tamu.edu","gender":"Male","phone_number":"9165053622","city":"Sacramento","state":"California","country":"United States","postal_code":"94280"},
{"id":81,"first_name":"Ario","last_name":"Adamides","email":"aadamides28@craigslist.org","gender":"Genderfluid","phone_number":"4147008419","city":"Milwaukee","state":"Wisconsin","country":"United States","postal_code":"53220"},
{"id":82,"first_name":"Ameline","last_name":"Claypole","email":"aclaypole29@google.ca","gender":"Female","phone_number":"7185109267","city":"Brooklyn","state":"New York","country":"United States","postal_code":"11210"},
{"id":83,"first_name":"Bobbi","last_name":"Staton","email":"bstaton2a@fema.gov","gender":"Female","phone_number":"4127185888","city":"Pittsburgh","state":"Pennsylvania","country":"United States","postal_code":"15220"},
{"id":84,"first_name":"Pat","last_name":"Fussen","email":"pfussen2b@buzzfeed.com","gender":"Female","phone_number":"3094597810","city":"Peoria","state":"Illinois","country":"United States","postal_code":"61605"},
{"id":85,"first_name":"Adam","last_name":"Spur","email":"aspur2c@house.gov","gender":"Male","phone_number":"2816995404","city":"Houston","state":"Texas","country":"United States","postal_code":"77015"},
{"id":86,"first_name":"Ronald","last_name":"Ingarfill","email":"ringarfill2d@vimeo.com","gender":"Male","phone_number":"8131558636","city":"Clearwater","state":"Florida","country":"United States","postal_code":"33758"},
{"id":87,"first_name":"Shelli","last_name":"Tembey","email":"stembey2e@over-blog.com","gender":"Female","phone_number":"2626774276","city":"Racine","state":"Wisconsin","country":"United States","postal_code":"53405"},
{"id":88,"first_name":"Jania","last_name":"Milesap","email":"jmilesap2f@last.fm","gender":"Female","phone_number":"5021073817","city":"Louisville","state":"Kentucky","country":"United States","postal_code":"40256"},
{"id":89,"first_name":"Nefen","last_name":"Colquyte","email":"ncolquyte2g@prweb.com","gender":"Male","phone_number":"8045299490","city":"Richmond","state":"Virginia","country":"United States","postal_code":"23285"},
{"id":90,"first_name":"Sasha","last_name":"Boffin","email":"sboffin2h@wordpress.org","gender":"Male","phone_number":"4047704248","city":"Atlanta","state":"Georgia","country":"United States","postal_code":"30375"},
{"id":91,"first_name":"Haskel","last_name":"Gricewood","email":"hgricewood2i@miitbeian.gov.cn","gender":"Male","phone_number":"5058066871","city":"Albuquerque","state":"New Mexico","country":"United States","postal_code":"87190"},
{"id":92,"first_name":"Rosette","last_name":"Waplinton","email":"rwaplinton2j@icq.com","gender":"Female","phone_number":"5059340565","city":"Albuquerque","state":"New Mexico","country":"United States","postal_code":"87115"},
{"id":93,"first_name":"Lennie","last_name":"Adcocks","email":"ladcocks2k@blogger.com","gender":"Male","phone_number":"2124963107","city":"New York City","state":"New York","country":"United States","postal_code":"10292"},
{"id":94,"first_name":"Lorine","last_name":"Cholwell","email":"lcholwell2l@dedecms.com","gender":"Female","phone_number":"7653380192","city":"Anderson","state":"Indiana","country":"United States","postal_code":"46015"},
{"id":95,"first_name":"Towny","last_name":"Ruhben","email":"truhben2m@scientificamerican.com","gender":"Male","phone_number":"2148354507","city":"Irving","state":"Texas","country":"United States","postal_code":"75037"},
{"id":96,"first_name":"Corty","last_name":"Pruce","email":"cpruce2n@answers.com","gender":"Male","phone_number":"8043027278","city":"Richmond","state":"Virginia","country":"United States","postal_code":"23289"},
{"id":97,"first_name":"Allie","last_name":"Sorrill","email":"asorrill2o@wikipedia.org","gender":"Female","phone_number":"5139035922","city":"Cincinnati","state":"Ohio","country":"United States","postal_code":"45296"},
{"id":98,"first_name":"Jewell","last_name":"Musslewhite","email":"jmusslewhite2p@ning.com","gender":"Female","phone_number":"3187471808","city":"Shreveport","state":"Louisiana","country":"United States","postal_code":"71151"},
{"id":99,"first_name":"Horatio","last_name":"Gaffer","email":"hgaffer2q@google.com","gender":"Male","phone_number":"2021769548","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20046"},
{"id":100,"first_name":"Kerry","last_name":"Allmen","email":"kallmen2r@microsoft.com","gender":"Female","phone_number":"8175059442","city":"Fort Worth","state":"Texas","country":"United States","postal_code":"76129"},
{"id":101,"first_name":"Damien","last_name":"Snelling","email":"dsnelling2s@wp.com","gender":"Male","phone_number":"9191727400","city":"Raleigh","state":"North Carolina","country":"United States","postal_code":"27605"},
{"id":102,"first_name":"Cece","last_name":"Urling","email":"curling2t@freewebs.com","gender":"Male","phone_number":"5098071070","city":"Spokane","state":"Washington","country":"United States","postal_code":"99260"},
{"id":103,"first_name":"Raynard","last_name":"Neggrini","email":"rneggrini2u@list-manage.com","gender":"Male","phone_number":"5627187275","city":"Los Angeles","state":"California","country":"United States","postal_code":"90071"},
{"id":104,"first_name":"Alanson","last_name":"Davisson","email":"adavisson2v@unc.edu","gender":"Male","phone_number":"2121142339","city":"New York City","state":"New York","country":"United States","postal_code":"10079"},
{"id":105,"first_name":"Myrtle","last_name":"Spores","email":"mspores2w@cyberchimps.com","gender":"Female","phone_number":"9159339862","city":"El Paso","state":"Texas","country":"United States","postal_code":"79955"},
{"id":106,"first_name":"Marja","last_name":"Mockler","email":"mmockler2x@cbc.ca","gender":"Female","phone_number":"7637007964","city":"Minneapolis","state":"Minnesota","country":"United States","postal_code":"55448"},
{"id":107,"first_name":"Kahaleel","last_name":"Bosnell","email":"kbosnell2y@earthlink.net","gender":"Male","phone_number":"6056515842","city":"Sioux Falls","state":"South Dakota","country":"United States","postal_code":"57193"},
{"id":108,"first_name":"Merilyn","last_name":"Slinn","email":"mslinn2z@github.io","gender":"Female","phone_number":"2815531957","city":"Houston","state":"Texas","country":"United States","postal_code":"77293"},
{"id":109,"first_name":"Cobb","last_name":"Cadell","email":"ccadell30@feedburner.com","gender":"Non-binary","phone_number":"7042478335","city":"Charlotte","state":"North Carolina","country":"United States","postal_code":"28278"},
{"id":110,"first_name":"Guenna","last_name":"Guiness","email":"gguiness31@lycos.com","gender":"Female","phone_number":"4157673155","city":"San Francisco","state":"California","country":"United States","postal_code":"94154"},
{"id":111,"first_name":"Allsun","last_name":"Cesaric","email":"acesaric32@ameblo.jp","gender":"Genderfluid","phone_number":"7703702207","city":"Decatur","state":"Georgia","country":"United States","postal_code":"30089"},
{"id":112,"first_name":"Catherina","last_name":"Kaindl","email":"ckaindl33@meetup.com","gender":"Female","phone_number":"4141520038","city":"Milwaukee","state":"Wisconsin","country":"United States","postal_code":"53220"},
{"id":113,"first_name":"Christan","last_name":"McCarty","email":"cmccarty34@hud.gov","gender":"Female","phone_number":"2815646819","city":"Houston","state":"Texas","country":"United States","postal_code":"77075"},
{"id":114,"first_name":"Rick","last_name":"Deetlefs","email":"rdeetlefs35@dailymotion.com","gender":"Bigender","phone_number":"8136626253","city":"Clearwater","state":"Florida","country":"United States","postal_code":"33758"},
{"id":115,"first_name":"Elka","last_name":"Grayham","email":"egrayham36@cbsnews.com","gender":"Female","phone_number":"7856843461","city":"Topeka","state":"Kansas","country":"United States","postal_code":"66606"},
{"id":116,"first_name":"Kendall","last_name":"Gilhooley","email":"kgilhooley37@amazonaws.com","gender":"Male","phone_number":"5594409372","city":"Fresno","state":"California","country":"United States","postal_code":"93709"},
{"id":117,"first_name":"Edd","last_name":"Iredale","email":"eiredale38@google.com.br","gender":"Male","phone_number":"9014717551","city":"Memphis","state":"Tennessee","country":"United States","postal_code":"38188"},
{"id":118,"first_name":"Alvinia","last_name":"Dymick","email":"adymick39@cbslocal.com","gender":"Female","phone_number":"8066733845","city":"Amarillo","state":"Texas","country":"United States","postal_code":"79171"},
{"id":119,"first_name":"Nico","last_name":"Earlam","email":"nearlam3a@odnoklassniki.ru","gender":"Male","phone_number":"8169396519","city":"Kansas City","state":"Missouri","country":"United States","postal_code":"64130"},
{"id":120,"first_name":"Delores","last_name":"MacElharge","email":"dmacelharge3b@npr.org","gender":"Female","phone_number":"2022254043","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20546"},
{"id":121,"first_name":"Libby","last_name":"Tredinnick","email":"ltredinnick3c@latimes.com","gender":"Female","phone_number":"2031432492","city":"Waterbury","state":"Connecticut","country":"United States","postal_code":"06726"},
{"id":122,"first_name":"Bryant","last_name":"Flatman","email":"bflatman3d@aol.com","gender":"Male","phone_number":"6469389158","city":"New York City","state":"New York","country":"United States","postal_code":"10175"},
{"id":123,"first_name":"Flint","last_name":"Souter","email":"fsouter3e@blogtalkradio.com","gender":"Male","phone_number":"6027020877","city":"Phoenix","state":"Arizona","country":"United States","postal_code":"85062"},
{"id":124,"first_name":"Fredi","last_name":"Gargett","email":"fgargett3f@thetimes.co.uk","gender":"Female","phone_number":"3611037648","city":"Corpus Christi","state":"Texas","country":"United States","postal_code":"78475"},
{"id":125,"first_name":"Hamlin","last_name":"Larwell","email":"hlarwell3g@vk.com","gender":"Male","phone_number":"2549801624","city":"Temple","state":"Texas","country":"United States","postal_code":"76505"},
{"id":126,"first_name":"Jordan","last_name":"Magister","email":"jmagister3h@nyu.edu","gender":"Female","phone_number":"7131199542","city":"Houston","state":"Texas","country":"United States","postal_code":"77255"},
{"id":127,"first_name":"Marlena","last_name":"Sorsby","email":"msorsby3i@google.ca","gender":"Female","phone_number":"2023023177","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20215"},
{"id":128,"first_name":"Celine","last_name":"Scotfurth","email":"cscotfurth3j@twitpic.com","gender":"Genderqueer","phone_number":"9185986814","city":"Tulsa","state":"Oklahoma","country":"United States","postal_code":"74126"},
{"id":129,"first_name":"Lyell","last_name":"Arzu","email":"larzu3k@intel.com","gender":"Male","phone_number":"8056643623","city":"Ventura","state":"California","country":"United States","postal_code":"93005"},
{"id":130,"first_name":"Skipp","last_name":"Rilings","email":"srilings3l@linkedin.com","gender":"Male","phone_number":"9198717408","city":"Raleigh","state":"North Carolina","country":"United States","postal_code":"27626"},
{"id":131,"first_name":"Desirae","last_name":"Steer","email":"dsteer3m@surveymonkey.com","gender":"Female","phone_number":"2482084815","city":"Troy","state":"Michigan","country":"United States","postal_code":"48098"},
{"id":132,"first_name":"Egbert","last_name":"Blackster","email":"eblackster3n@stanford.edu","gender":"Male","phone_number":"9547110096","city":"Fort Lauderdale","state":"Florida","country":"United States","postal_code":"33330"},
{"id":133,"first_name":"Yves","last_name":"Humpatch","email":"yhumpatch3o@fda.gov","gender":"Male","phone_number":"7168997516","city":"Buffalo","state":"New York","country":"United States","postal_code":"14205"},
{"id":134,"first_name":"Shelly","last_name":"Hacaud","email":"shacaud3p@nyu.edu","gender":"Female","phone_number":"8624520096","city":"Paterson","state":"New Jersey","country":"United States","postal_code":"07505"},
{"id":135,"first_name":"Whitney","last_name":"Gregersen","email":"wgregersen3q@acquirethisname.com","gender":"Female","phone_number":"8168331339","city":"Independence","state":"Missouri","country":"United States","postal_code":"64054"},
{"id":136,"first_name":"Welch","last_name":"Huzzey","email":"whuzzey3r@mediafire.com","gender":"Male","phone_number":"4195336036","city":"Lima","state":"Ohio","country":"United States","postal_code":"45807"},
{"id":137,"first_name":"Clemmy","last_name":"Dowers","email":"cdowers3s@virginia.edu","gender":"Male","phone_number":"2082511722","city":"Boise","state":"Idaho","country":"United States","postal_code":"83757"},
{"id":138,"first_name":"Keir","last_name":"Shyram","email":"kshyram3t@sohu.com","gender":"Genderqueer","phone_number":"3101883608","city":"Inglewood","state":"California","country":"United States","postal_code":"90398"},
{"id":139,"first_name":"Freddy","last_name":"Sunner","email":"fsunner3u@techcrunch.com","gender":"Female","phone_number":"5171255153","city":"Lansing","state":"Michigan","country":"United States","postal_code":"48956"},
{"id":140,"first_name":"Yasmin","last_name":"Djurevic","email":"ydjurevic3v@phpbb.com","gender":"Female","phone_number":"6146613039","city":"Columbus","state":"Ohio","country":"United States","postal_code":"43240"},
{"id":141,"first_name":"Morse","last_name":"Quantrill","email":"mquantrill3w@cnet.com","gender":"Male","phone_number":"8012306960","city":"Salt Lake City","state":"Utah","country":"United States","postal_code":"84120"},
{"id":142,"first_name":"Barris","last_name":"Mattholie","email":"bmattholie3x@addthis.com","gender":"Male","phone_number":"9142556844","city":"Mount Vernon","state":"New York","country":"United States","postal_code":"10557"},
{"id":143,"first_name":"Kahaleel","last_name":"Hudless","email":"khudless3y@dropbox.com","gender":"Male","phone_number":"9157696152","city":"El Paso","state":"Texas","country":"United States","postal_code":"88574"},
{"id":144,"first_name":"Cami","last_name":"Gaddie","email":"cgaddie3z@ameblo.jp","gender":"Female","phone_number":"2606758265","city":"Fort Wayne","state":"Indiana","country":"United States","postal_code":"46862"},
{"id":145,"first_name":"Bron","last_name":"Prest","email":"bprest40@wiley.com","gender":"Male","phone_number":"7133440516","city":"Houston","state":"Texas","country":"United States","postal_code":"77075"},
{"id":146,"first_name":"Bart","last_name":"Pardoe","email":"bpardoe41@bloomberg.com","gender":"Male","phone_number":"3393418369","city":"Lynn","state":"Massachusetts","country":"United States","postal_code":"01905"},
{"id":147,"first_name":"Kirbee","last_name":"Oyley","email":"koyley42@mlb.com","gender":"Female","phone_number":"9703011006","city":"Grand Junction","state":"Colorado","country":"United States","postal_code":"81505"},
{"id":148,"first_name":"Lindsy","last_name":"Pridden","email":"lpridden43@dion.ne.jp","gender":"Female","phone_number":"4158359107","city":"San Francisco","state":"California","country":"United States","postal_code":"94121"},
{"id":149,"first_name":"Fawnia","last_name":"MacCall","email":"fmaccall44@cmu.edu","gender":"Female","phone_number":"6013485845","city":"Jackson","state":"Mississippi","country":"United States","postal_code":"39210"},
{"id":150,"first_name":"Danell","last_name":"Howat","email":"dhowat45@google.es","gender":"Genderqueer","phone_number":"9154749492","city":"El Paso","state":"Texas","country":"United States","postal_code":"88569"},
{"id":151,"first_name":"Cynde","last_name":"Edgin","email":"cedgin46@reference.com","gender":"Female","phone_number":"2052623864","city":"Birmingham","state":"Alabama","country":"United States","postal_code":"35231"},
{"id":152,"first_name":"Alasdair","last_name":"Jewks","email":"ajewks47@rakuten.co.jp","gender":"Male","phone_number":"7135653074","city":"Houston","state":"Texas","country":"United States","postal_code":"77212"},
{"id":153,"first_name":"Gawen","last_name":"Woolhouse","email":"gwoolhouse48@ft.com","gender":"Male","phone_number":"2024082525","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20231"},
{"id":154,"first_name":"Berthe","last_name":"Freda","email":"bfreda49@redcross.org","gender":"Female","phone_number":"2121434457","city":"New York City","state":"New York","country":"United States","postal_code":"10019"},
{"id":155,"first_name":"Jessica","last_name":"Charnley","email":"jcharnley4a@house.gov","gender":"Female","phone_number":"5407365323","city":"Roanoke","state":"Virginia","country":"United States","postal_code":"24048"},
{"id":156,"first_name":"Lissie","last_name":"Collister","email":"lcollister4b@reuters.com","gender":"Female","phone_number":"4047772036","city":"Decatur","state":"Georgia","country":"United States","postal_code":"30033"},
{"id":157,"first_name":"Wallace","last_name":"Chadd","email":"wchadd4c@tripadvisor.com","gender":"Male","phone_number":"5127305645","city":"Round Rock","state":"Texas","country":"United States","postal_code":"78682"},
{"id":158,"first_name":"Phyllis","last_name":"Capponer","email":"pcapponer4d@webs.com","gender":"Polygender","phone_number":"8041849474","city":"Richmond","state":"Virginia","country":"United States","postal_code":"23289"},
{"id":159,"first_name":"Bunni","last_name":"Alwin","email":"balwin4e@google.co.jp","gender":"Female","phone_number":"2023606596","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20260"},
{"id":160,"first_name":"Ophelie","last_name":"Marchment","email":"omarchment4f@timesonline.co.uk","gender":"Female","phone_number":"8011840164","city":"Sandy","state":"Utah","country":"United States","postal_code":"84093"},
{"id":161,"first_name":"Matthew","last_name":"Folkard","email":"mfolkard4g@irs.gov","gender":"Male","phone_number":"9086128749","city":"Elizabeth","state":"New Jersey","country":"United States","postal_code":"07208"},
{"id":162,"first_name":"Dan","last_name":"Semens","email":"dsemens4h@noaa.gov","gender":"Male","phone_number":"4109021703","city":"Baltimore","state":"Maryland","country":"United States","postal_code":"21239"},
{"id":163,"first_name":"Rickert","last_name":"Guyan","email":"rguyan4i@devhub.com","gender":"Male","phone_number":"3135902171","city":"Detroit","state":"Michigan","country":"United States","postal_code":"48217"},
{"id":164,"first_name":"Ethelred","last_name":"Pfaffel","email":"epfaffel4j@senate.gov","gender":"Male","phone_number":"6268482700","city":"Pasadena","state":"California","country":"United States","postal_code":"91186"},
{"id":165,"first_name":"Nikolos","last_name":"Wathall","email":"nwathall4k@csmonitor.com","gender":"Male","phone_number":"6102379127","city":"Philadelphia","state":"Pennsylvania","country":"United States","postal_code":"19151"},
{"id":166,"first_name":"Boris","last_name":"Craydon","email":"bcraydon4l@senate.gov","gender":"Male","phone_number":"9154973261","city":"El Paso","state":"Texas","country":"United States","postal_code":"79905"},
{"id":167,"first_name":"Alexandros","last_name":"Fisby","email":"afisby4m@ning.com","gender":"Male","phone_number":"3036906710","city":"Denver","state":"Colorado","country":"United States","postal_code":"80235"},
{"id":168,"first_name":"Magnum","last_name":"Kuhnel","email":"mkuhnel4n@blogger.com","gender":"Male","phone_number":"5206967631","city":"Tucson","state":"Arizona","country":"United States","postal_code":"85743"},
{"id":169,"first_name":"Pascale","last_name":"Shildrick","email":"pshildrick4o@baidu.com","gender":"Male","phone_number":"3523862896","city":"Gainesville","state":"Florida","country":"United States","postal_code":"32605"},
{"id":170,"first_name":"Horst","last_name":"Crowcroft","email":"hcrowcroft4p@wikimedia.org","gender":"Male","phone_number":"6516221651","city":"Saint Paul","state":"Minnesota","country":"United States","postal_code":"55127"},
{"id":171,"first_name":"Vittoria","last_name":"Beverley","email":"vbeverley4q@hibu.com","gender":"Female","phone_number":"5714658003","city":"Arlington","state":"Virginia","country":"United States","postal_code":"22234"},
{"id":172,"first_name":"Noel","last_name":"Bedle","email":"nbedle4r@so-net.ne.jp","gender":"Female","phone_number":"3023538725","city":"Wilmington","state":"Delaware","country":"United States","postal_code":"19805"},
{"id":173,"first_name":"Amelia","last_name":"Glenny","email":"aglenny4s@simplemachines.org","gender":"Female","phone_number":"7577799212","city":"Suffolk","state":"Virginia","country":"United States","postal_code":"23436"},
{"id":174,"first_name":"Peyton","last_name":"Fowlston","email":"pfowlston4t@gizmodo.com","gender":"Male","phone_number":"7249101360","city":"New Castle","state":"Pennsylvania","country":"United States","postal_code":"16107"},
{"id":175,"first_name":"Norrie","last_name":"Bigglestone","email":"nbigglestone4u@mediafire.com","gender":"Male","phone_number":"6129412800","city":"Minneapolis","state":"Minnesota","country":"United States","postal_code":"55487"},
{"id":176,"first_name":"Emmit","last_name":"Kilgrew","email":"ekilgrew4v@discuz.net","gender":"Male","phone_number":"7858939935","city":"Topeka","state":"Kansas","country":"United States","postal_code":"66617"},
{"id":177,"first_name":"Skyler","last_name":"Artingstall","email":"sartingstall4w@unc.edu","gender":"Male","phone_number":"7579547166","city":"Chesapeake","state":"Virginia","country":"United States","postal_code":"23324"},
{"id":178,"first_name":"Granville","last_name":"Poulston","email":"gpoulston4x@princeton.edu","gender":"Male","phone_number":"7869501237","city":"Miami","state":"Florida","country":"United States","postal_code":"33153"},
{"id":179,"first_name":"Camilla","last_name":"Hadny","email":"chadny4y@hatena.ne.jp","gender":"Female","phone_number":"5122215790","city":"Austin","state":"Texas","country":"United States","postal_code":"78710"},
{"id":180,"first_name":"Clerkclaude","last_name":"Waterhous","email":"cwaterhous4z@apache.org","gender":"Male","phone_number":"2136499840","city":"Los Angeles","state":"California","country":"United States","postal_code":"90040"},
{"id":181,"first_name":"Cicily","last_name":"Feore","email":"cfeore50@arstechnica.com","gender":"Female","phone_number":"3015835555","city":"Hyattsville","state":"Maryland","country":"United States","postal_code":"20784"},
{"id":182,"first_name":"Chaddy","last_name":"Beteriss","email":"cbeteriss51@purevolume.com","gender":"Male","phone_number":"4055486623","city":"Oklahoma City","state":"Oklahoma","country":"United States","postal_code":"73114"},
{"id":183,"first_name":"Ursala","last_name":"MacAlinden","email":"umacalinden52@sina.com.cn","gender":"Female","phone_number":"2066027278","city":"Seattle","state":"Washington","country":"United States","postal_code":"98195"},
{"id":184,"first_name":"Mara","last_name":"Worley","email":"mworley53@google.it","gender":"Female","phone_number":"8043577526","city":"Richmond","state":"Virginia","country":"United States","postal_code":"23208"},
{"id":185,"first_name":"Grayce","last_name":"Maloney","email":"gmaloney54@live.com","gender":"Female","phone_number":"7194095687","city":"Colorado Springs","state":"Colorado","country":"United States","postal_code":"80925"},
{"id":186,"first_name":"Murial","last_name":"McSporon","email":"mmcsporon55@sogou.com","gender":"Female","phone_number":"2022734321","city":"Washington","state":"District of Columbia","country":"United States","postal_code":"20404"},
{"id":187,"first_name":"Manfred","last_name":"Coaster","email":"mcoaster56@businesswire.com","gender":"Male","phone_number":"9548559964","city":"Hollywood","state":"Florida","country":"United States","postal_code":"33023"},
{"id":188,"first_name":"Kiri","last_name":"Driutti","email":"kdriutti57@nydailynews.com","gender":"Non-binary","phone_number":"8285394731","city":"Asheville","state":"North Carolina","country":"United States","postal_code":"28815"},
{"id":189,"first_name":"Prince","last_name":"Jeckells","email":"pjeckells58@geocities.com","gender":"Male","phone_number":"4195349328","city":"Mansfield","state":"Ohio","country":"United States","postal_code":"44905"},
{"id":190,"first_name":"Wait","last_name":"Buddell","email":"wbuddell59@fda.gov","gender":"Male","phone_number":"2156573819","city":"Philadelphia","state":"Pennsylvania","country":"United States","postal_code":"19093"},
{"id":191,"first_name":"Chrystel","last_name":"Acock","email":"cacock5a@pagesperso-orange.fr","gender":"Female","phone_number":"7137393380","city":"Houston","state":"Texas","country":"United States","postal_code":"77281"},
{"id":192,"first_name":"Dinnie","last_name":"O' Gara","email":"dogara5b@topsy.com","gender":"Female","phone_number":"9158584665","city":"El Paso","state":"Texas","country":"United States","postal_code":"79911"},
{"id":193,"first_name":"Amby","last_name":"Amberger","email":"aamberger5c@gnu.org","gender":"Male","phone_number":"3171813421","city":"Indianapolis","state":"Indiana","country":"United States","postal_code":"46278"},
{"id":194,"first_name":"Verile","last_name":"Ludwikiewicz","email":"vludwikiewicz5d@flavors.me","gender":"Female","phone_number":"3123275555","city":"Chicago","state":"Illinois","country":"United States","postal_code":"60630"},
{"id":195,"first_name":"Nickie","last_name":"Brigden","email":"nbrigden5e@purevolume.com","gender":"Male","phone_number":"9203524570","city":"Green Bay","state":"Wisconsin","country":"United States","postal_code":"54305"},
{"id":196,"first_name":"Delainey","last_name":"Chatterton","email":"dchatterton5f@bravesites.com","gender":"Male","phone_number":"7065901725","city":"Athens","state":"Georgia","country":"United States","postal_code":"30610"},
{"id":197,"first_name":"Genvieve","last_name":"Fury","email":"gfury5g@admin.ch","gender":"Female","phone_number":"6148892880","city":"Columbus","state":"Ohio","country":"United States","postal_code":"43268"},
{"id":198,"first_name":"Dalila","last_name":"Dawes","email":"ddawes5h@amazon.co.uk","gender":"Female","phone_number":"8123694472","city":"Evansville","state":"Indiana","country":"United States","postal_code":"47737"},
{"id":199,"first_name":"Meryl","last_name":"Bisacre","email":"mbisacre5i@ca.gov","gender":"Female","phone_number":"3021740826","city":"Wilmington","state":"Delaware","country":"United States","postal_code":"19810"},
{"id":200,"first_name":"Byrom","last_name":"Seyfart","email":"bseyfart5j@google.fr","gender":"Agender","phone_number":"6155225616","city":"Nashville","state":"Tennessee","country":"United States","postal_code":"37250"}]
},{}],3:[function(require,module,exports){
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
},{"./API/person":1}]},{},[3]);
