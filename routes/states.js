`use strict`

const fs = require(`fs`);
const csv = require(`fast-csv`);

module.exports = callback => {
    const stream = fs.createReadStream("./States.csv");
    let states = [];
    const csvStream = csv
        .parse({ headers: true, objectMode: true })
        .on("data", function (data) {
            states.push(data)
        })
        .on("end", function () {
            callback(states)
        });

    stream.pipe(csvStream);
}
