$(document).ready(function(){    //reaches out to juery and tells it where to load it on the page
  $("#javascript").click(function() {    //jquery is attaching the click event handler to the specific ID
    $("#javascript .titleCard").toggle();    //when clicked this will hide titlecard
    $("#javascript .definition").toggle();    //when clicked this will show definition of the titlecard
  });

  $("#operator").click(function() {    //jquery is attaching the click event handler to the specific ID
    $("#operator .titleCard").toggle();    //when clicked this will hide titlecard
    $("#operator .definition").toggle();    //when clicked this will show definition of the titlecard
  });

  $("#variable").click(function() {    //jquery is attaching the click eventhandler to the specific ID
    $("#variable .titleCard").toggle();    //when clicked this will hide titlecard
    $("#variable .definition").toggle();    //when clicked this will show the definition of the title card
  });

  $("#var-name-conv").click(function() {//jquery is attaching the click eventhandler to teh specific ID
    $("#var-name-conv .titleCard").toggle();//when clicked this will hide titlecard
    $("#var-name-conv .definition").toggle();//when clicked this will show the definition of the titlecard.
  });

  $("#function").click(function() {//jquery is attaching the click eventhandler to the specific ID
    $("#function .titleCard").toggle();//when clicked this will hide titlecard
    $("#function .definition").toggle();//when clicked this will show the definition of the titlecard.
  });

  $("#method").click(function() {//jquery is attaching the click eventhandler to the specific ID
    $("#method .titleCard").toggle();//when clicked this will hide titlecard
    $("#method .definition").toggle();//when clicked this will show the definition of the titlecard
  });
  $("#parameter").click(function() { //jquery is attaching the click eventhandler to the specifict ID
    $("#parameter .titleCard").toggle();//when clicked this will hide the titlecard
    $("#parameter .titleCard").toggle();//when clicked this will show the definition of the titlecard
  });
  $("#arguement").click(function()) { //jquery is attaching the click eventhandler to the specific ID
    $("#arguement .titleCard").toggle();//when clicked this will hide the titlecard
    $("#arguement .titleCard").toggle();//when clicked this will show the titlecard}

});
