﻿
//// Config
//var x = 0;
//var y = 0;
//var _speed = 80; // In miliseconds - the lowest, the fastest



//var _x = [7, 6, 5, 4, 3];
//var _y = [2, 2, 2, 2, 2];

///* is the objective on the screen? */
//var _objectiveOnScreen = false;
//var _objective_x = null;
//var _objective_y = null;

///* to which direction am I going to? */
//var _dir = null;

///* does the snake have to grow? */
//var _grow = false;

///* pause and game over behavior */
//var _pause = false;
//var _gameover = false;

///* color pallete */
//var _color = {
//    board: "#FFF8BA",
//    sh: "#068A31",
//    sb: "#068A31", 
//    mouse: "mouse.png"
//}

//var _score = 1;


//var _buffer = [];

//var K_SPACE = 32;
//var K_LEFT = 37;
//var K_UP = 38;
//var K_RIGHT = 39;
//var K_DOWN = 40;

//$(document).keydown(function (e) {



//    buffsize = _buffer.length;
    
//    last_move = buffsize ? _buffer[buffsize - 1] : _dir;

//    if (e.keyCode == K_LEFT) {
//        if (last_move != "R")
//            _dir = last_move = "L"
//    }
//    else if (e.keyCode == K_UP) {
//        if (last_move != "D")
//            _dir = last_move = "U"
//    }
//    else if (e.keyCode == K_RIGHT) {
//        if (last_move != "L")
//            _dir = last_move = "R"
//    }
//    else if (e.keyCode == K_DOWN) {
//        if (last_move != "U")
//            _dir = last_move = "D"
//    }

//    _buffer.push(_dir)

//    if (e.keyCode >= 37 && e.keyCode <= 40) {
//        return false;
//    }
//});



//function narediPolje() {
//    x = document.getElementById("x").value;
//    y = document.getElementById("y").value;
//    //middle();
//    createBoard();
    
//    runGame();
//}

//function middle() {
//    x1 = Math.round(x/2);
//    y1 = Math.round(y/2);
//    _x = [x1, x1 - 1];
//    _y = [y1, y1];
//}
//function runGame() {
//    if (!_pause) {
//        drawSnake();

//        if (_dir)
//            step();

//        placeObjective();

//        if (detectCollision()) {
//            return gameOver();
//        }
//    }
    
//    setTimeout(function () { runGame() }, _speed);
//}

//function drawSnake() {
//    clearBoard();
    
//    for (i = 0; i < _x.length; i++) {
//        $("#" + _y[i] + "-" + _x[i]).css("backgroundColor", _color[(!i ? "sh" : "sb")]);

//    }
//}

//function clearBoard() {
//    $("td").css("backgroundColor", _color["board"]);
//    $("td").css("backgroundImage", "none");

//}

//function detectCollision() {
//    died = false;
    
//    if (_x[0] == 0 || _y[0] == 0)
//        died = true;

//    else if (_x[0] == x + 1 || _y[0] == _board_y + 1)
//        died = true;

//    else
        
//        for (i = 1; i < _x.length; i++)
//            if (_x[0] == _x[i] && _y[0] == _y[i])
//                died = true;

//    return died;
//}

//function step() {
//    debug("score: " + _score + " x: " + _x[0] + " y: " + _y[0] + " objective-x: " + _objective_x + " objective-y: " + _objective_y + " speed: " + _speed)
    
//    snake_size = _x.length
    
//    last_x = _x[snake_size - 1]
//    last_y = _y[snake_size - 1]
    
//    if (snake_size > 1 && _dir) {
//        for (i = snake_size - 1; i > 0; i--) {
//            _x[i] = _x[i - 1];
//            _y[i] = _y[i - 1];
//        }
//    }

//    if (_grow) {
//        _x.push(last_x);
//        _y.push(last_y);
//        _grow = false;
//        _score++;
//    }

//    buffsize = _buffer.length
    
//    mov = _dir
    
//    if (buffsize)
//        mov = _buffer.shift();
        
//    if (mov == "U")
//        _y[0] -= 1;
//    else if (mov == "R")
//        _x[0] += 1;
//    else if (mov == "D")
//        _y[0] += 1;
//    else if (mov == "L")
//        _x[0] -= 1;
        
