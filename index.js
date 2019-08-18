// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 8080

const app = express()

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', (request, response) => {
	response.render('home')
})

app.get('/saas', (request, response) => {
	response.render('saas')
})

app.get('/download', (request,response) => {
	response.render('download')
})


app.listen(port, (err) => {
	if (err) {
		return console.log('the server threw an error', err)
	}
	console.log(`server is listening on ${port}`)
})
