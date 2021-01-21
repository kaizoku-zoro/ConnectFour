var players=[];
players.push(prompt("Enter first player's name: "));
players.push(prompt("Enter second player's name: "))
var colors=["turnred","turnblue"];
var turn=0;
$("p").text("It is "+players[turn]+"'s turn")

$(".first").click(function(){
    $(".first").eq(-1).addClass(colors[turn]);
    $(".first").eq(-1).removeClass("first");
    turn++;
    turn=turn%2;
    $("p").text("It is "+players[turn]+"'s turn")
})
$(".second").click(function(){
    $(".second").eq(-1).addClass(colors[turn]);
    $(".second").eq(-1).removeClass("second");
    turn++;
    turn=turn%2;
    $("p").text("It is "+players[turn]+"'s turn")
})
$(".third").click(function(){
    $(".third").eq(-1).addClass(colors[turn]);
    $(".third").eq(-1).removeClass("third");
    turn++;
    turn=turn%2;
    $("p").text("It is "+players[turn]+"'s turn")
})
$(".fourth").click(function(){
    $(".fourth").eq(-1).addClass(colors[turn]);
    $(".fourth").eq(-1).removeClass("fourth");
    turn++;
    turn=turn%2;
    $("p").text("It is "+players[turn]+"'s turn")
})
$(".fifth").click(function(){
    $(".fifth").eq(-1).addClass(colors[turn]);
    $(".fifth").eq(-1).removeClass("fifth");
    turn++;
    turn=turn%2;
    $("p").text("It is "+players[turn]+"'s turn")
})
$(".sixth").click(function(){
    $(".sixth").eq(-1).addClass(colors[turn]);
    $(".sixth").eq(-1).removeClass("sixth");
    turn++;
    turn=turn%2;
    $("p").text("It is "+players[turn]+"'s turn")
})
$(".seventh").click(function(){
    $(".seventh").eq(-1).addClass(colors[turn]);
    $(".seventh").eq(-1).removeClass("seventh");
    turn++;
    turn=turn%2;
    $("p").text("It is "+players[turn]+"'s turn")
})