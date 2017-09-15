`use strict`

const express = require(`express`);
const app = express();
const port = process.env.PORT || 5000;

const routes = require(`./routes`);

if (process.env.NODE_ENV === `production`) {
    app.use(express.static(`build`));
}

app.use(`/api`, routes);

app.listen(port);
