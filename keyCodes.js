//handle wsad and up down left right events -- keycodes referenced in functions with if statement events//
arrowKeys = function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 37) {
        // left arrow;
    } else if (keyCode === 38) {
        // up arrow
    } else if (keyCode === 39) {
        // right arrow
    } else if (keyCode === 40) {
        // down arrow
    }
    }
wsadKeys = function(keyCode) {  // wsad keys
    if (keyCode === 87) {
        // w(up)
    }
    else if (keyCode === 83) {
        // s(down)
   }
    if (keyCode === 65) {
        // a(left)
    }
    if (keyCode === 68) { 
        //d(right)
    }   
}