//    if (_x[0] == _objective_x && _y[0] == _objective_y) {
//        _grow = true;
//        _objectiveOnScreen = false;
//        clearBoard();
//        document.getElementById("score").innerHTML = "Score: " + _score;
//    }
//}

//function placeObjective() {
//    if (!_objectiveOnScreen) {

//        inside = true;
//        while (inside) {
//            inside = false;

//            _objective_x = Math.floor(Math.random() * x) + 1;
//            _objective_y = Math.floor(Math.random() * y) + 1;

//            for (i = 0; i < _x.length; i++) {
//                if (_objective_x == _x[i] && _objective_y == _y[i]) {
//                    inside = true;
//                    continue;
//                }
//            }
//        }

//        _objectiveOnScreen = true;
//    }
//    document.getElementById(_objective_y + "-" + _objective_x).style.backgroundImage = "url('" + _color["mouse"] + "')";
  

//}

//function gameOver() {
//    alert("You lose! F5 to play again.");
//    return false;
//}


//function createBoard() {
//    var board = "";
//    for (i = 1; i <= x; i++) {
//        board += "<tr>";

//        for (j = 1; j <= y; j++) {
//            board += "<td id=\"" + i + "-" + j + "\" style=\"background-color:"
//                + _color["board"] + "\">&nbsp;</td>";
//        }

//        board += "</tr>";
//    }

//    $("#board").html(board);
//}

//function debug(msg) {
//    if (_debug)
//        $("#debug").html("Debug info: " + msg);
//} 

/**
 * jsnake.js
 * @author Rafael Jaques (@rafajaques)
 *
 * This is not intended to be the best JS on earth.
 * Just to be a proof of concept! :)
 * 
 * Enjoy!
 */

// Config
var x =0;
var y = 0;
var _speed = 80; // In miliseconds - the lowest, the fastest
var play = false;
var _debug = true; // Display debug info

// Game variables (customize game here)

/* x and y arrays indicating where the snake is */
/* also this is the start position */
var _x = [];
var _y = [];

/* is the objective on the screen? */
var _objectiveOnScreen = false;
var _objective_x = null;
var _objective_y = null;

/* to which direction am I going to? */
var _dir = null;

/* does the snake have to grow? */
var _grow = false;

/* pause and game over behavior */
var _pause = false;
var _gameover = false;

/* color pallete */
//var _color = {
//    board: "#fff",
//    sh: "#00a", /* snake head */
//    sb: "#00f", /* snake body */
//    obj: "#f00" /* objective */
//}
var _color = {
    board: "#FFF8BA",
    sh: "url(glava.png)",
    sb: "#068A31",
    st: "url(rep.png)",
    mouse: "mouse.png"
};
/* starting score */
var _score = 1;

/* movement buffer to avoid snake's death inside itself */
var _buffer = [];

/* key codes */
var K_SPACE = 32;
var K_LEFT = 37;
var K_UP = 38;
var K_RIGHT = 39;
var K_DOWN = 40;
var dir = 3;

function narediPolje() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    middle();
    createBoard();
    speed = document.getElementById("speed").value;
    runGame();
    play = true;
}

function middle() {
    x1 = Math.round(x/2);
    y1 = Math.round(y/2);
    _x = [x1, x1 - 1];
    _y = [y1, y1];
}
$(document).keydown(function (e) {

    if(play){

        buffsize = _buffer.length;

        last_move = buffsize ? _buffer[buffsize - 1] : _dir;

        if (e.keyCode == K_LEFT) {
            if (last_move != "R") {
                _dir = last_move = "L";
                dir = 1;
            }
            
        }
        else if (e.keyCode == K_UP) {
            if (last_move != "D") {

                _dir = last_move = "U";
                dir = 2;
            }
        }
        else if (e.keyCode == K_RIGHT) {
            if (last_move != "L") {

                _dir = last_move = "R";
                dir = 3;
            }
        }
        else if (e.keyCode == K_DOWN) {
            if (last_move != "U") {
                dir = 4;
                _dir = last_move = "D";
            }
           
        }

        _buffer.push(_dir);
        if (e.keyCode >= 37 && e.keyCode <= 40) {
            return false;
        }
    }
});
var speed= null;
function runGame() {
    if (!_pause) {
        drawSnake();

        if (_dir)
            step();

        placeObjective();

        if (detectCollision()) {
            return gameOver();
        }
    }
       
    // Next step
    setTimeout(function () { runGame() }, speed);
}

