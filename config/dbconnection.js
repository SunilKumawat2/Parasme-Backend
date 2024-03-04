const express = require("express");
const mongoose = require("mongoose");

const MONO_URL = process.env.MONGO_URL
const mongodb = mongoose
  .connect(MONO_URL)
  .then(() => {
    // console.log("Connected to Mongo Db Database");
    console.log("Connected to Mongo Db Database",MONO_URL);
  })
  .catch(() => {
    console.log("not connected To Database");
  });

module.exports = mongodb;
