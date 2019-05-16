var matrix = []
var side = 20;
var grassArr = [];
var grasseaterArr = [];
var gishatichArr = [];
var amenakerArr = [];
var waterArr = [];
var arr = [];
function setup() {
    for (var y = 0; y < 35; y++) {
        matrix[y] = [];
        for (var x = 0; x < 35; x++) {
            matrix[y][x] = Math.round(random(5))
        }
    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grasseat = new GrassEater(x, y, 2);
                grasseaterArr.push(grasseat);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 5) {
                var amenaker = new Amenaker(x, y, 5);
                amenakerArr.push(amenaker);
            }
            else if (matrix[y][x] == 4) {
                var water = new Water(x, y, 4);
                waterArr.push(water);
            }
        }
    }
}

console.log(grassArr);
console.log(grasseaterArr);



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }

        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].move();
        amenakerArr[i].eat();
        amenakerArr[i].mul();
        amenakerArr[i].die();
    }
    for (var i in waterArr) {
        waterArr[i].mul();
    }
}




var side = 20;
var socket = io();

function setup() {
    frameRate(5);
    createCanvas(20 * side, 20 * side);
    background('blue');
}
function drawMatrix(matrix){
for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var grasseat = new GrassEater(x, y, 2);
            grasseaterArr.push(grasseat);
        }
        else if (matrix[y][x] == 3) {
            var gishatich = new Gishatich(x, y, 3);
            gishatichArr.push(gishatich);
        }
        else if (matrix[y][x] == 5) {
            var amenaker = new Amenaker(x, y, 5);
            amenakerArr.push(amenaker);
        }
        else if (matrix[y][x] == 4) {
            var water = new Water(x, y, 4);
            waterArr.push(water);
        }
    }
}
}

socket.on("matrix", drawMatrix);


 
 
 

