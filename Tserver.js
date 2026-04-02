var http = require("http");
const dataJson = require("./nimGanjil.json");
let i = 0;
let dataObjek = JSON.parse(JSON.stringify(dataJson));
let dataBarang = dataObjek["barang_elektronik"]
var server = http.createServer(function(req, res){
    
    if (req.url !== "/") {
        res.statusCode = 204;
        return res.end();
    }
    let barang = dataBarang[i];
    i+=1;
    if(i>=dataBarang.length){
        i=0;
    }
    res.write(
    `
    <html>
    <title>${barang.nama_barang}</title>
    <body>
    <table border="1" cellpadding="6">
        <tr>
            <th colspan="2">Detail Barang</th>
         </tr>
        
        <tr><td>Nama Barang</td><td>${barang.nama_barang}</td></tr>
        <tr><td>Jumlah Barang</td><td>${barang.jumlah}</td></tr>
        <tr><td>Harga Barang</td><td>${barang.harga}</td></tr>
    </table>
    </body>
    </html>
    `);
    res.end();
});
var port = "9000";
server.listen(port);
console.log(`Listen on ${port}`)