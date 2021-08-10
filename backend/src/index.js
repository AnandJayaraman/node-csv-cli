#! /usr/bin/env node
console.log("Hello World!");
cli(process.argv);
// Argument Validation
// Record Validation
// DB Insert
function cli(args){
    const Fs = require('fs');
    const db = require("../src/models");
    const jobList = db.Jobslist;
    const CsvReadableStream = require('csv-reader');
    let tempJobList = [];
    
    let inputStream = Fs.createReadStream('./data/jobs-list.csv', 'utf8');
    
    inputStream
        .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', function (row) {
            console.log('A row arrived: ', row);
            tempJobList.push(row);
            // row to mapped using sequence cli to DB
        })
        .on('end', function () {
            console.log('No more rows!');
            jobList.bulkCreate(tempJobList)
            .then(() => {
                console.log('bulk created');
              })
              .catch((error) => {
                console.log('error',error);
              });            
        });
    // List of Objects to be pushed to DB
    console.log(args);
}