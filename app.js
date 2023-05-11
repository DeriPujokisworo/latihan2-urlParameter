require("dotenv").config();
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/biodata", (req, res) => {
  const nama = req.query.name;
  const tempatLahir = req.query["tempat-lahir"];
  const tanggalLahir = req.query["tanggal-lahir"];
  const alamat = req.query.alamat;

  res.send({
    nama: nama,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  });
});

app.post("/biodata", function (req, res) {
  const nama = req.body.nama;
  const tempatLahir = req.body["tempat-lahir"];
  const tanggalLahir = req.body["tanggal-lahir"];
  const alamat = req.body.alamat;

  res.send({
    nama: nama,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat: alamat,
  });
});

// start the server
var express = app.listen(port, function () {
  console.log("Listening on port 8080...");
});
