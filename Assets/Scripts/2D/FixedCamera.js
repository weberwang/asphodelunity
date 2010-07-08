// Size of the level
var bounds : Rect;
var fallOutBuffer = 5.0;
var colliderThickness = 10.0;
var target : CameraScrolling;
var pos : Vector3;
var fixed = false;
var trail = false;
private var sceneViewDisplayColor = Color (0.0, 0.74, 0.74, 0.50);

function OnDisable () {
	instance = null;
}

function OnDrawGizmos () {
	Gizmos.color = sceneViewDisplayColor;
	var lowerLeft = Vector3 (bounds.xMin, bounds.yMax, 0);
	var upperLeft = Vector3 (bounds.xMin, bounds.yMin, 0);
	var lowerRight = Vector3 (bounds.xMax, bounds.yMax, 0);
	var upperRight = Vector3 (bounds.xMax, bounds.yMin, 0);
	
	Gizmos.DrawLine (lowerLeft, upperLeft);
	Gizmos.DrawLine (upperLeft, upperRight);
	Gizmos.DrawLine (upperRight, lowerRight);
	Gizmos.DrawLine (lowerRight, lowerLeft);
}

function Update () {
var player = GameObject.FindWithTag("Player");
if((player.transform.position.x<bounds.xMax)&&(player.transform.position.x>bounds.xMin)&&(player.transform.position.y<bounds.yMax)&&(player.transform.position.y>bounds.yMin))
{
	if (fixed)
	{
		target.isFixed=true;
		target.fixedPos=pos;
	}
	
if (trail)
	target.isTrail=true;

}	
else
{
target.noModifier=true;
}
}

