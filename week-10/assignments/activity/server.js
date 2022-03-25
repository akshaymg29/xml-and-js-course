const http = require("http");

const person = require(`./controllers/person`);

const parseParam = (searchParam) => {
    const params = new URLSearchParams(searchParam);
    const parsed = Array.from(params.entries()).reduce(
        (acc,[key, value]) => ({
            ...acc,
            [key]: value,
        }),
        {}
    );
    return parsed;
};

const server = http.createServer(async (req, res) => {

    const [basePath, searchParam] = req.url.split(`?`);

    console.log(parseParam(searchParam))
    if(basePath === `/api/persons`) {
        const {code, data} = await person.getAll(parseParam(searchParam));
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }
    else if(req.url.match(/\/api\/persons\/\w+/)) {
        const urlElements = req.url.split(`/`);
        const id = urlElements[urlElements.length - 1];

        const {code, data} = await person.getById(id);
        res.writeHead(code);
        res.end(JSON.stringify(data));
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({message: `Route not found`}));
    }
});

const PORT = 8080;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));