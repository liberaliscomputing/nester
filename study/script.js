(function() {

  Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = input[randomIndex];
       
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }

    return input;
  };

  var pre = "https://docs.google.com/forms/d/1rKI9RqTOcqAgDBdztTpJzBKG5_YIPYR8IiE9HO0CXlk/viewform?entry.1766458392=";
  var post = "https://docs.google.com/forms/d/1_vsnmFrFgwNdV9CAb5zvGoWV81SCZbNkg217AAMwVCM/viewform?entry.1243550825=";
  var p = prompt("What is your participant code?", "test");

  $("#pre").attr("href", pre + p);
  $("#post").attr("href", post + p);

  $("#tasks").html("<li><a href='../?task=practice.txt&p=" + p + "'' target='_blank'>Practice</a></li>");

  var tasks = ["html.html", "xml.xml", "latex.tex", "scss.scss", "json.json", "js.js", "lisp.lisp"].shuffle();

  tasks.forEach(function(value, index) {
    var lang = value.split(".")[0];
    var link = $("<a></a>").attr({"href": "../?task=" + value + "&p=" + p, "target": "_blank"}).text("Task " + parseInt(index+1, 10) + " - " + lang);
    link = $("<li></li>").append(link);
    $("#tasks").append(link);
  });

  $("a").click(function() {
    $(this).addClass("clicked");
  });


})();