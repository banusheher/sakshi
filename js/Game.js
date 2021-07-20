class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    road1 = createSprite(displayWidth/2,displayHeight-100,1000,1000)
    road2 = createSprite(displayWidth+480,displayHeight-800,3000,500)
    road3 = createSprite(displayWidth+800,displayHeight-480,500,3000)
    road4 = createSprite(displayWidth-700,displayHeight-2100,500,3000)
    road5 = createSprite(displayWidth-1500,displayHeight-2000,2000,400)
    road6 = createSprite(displayWidth+50,displayHeight-3000,2000,400)
    road7 = createSprite(displayWidth-1,displayHeight-2500,500,1000)
    road8 = createSprite(displayWidth+800,displayHeight-3500,500,1000)

    collider1 = createSprite(30,displayHeight-325,30,1450)
    collider2 = createSprite(60,displayHeight-1055,85,30)
    collider3 = createSprite(90,displayHeight-1435,30,730)
    collider4 = createSprite(-688,displayHeight-1785,1530,30)
    collider5 = createSprite(-675,displayHeight-2210,1550,30)
    collider6 = createSprite(-1450,displayHeight-1997,30,455)
    collider7 = createSprite(90,displayHeight-2910,30,1380)
    collider8 = createSprite(90,displayHeight-2910,30,1380)
    collider9 = createSprite(340,displayHeight-3600,530,30)
    collider10 = createSprite(600,displayHeight-3410,30,420)
    collider11 = createSprite(600,displayHeight-1925,30,1750)
    collider12 = createSprite(1110,displayHeight-1060,990,30)
    collider13 = createSprite(1600,displayHeight-1520,30,930)
    collider14 = createSprite(1100,displayHeight-3203,1000,30)
    collider15 = createSprite(90,displayHeight-2910,30,1380)
    collider16 = createSprite(700,displayHeight-2800,200,30)
    collider17 = createSprite(800,displayHeight-2400,30,800)
    collider18 = createSprite(1050,displayHeight-2000,500,30)
    collider19 = createSprite(1300,displayHeight-2400,30,800)
    collider20 = createSprite(1700,displayHeight-2800,800,30)
    collider21 = createSprite(2100,displayHeight-3390,30,1210)
    collider22 = createSprite(1850,displayHeight-4000,500,30)
    collider23 = createSprite(1600,displayHeight-3600,30,800)
    collider24 = createSprite(1020,displayHeight-75,30,950)
    collider25 = createSprite(1320,displayHeight-550,560,30)
    collider26 = createSprite(1600,displayHeight+240,30,1550)
    collider27 = createSprite(525,displayHeight+400,1000,30)
    collider28 = createSprite(1850,displayHeight+1010,500,30)
    collider29 = createSprite(2100,displayHeight+240,30,1550)
    collider30 = createSprite(2560,displayHeight-550,950,30)
    collider31 = createSprite(2100,displayHeight+240,30,1550)
    collider32 = createSprite(3020,displayHeight-800,30,500)
    collider33 = createSprite(2560,displayHeight-1050,950,30)
    collider34 = createSprite(2100,displayHeight-1510,30,945)
    collider35 = createSprite(1850,displayHeight-1990,500,30)

   collider1.shapeColor = "white" 
   collider2.shapeColor = "white"
   collider3.shapeColor = "white"
   collider4.shapeColor = "white"
   collider5.shapeColor = "white"
   collider6.shapeColor = "white"
   collider7.shapeColor = "white"
   collider8.shapeColor = "white"
   collider9.shapeColor = "white"
   collider10.shapeColor = "white"
   collider11.shapeColor = "white"
   collider12.shapeColor = "white"
   collider13.shapeColor = "white"
   collider14.shapeColor = "white"
   collider15.shapeColor = "white"
   collider16.shapeColor = "white"
   collider17.shapeColor = "white"
   collider18.shapeColor = "white"
   collider19.shapeColor = "white"
   collider20.shapeColor = "white"
   collider21.shapeColor = "white"
   collider22.shapeColor = "white"
   collider23.shapeColor = "white"
   collider24.shapeColor = "white"
   collider25.shapeColor = "white"
   collider26.shapeColor = "white"
   collider27.shapeColor = "white"
   collider28.shapeColor = "white"
   collider29.shapeColor = "white"
   collider30.shapeColor = "white"
   collider31.shapeColor = "white"
   collider32.shapeColor = "white"
   collider33.shapeColor = "white"
   collider34.shapeColor = "white"
   collider35.shapeColor = "white"

   road2.shapeColor = "yellow"
   road3.shapeColor = "yellow"
   road4.shapeColor = "yellow"
   road5.shapeColor = "yellow"  
   road6.shapeColor = "yellow"
   road7.shapeColor = "yellow"
   road8.shapeColor = "yellow"

   treasure1 = createSprite(1010,displayHeight-560,40,40)
  treasure1.shapeColor = "orange"
  // treasure1.addImage(treImg)
   
   treasure2 = createSprite(60,displayHeight-560,40,40)
   treasure2.shapeColor = "orange"
   
   treasure3 = createSprite(1600,displayHeight-560,40,40)
   treasure3.shapeColor = "orange"
   
   treasure4 = createSprite(2100,displayHeight-560,40,40)
   treasure4.shapeColor = "orange"
   
   treasure4 = createSprite(3000,displayHeight-560,40,40)
   treasure4.shapeColor = "orange"
   
   treasure5 = createSprite(3000,displayHeight-1020,40,40)
   treasure5.shapeColor = "orange"
   
   treasure6 = createSprite(2100,displayHeight-1020,40,40)
   treasure6.shapeColor = "orange"
   
   treasure7 = createSprite(2090,displayHeight-1980,40,40)
   treasure7.shapeColor = "orange"
   
   treasure7 = createSprite(1610,displayHeight-1980,40,40)
   treasure7.shapeColor = "orange"
   
   treasure8 = createSprite(1610,displayHeight-1050,40,40)
   treasure8.shapeColor = "orange"
   
   treasure8 = createSprite(1610,displayHeight-1050,40,40)
   treasure8.shapeColor = "orange"
   
   treasure9 = createSprite(600,displayHeight-2800,40,40)
   treasure9.shapeColor = "orange"
   
   treasure10 = createSprite(600,displayHeight-3200,40,40)
   treasure10.shapeColor = "orange"
   
   treasure11 = createSprite(590,displayHeight-3600,40,40)
   treasure11.shapeColor = "orange"
   
   treasure11 = createSprite(100,displayHeight-3600,40,40)
   treasure11.shapeColor = "orange"
   
   treasure12 = createSprite(100,displayHeight-2200,40,40)
   treasure12.shapeColor = "orange"
   
   treasure13 = createSprite(-1400,displayHeight-2200,40,40)
   treasure13.shapeColor = "orange"
   
   treasure14 = createSprite(-1400,displayHeight-1800,40,40)
   treasure14.shapeColor = "orange"
   
   treasure15 = createSprite(100,displayHeight-1800,40,40)
   treasure15.shapeColor = "orange"
   
   treasure16 = createSprite(100,displayHeight-1100,40,40)
   treasure16.shapeColor = "orange"
   
   treasure17 = createSprite(600,displayHeight-1100,40,40)
   treasure17.shapeColor = "orange"
   
   treasure18 = createSprite(1600,displayHeight+1000,40,40)
   treasure18.shapeColor = "orange"
   
   treasure19 = createSprite(2100,displayHeight+1000,40,40)
   treasure19.shapeColor = "orange"
   
   treasure20 = createSprite(1290,displayHeight-2010,40,40)
   treasure20.shapeColor = "orange"
   
   treasure21 = createSprite(810,displayHeight-2010,40,40)
   treasure21.shapeColor = "orange"
   
   treasure22 = createSprite(810,displayHeight-2800,40,40)
   treasure22.shapeColor = "orange"
   
   treasure23 = createSprite(2050,displayHeight-2800,40,40)
   treasure23.shapeColor = "orange"
   
   treasure24 = createSprite(1300,displayHeight-2800,40,40)
   treasure24.shapeColor = "orange"
   
   treasure25 = createSprite(2090,displayHeight-3990,40,40)
   treasure25.shapeColor = "orange"
   
   treasure25 = createSprite(2090,displayHeight-3990,40,40)
   treasure25.shapeColor = "green"
    
    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
    car1.collide(collider1);
car1.collide(collider2);
car1.collide(collider3);
car1.collide(collider4);
car1.collide(collider5);
car1.collide(collider6);
car1.collide(collider7);
car1.collide(collider8);
car1.collide(collider9);
car1.collide(collider10);
car1.collide(collider11);
car1.collide(collider12);
car1.collide(collider13);
car1.collide(collider14);
car1.collide(collider15);
car1.collide(collider16);
car1.collide(collider17);
car1.collide(collider18);
car1.collide(collider19);
car1.collide(collider20);
car1.collide(collider22);
car1.collide(collider23);
car1.collide(collider24);
car1.collide(collider25);
car1.collide(collider26);
car1.collide(collider27);
car1.collide(collider28);
car1.collide(collider29);
car1.collide(collider30);
car1.collide(collider31);
car1.collide(collider32);
car1.collide(collider33);
car1.collide(collider34);
car1.collide(collider35);
car1.collide(collider21);
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(255);
      //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    }


    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
