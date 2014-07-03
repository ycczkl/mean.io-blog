/**
 * Created by LIU on 6/30/14.
 */
'use strict';

var mongoose = require('mongoose');
var Blog = mongoose.model('test');


exports.testdb = function(req, res) {
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
    //console.log(req);
    var author_id = req.params.author_id;
    Blog.find({'author': author_id}, 'title author', function(err, title){
        if(err) throw err;
        res.send(200, {
            titleArr: title
        });
    });
};

exports.getbody = function(req, res) {
    var author_id = req.params.author_id,
        blog_id = req.params.blog_id;
    Blog.find({'author': author_id, 'title': blog_id}, '', function(err, blog){
        if(err) throw err;
        res.send(200, {
            blogArr: blog
        });
    });
};
