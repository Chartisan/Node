const polka = require('polka')
const { Chartisan } = require('@chartisan/node')

// Initiate the HTTP server
polka()
    .get('/', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        const chart = Chartisan.build()
            .labels(['a', 'b', 'c'])
            .dataset('Sample 1', [1, 2, 3])
            .dataset('Sample 2', [3, 2, 1])
            .toJSON()
        res.end(chart)
    })
    .listen(3000, err => {
        if (err) throw err
        console.log(`> Running on localhost:3000`)
    })
