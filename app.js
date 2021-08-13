const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./index.html')
const homeStyles = readFileSync('./style.css')
const homeImages = readFileSync('./logo.svg')
const homeLogic = readFileSync('./browser-app.js')

const server = http.createServer((req,res)=>{
    // console.log(req)
    // console.log(req.method);
    // console.log(req.url);

    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-type': 'text/html'})
        // res.write('<h1>Home Page </h1>')
        res.write(homePage)
        res.end()
    }
    // about oage
    else if(url === '/about'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>This is about page</h1>')
        res.end()
    }
    // styles
    else if(url === '/style.css'){
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
     // images
     else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type': 'image/svg+xml'})
        res.write(homeImages)
        res.end()
    }
     // Logic
     else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('<h1>404 Not Found</h1>')
        res.end()
    }
    
})

server.listen(5000)