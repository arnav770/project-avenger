var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == '80') {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '38') {
        console.log("up");
        up();
    }
    if (keypressed == '40') {
        console.log("down");
        down();
    }
    if (keypressed == '37') {
        console.log("left");
        left();
    }
    if (keypressed == '39') {
        console.log("right");
        right();
    }
    if (keypressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    if (keypressed == '66') {
        console.log("b");
        new_image('spiderman_body.png');
    }
    if (keypressed == '76') {
        console.log("l");
        new_image('hulk_legs.png');
    }
    if (keypressed == '82') {
        console.log("r");
        new_image('thor_right_hand.png');
    }
    if (keypressed == '72') {
        console.log("h");
        new_image('captain_america_left_hand.png');
    }

    function up() {
        if (player_y >= 0) {
            player_y = player_y - block_image_height;
            console.log("block image height=" + block_image_height);
            console.log("when up arrow key is pressed, X=" + player_x + ",Y=" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function down() {
        if (player_y <= 500) {
            player_y = player_y + block_image_height;
            console.log("block image height=" + block_image_height);
            console.log("when up arrow key is pressed, X=" + player_x + ",Y=" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function left() {
        if (player_x >= 0) {
            player_x = player_x - block_image_height;
            console.log("block image height=" + block_image_height);
            console.log("when up arrow key is pressed, X=" + player_x + ",Y=" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function right() {
        if (player_x <= 850) {
            player_x = player_x + block_image_height;
            console.log("block image height=" + block_image_height);
            console.log("when up arrow key is pressed, X=" + player_x + ",Y=" + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
}