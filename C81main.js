canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="empty";
var last_postion_of_x,last_postion_of_y;
color="black";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    widthofline=document.getElementById("widthofline").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_postion_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_postion_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last postion of x coordinate and y coordinate");
        console.log("x="+lastpostionofx+"y="+lastpostionofy);
        ctx.moveTo(lastpostionofx, lastpostionofy);
        console.log("current postion of x coordinate and y coordinate");
        console.log("x="+current_postion_of_mouse_x+"y="+current_postion_of_mouse_y);
        ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
        ctx.stroke();
    }
    lastpostionofx=current_postion_of_mouse_x;
    lastpostionofy=current_postion_of_mouse_y;
}
function clear_area() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}