const polka = require('polka')
const { Chartisan } = require('@chartisan/node')

// Initiate the HTTP server
const port = 9000
polka()
    .get('/', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        const chart = Chartisan.build()
            .labels(['a', 'b', 'c'])
            .dataset('Sample 1', [1, 2, 3])
            .dataset('Sample 2', [3, 2, 1])
            .toJSON()
        res.end(chart)
    })
    .listen(port, err => {
        if (err) throw err
        console.log(`> Running on localhost:${port}`)
    })
