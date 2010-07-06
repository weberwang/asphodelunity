var height = 10;
var speed = 0.25;
var ranged : float;

function Awake()
{
	ranged = 0;
}

function Update () {
var change = Mathf.Cos((transform.localScale.y/height)*(Mathf.PI/2))*speed;
if (change>0.0001)
{
print(change);
transform.localScale.y+=change;
}

	ranged += 0.1;
}