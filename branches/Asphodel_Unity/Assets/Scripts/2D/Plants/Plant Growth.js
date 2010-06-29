var height = 10;
var speed = 0.25;

function Update () {
var change = Mathf.Cos((transform.localScale.y/height)*(Mathf.PI/2))*speed;
if (change>0.0001)
{
print(change);
transform.localScale.y+=change;
}
else
{
print("stopped");
// removes this script from the object, reducing slowdown for multiple instances
Destroy (this);
}
}