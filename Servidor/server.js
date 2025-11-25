require("colors")





var app =express();
app.use(express.static("./public"));

var server = http.createServer(app);
server.listen(3000)

console.log("Servidor Rodando....".rainbow);
