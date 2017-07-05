$(document).ready(function(){ //reaches out to juery and when/where to load it
  $ ("#javascript").click(function() {//jquery is attaching the click event handler to the specific ID
    $("#javascript .titleCard").toggle();//when clicked this will turn off titlecard
    $("#javascript .definition").toggle();//when clicked this will turn on definition
  });
  $ ("#operators").click(function() {//jquery is attaching the click event handler to the specific ID
    $("#operators .titleCard").toggle();//when clicked this will turn off titlecard
    $("#operators .definition").toggle();//when clicked this will turn on defination
  });


});
