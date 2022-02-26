var Links = {

  setColor : function (color){
        $('a').css('color', color);
  }

}

var Body = {
  setColor: function (color) {
    $('body').css('color', color);
  },

  setBackGroundColor : function (color){
    $('body').css("background-color",color);
  }
};

function valueChanger(val) {
  var x = document.getElementsByClassName("controller");
  for (i = 0; i < x.length; i++) {
    x[i].value = val;
  }
}

function nightDayHandler(self) {
  if (self.value === "night") {
    Body.setBackGroundColor("black");
    Body.setColor("white");
    valueChanger("day");
    Links.setColor("powderblue");
  } else {
    Body.setBackGroundColor("white");
    Body.setColor("black");
    valueChanger("night");
    Links.setColor("blue");
  }
}