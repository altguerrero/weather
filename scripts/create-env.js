const fs = require("fs");

fs.writeFileSync("./.env", `API=${process.env.API}\nKEY=${process.env.KEY}`);
