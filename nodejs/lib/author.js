var qs = require("querystring");
var db = require("./db");
var template = require("./template");

exports.list = function (request, response, queryData) {
  db.query(`SELECT * FROM topic`, function (error, topic) {
    db.query(`SELECT * FROM author`, function (error, authors) {
      var title = "Author List";
      var description = template.author_list(authors);
      var list = template.list(topic);
      var html = template.html(
        title,
        list,
        `<h2>${title}</h2>${description}`,
        `<a href="/create">create</a>
              <a href="/add">add</a>
              <a href="/delete">delete</a>
                `
      );
      response.writeHead(200);
      response.end(html);
    });
  });
};

exports.add = function (request, response) {
  db.query(`SELECT * FROM topic`, function (error, topics) {
    var title = "Add author";
    var list = template.list(topics);
    var html = template.html(
      title,
      list,
      `
             <form action="/add_process" method="post">
             <p><input type="text" name="name" placeholder="name"></p>
             <p>
                 <input type="text" name="profile" placeholder="profile"></input>
             </p>
             <p>
                 <input type="submit" >
             </p>
             </form>
             `,
      ""
    );
    response.writeHead(200);
    response.end(html);
  });
};

exports.add_process = function (request, response) {
  var body = "";
  request.on("data", function (data) {
    body += data;
  });

  request.on("end", function () {
    var post = qs.parse(body);

    db.query(
      `INSERT INTO author(name,profile)
        VALUES(?,?)`,
      [post.name, post.profile],
      function (error, result) {
        if (error) throw error;
        response.writeHead(302, {
          Location: encodeURI(`/`),
        });
        response.end();
      }
    );
  });
};

exports.delete = function (request, response) {
  db.query(`SELECT * FROM topic`, function (error, topics) {
    db.query(`SELECT * FROM author`, function (error, authors) {
      var title = "Delete author";
      var description = template.authorSelect(authors, 1);
      var list = template.list(topics);
      var html = template.html(
        title,
        list,
        `<h2>${title}</h2>
                <form action="/author_delete_process" method="post">
                ${description}
                <p>
                    <input type="submit" value="삭제" >
                </p>
                </form>
                `,
        `<a href="/create">create</a>
          <a href="/author">author</a>
            `
      );
      response.writeHead(200);
      response.end(html);
    });
  });
};

exports.author_delete_process = function (request, response) {
  var body = "";
  request.on("data", function (data) {
    body += data;
  });

  request.on("end", function () {
    var post = qs.parse(body);
    console.log(post);
    db.query(
      `DELETE FROM author WHERE id=?`,
      [post.author],
      function (error, topics) {
        response.writeHead(302, { Location: encodeURI(`/author`) });
        response.end();
      }
    );
  });
};
