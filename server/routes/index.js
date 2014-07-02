'use strict';

module.exports = function(app) {
    var blog = require('../controllers/blogCtr');
    // Home route
    var index = require('../controllers/index');

    app.route('/')
        .get(index.render);

    app.get('/blog', blog.testdb);
    app.post('/blog', blog.getpost);

    app.get('/bloglist/:author_id', blog.getbloglist);

    app.get('/bloglist/:author_id/:blog_id', blog.getbody);
};
