//VARS FOR BLOCK
var canvas = new fabric.Canvas('myCanvas');
block_width = 30;
block_height = 30;

//VARS FOR SKIN
player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
   fabric.Image.fromURL("player.png", function(Img){
   player_object=Img;
   player_object.scaleToWidth(150);
   player_object.scaleToHeight(150);
   player_object.set({
      top : player_y, left : player_x
   });
   canvas.add(player_object);
   });
}


function new_image(getImage) {
   fabric.Image.fromURL(getImage, function(Img){
   block_image_object=Img;
   block_image_object.scaleToWidth(block_width);
   block_image_object.scaleToHeight(block_height);
   block_image_object.set({
      top : player_y, left : player_x
   });
   canvas.add(block_image_object);
   });
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    
    keyPressed = e.keyCode;

    console.log(keyPressed);

   if (keyPressed == '38') {
       up();
    }
   if (keyPressed == '40') {
      down();
   }
   if (keyPressed == '39') {
      right();
   }
   if (keyPressed == '37') {
      left();
   }


   if (keyPressed == '66') {
      new_image('bedrock.jpg');
      console.log("b, bedrock");
   }
   if (keyPressed == '69') {
      new_image('empty.jpg');
      console.log("e, empty bucket");
   }
   if (keyPressed == '71') {
      new_image('grass.jpg');
      console.log("g, grass");
   }
   if (keyPressed == '78') {
      new_image('netherite.jpg');
      console.log("n, netherite");
   }
   if (keyPressed == '79') {
      new_image('oakwood.jpg');
      console.log("o, oakwood");
   }
   if (keyPressed == '87') {
      new_image('wall.jpg');
      console.log("w, wall");
   }

}


function up() {
   if (player_y>0) {
   player_y = player_y-block_height;
   canvas.remove(player_object);
   player_update();
   }
}

function down() {
   if (player_y<500) {
   player_y = player_y+block_height;
   canvas.remove(player_object);
   player_update();
   }
}







function left() {
   if (player_x>0) {
   player_x = player_x-block_height;
   canvas.remove(player_object);
   player_update();
   }
}


function right() {
   if (player_x<700) {
   player_x = player_x+block_height;
   canvas.remove(player_object);
   player_update();
   }
}