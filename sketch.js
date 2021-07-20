var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var road1, road2, road3, road4, road5, road6, road7, road8
var collider1,collider2, collider3,collider4, collider5,collider6,collider7,collider8,collider9,collider10,collider11,collider12,collider13,collider14,collider15,collider16,collider17,collider18,collider19,collider20,collider21,
collider22,collider23,collider24,collider25,collider26,collider27,collider28,collider29,collider30,collider31,collider32,collider33,collider34,collider35;

var treasure1, treasure2,treasure3,treasure4,treasure5,treasure6,treasure7,treasure8
,treasure9,treasure10,treasure11,treasure12,treasure13,treasure14,treasure15,treasure16
,treasure17,treasure18,treasure19,treasure20,treasure21,treasure22,treasure23,treasure24,treasure25


function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
