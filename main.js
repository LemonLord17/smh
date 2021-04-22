canvas = document.getElementById("myCanvas");
 
ctx = canvas.getContext("2d");

var mouse_event = "empty";
var last_position_of_x, last_position_of_y 
color = "black"
width_of_line = 1
canvas.addEventListener("mousedown", my_mousedown);
color = document.getElementById("color").value;

function my_mousedown(e){
    mouse_event = "mouseDown";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event = "mouseUP";

}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouse_event = "mouseLeave";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){


current_postion_of_mouse_x = e.clientX-canvas.offsetLeft

current_postion_of_mouse_y = e.clientY-canvas.offsetTop
if(mouse_event=="mouseDown"){

    ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
ctx.stroke();
}
last_position_of_x=current_postion_of_mouse_x
last_position_of_y=current_postion_of_mouse_y

}
function clear()
    {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    
    }
