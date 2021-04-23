$(document).ready(function(){


$("#hide1").click(function(){
    console.log("test");
    $("#panel1").hide();
});

$("#show1").click(function(){
    $("#panel1").show();
});

$("#toggle2").click(function(){
  $("#panel2").toggle()
})
});