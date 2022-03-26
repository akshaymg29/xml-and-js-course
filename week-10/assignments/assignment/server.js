const http = require("http");

const person = require(`./controllers/student`);

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
    if(basePath === `/api/students`) {
        const {code, data} = await person.getAll(parseParam(searchParam));
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }
    else if(req.url.match(/\/api\/students\/\w+/)) {
        const urlElements = req.url.split(`/`);
        const rollno = basePath.split("/")[3];
        const id = urlElements[urlElements.length - 1];
        console.log(rollno);
        const {code, data} = await person.getById(rollno);
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