const polka = require('polka')
const { Chartisan } = require('@chartisan/node')

/**
 * Main function for the chart.
 *
 * @param {*} req
 * @returns
 */
function chart(req) {
    return Chartisan.build()
        .labels(['a', 'b', 'c'])
        .dataset('Sample 1', [1, 2, 3])
        .dataset('Sample 2', [3, 2, 1])
        .toJSON()
}

// Initiate the HTTP server
polka()
    .get('/', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(chart(req))
    })
    .listen(3000, err => {
        if (err) throw err
        console.log(`> Running on localhost:3000`)
    })
