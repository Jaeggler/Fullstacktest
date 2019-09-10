const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/list", (req, res, next) => {
  const clientdata = [
    {id: '123', name: 'Diego1', dni: '12345678', phone: '999999', address: '123 street'},
    {id: '124', name: 'Diego2', dni: '12345678', phone: '999999', address: '123 street'}
  ];
  res.status(200).json({
    message: "Posts fetched succesfully!",
    clientdata: clientdata
  });
});

module.exports = app;
