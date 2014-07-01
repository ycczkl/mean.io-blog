/**
 * Created by LIU on 6/30/14.
 */
'use strict';

var mongoose = require('mongoose');

//    Schema = mongoose.Schema({
//        name: String
//    }),
//    collectionName = 'testblogdata';
//    mongoose.model('test', schema, collectionName);
    var Blog = mongoose.model('test');
//var m = new Blog;
//m.name = 'zkl';
//var thedata;

exports.testdb = function(req, res) {
//    var m = new Blog;
//    m.name = 'zkl';
//    m.save(function(){console.log('insert')});
    var thedata;
    Blog.find({}, function(err, doc){
        thedata = doc;
        console.log(thedata);
        res.send(200, {
            theData: thedata
        });
    });

};

exports.getpost = function(req, res) {
    console.log(req.body);
    var postblog = new Blog(req.body);
    postblog.save(function(err, data){
        if(err) throw err;
        console.log(data);
        console.log('insert in to the database');
        res.send('insert successfuly');

    });
};

exports.getbloglist = function(req, res) {
    console.log(req.query.author_id);
    var author_id = req.query.author_id;
    Blog.find({'author': author_id}, 'title author', function(err, title){
        if(err) throw err;
        res.send(200, {
            titleArr: title
        });
    });
};

