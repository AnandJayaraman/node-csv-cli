#! /usr/bin/env node
console.log("Hello World!");
//cli(process.argv);
// Argument Validation
// Record Validation
// DB Insert

( function cli(args=process.argv){
    const Fs = require('fs');
    const db = require("../src/models");
    const moment = require('moment');
    const Validator = require('validatorjs');

    const jobList = db.Jobslist;
    const CsvReadableStream = require('csv-reader');
    let tempJobList = [];
    //./data/jobs-list.csv

    let rules = {
        jobTitle: 'required|string|between:10,100',
        jobDescription: 'required|between:10,500',
        date: 'required|date',
        applicants:'required|string'
    };

    
      
    let inputStream = Fs.createReadStream(args[2], 'utf8');
    
    inputStream
        .pipe(new CsvReadableStream({ skipHeader: true, asObject: true, parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', function (row) {
            console.log('A row arrived: ', row);
            const jobRow = {
                jobTitle: row["job title"],
                jobDescription: row["job description"],
                date: moment(row["date"], 'DD/MM/YYYY'), 
                applicants: row["applicants"]
            }
            let validation = new Validator(jobRow, rules);  
            console.log("validation.passes",validation.passes()); // true
            console.log("validation.fails",validation.fails()); // false                      
            tempJobList.push(jobRow);
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
})();