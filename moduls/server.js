var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

var Grass = require("Grass.js");
var GrassEater = ("./module/GrassEater.js");
var Gishatich = ("./moduls/gishatich.js");
var Water = ("./moduls/water.js");
var Amenaker = ("./moduls/amenaker.js");

grassArr = [];
grasseaterArr = [];
gishatichArr = [];
waterArr = [];
amenakerArr = [];

var w = 50;
var h = 60;

function genMatrix(w, h) {
    var matrix = [];
    for(var y = 0; y < h; y++) {
        matrix[y] = [];
        for(var x =0; x < w; x++) {
            var r = Math.floor(Math.random() * 75);
            if(r < 20) r = 0;
            else if (r < 40) r = 1;
            else if (r < 42) r = 2;
            else if (r < 75) r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

Random = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; 
}

matrix = genMatrix(w, h);

for(var y = 0; y < matrix.length;  y++){
    for(var x = 0; x < matrix[y].length; x++){

        if(matrix[y][x] == 1) {
            grassArr.push(new Grass(x,y,1));
            Grassinit++;
        }
        if(matrix[y][x] == 2) {
            grasseater.push(new Grass(x,y,2));
            GrassEaterinit++;
        }
        if(matrix[y][x] == 3) {
            gishatichArr.push(new Grass(x,y,3));
            Gishatichinit++;
        }
        if(matrix[y][x] == 4) {
            waterArr.push(new Grass(x,y,4));
            Waterinit++;
        }
        if(matrix[y][x] == 5) {
            amenakerArr.push(new Grass(x,y,5));
            Amenakerinit++;
        }
    }
}

function drawserver() {
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
    io.sockets.emit("matrix", matrix);
}

setInterval(drawserver, 3000);
