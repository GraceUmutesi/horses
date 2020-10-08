// This is the business logic
var horseColor = prompt("Enter the color of the horse: ");
var horseWeight = parseInt(prompt("Enter the weight of the horse"));
if (horseColor == "white"){
    var answer = "this is a beautiful horse.";
    
    document.getElementById("response").innerHTML= answer;
}
if ((horseColor== "black")&& (horseWeight== 250)){
    alert("fat horse");

} else if( (horseColor== "choco") || (horseWeight < 100)){
    alert("baby horse");
}
var input = document.getElementById("in").Value;
var next = parseInt(input+34);
