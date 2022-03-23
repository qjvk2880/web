var template = {
  html: function (title, list, body, control) {
    return `
    <!doctype html>
      <html>
      <head>
        <title>WEB23333 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
        </p>
      </body>
      </html>

    `;
  },
  list: function (topics) {
    var list = "<ul>";
    var i = 0;
    while (i < topics.length) {
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i += 1;
    }
    list = list + "</ul>";
    return list;
  },
  author_list: function (authors) {
    var list = "<ol>";
    var i = 0;
    while (i < authors.length) {
      list = list + `<li>${authors[i].name} : ${authors[i].profile}</li>`;
      i += 1;
    }
    list = list + "</ol>";
    return list;
  }
  ,
  authorSelect: function (authors,author_id) {
    var tag = '';
    var i = 0;
    while (i < authors.length) {
      var selected = '';
      if (authors[i].id === author_id) {
        selected = " selected";
      }
      tag+=`<option value='${authors[i].id}'${selected}>${authors[i].name}</option>`
      i++;
    }
    return `<select name="author">${tag}</select>`;
  }
};

module.exports = template;