function drawSnake() {
    // Clear board
    clearBoard();

    // For each of snake blocks...
    for (i = 0; i < _x.length; i++) {
        // Draws snake
        //   $("#" + _y[i] + "-" + _x[i]).css("backgroundImage", _color[(!i ? "sh" : "sb")]);
        if (i == 0) {
            $("#" + _y[i] + "-" + _x[i]).css("backgroundImage",  _color["sh"] );
        }
            else if (i==_x.length-1) {
                $("#" + _y[i] + "-" + _x[i]).css("backgroundImage", _color["st"]);
        }
    else if (i<_x.length) {
            $("#" + _y[i] + "-" + _x[i]).css("backgroundColor",  _color["sb"]);
    }
        switch (dir) {
        case 1:
            $("#" + _y[i] + "-" + _x[i]).addClass('one');
            break;
        case 2:
            $("#" + _y[i] + "-" + _x[i]).addClass('two');
            break;
            case 3:
                $("#" + _y[i] + "-" + _x[i]).addClass('three');
                break;
            case 4:
                $("#" + _y[i] + "-" + _x[i]).addClass('four');

       
        }
    }
}

function clearBoard() {
    $("td").css("backgroundColor", _color["board"]);
    $("td").css("backgroundImage", "none");

}

function detectCollision() {
    died = false;

    // I did separated for the sake of readability
    if (_x[0] == 0 || _y[0] == 0)
        died = true;

    else if (_x[0] == x + 1 || _y[0] == y + 1)
        died = true;

    else
        // Verifies if snake's head collided with the body
        for (i = 1; i < _x.length; i++)
            if (_x[0] == _x[i] && _y[0] == _y[i])
                died = true;

    return died;
}

function step() {
    // Place debug info on screen
    debug("score: " + _score + " x: " + _x[0] + " y: " + _y[0] + " objective-x: " + _objective_x + " objective-y: " + _objective_y + " speed: " + _speed);

    // Gets snake size
    snake_size = _x.length;

    // Saves last position in case of grow
    last_x = _x[snake_size - 1];
    last_y = _y[snake_size - 1];

    // Verifies if body exists and then moves
    // Moves backwards to avoid overwriting positions
    if (snake_size > 1 && _dir) {
        for (i = snake_size - 1; i > 0; i--) {
            _x[i] = _x[i - 1];
            _y[i] = _y[i - 1];
        }
    }

    // Grow up?
    if (_grow) {
        _x.push(last_x);
        _y.push(last_y);
        _grow = false;
        _score++
        ;
    }

    // Get buffer size
    buffsize = _buffer.length;

    // Place movement value as direction
    mov = _dir;

    // If we have any buffer, let's get it going
    if (buffsize)
        mov = _buffer.shift();

    // Do the movement
    if (mov == "U")
        _y[0] -= 1;
    else if (mov == "R")
        _x[0] += 1;
    else if (mov == "D")
        _y[0] += 1;
    else if (mov == "L")
        _x[0] -= 1;

    // Collision test with the objective
    if (_x[0] == _objective_x && _y[0] == _objective_y) {
        _grow = true;
        _objectiveOnScreen = false;
        document.getElementById("score").innerHTML = "Score: " + _score;
    }
}

function placeObjective() {
    if (!_objectiveOnScreen) {
        inside = true;
        while (inside) {
            inside = false;

            _objective_x = Math.floor(Math.random() * x) + 1;
            _objective_y = Math.floor(Math.random() * y) + 1;

            for (i = 0; i < _x.length; i++) {
                if (_objective_x == _x[i] && _objective_y == _y[i]) {
                    inside = true;
                    continue;
                }
            }
        }

        _objectiveOnScreen = true;
    }
    $("#" + _objective_y + "-" + _objective_x).css("backgroundImage", "url('" + _color["mouse"] + "')");
}

function gameOver() {
    alert("Izgubili ste.");
    return false;
}


function createBoard() {
    var board = "";
    for (i = 1; i <= x; i++) {
        board += "<tr>";

        for (j = 1; j <= y; j++) {
            board += "<td id=\"" + i + "-" + j + "\" style=\"background-color:"
                + _color["board"] + "\">&nbsp;</td>";
        }

        board += "</tr>";
    }

    $("#board").html(board);
}

function debug(msg) {
    if (_debug)
        $("#debug").html("Debug info: " + msg);
}