const screen=document.getElementById("screen")
function display(input)
{
screen.value+=input;
}
function clea()
{
    screen.value="";
}
function result()
{
    screen.value=eval(screen.value);
}
function del()
{
   screen.value=screen.value.slice(0,-1);
}