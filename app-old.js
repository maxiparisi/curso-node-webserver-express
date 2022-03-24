const http = require('http');

http.createServer( (req, resp) => {
    
    resp.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    resp.writeHead(200, { 'Content-Type': 'application/csv' });
    resp.write('id, nombre\n');
    resp.write('1, juan\n');
    resp.write('2, pedro\n');
    resp.write('3, maxi\n');
    resp.end();

}).listen(8080);

console.log('Escuchando en el puerto ', 8080);