
const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', function(req,res) {
    request({
        url:`https://public-api.wordpress.com/wpcom/v2/work-with-us`,
        headers: {
            'X-future':
                'automattician'

        }

    }, function(err, res, bod) {
        if(err || (res.statusCode !==200)) {
            console.log('error --> ', err)
            console.log('res.statusCode', res.statusCode)
            res.send('uh oh... ')
        } else {
            var bodyAsOb = JSON.parse(bod)
            console.log('   -->    ', bod)
        }
    })
})



app.listen(8080, function() {
    console.log('app listening on 8080')
})


// navigate to localhost:8080 to recieve the secret from the GET req
