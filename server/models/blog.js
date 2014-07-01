/**
 * Created by LIU on 6/30/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Schema = mongoose.Schema,

    schema = new Schema({
        author : { type: String},
        email  : { type: String},  // Match validation
        title  : { type: String},
        body   : { type: String},
        date   : { type: String}
});

var collectionName = 'testblogdata';
mongoose.model('test', schema, collectionName);

