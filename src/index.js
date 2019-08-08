const express = require ('express');
const morgan = require ('morgan')
const path = require ('path')
const app = express();

//Settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname ,'views'))
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
// moddlewares
//app.use(morgan('dev'));

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname,'public')))
//listening the server

app.listen(app.get('port') , () => {
    console.log('Server Listening on port', app.get('port'))
});

