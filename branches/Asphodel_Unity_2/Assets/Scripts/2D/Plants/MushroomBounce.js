
function Update () {
}
var bounce = 100;
function OnTriggerEnter  (other : Collider)
{
if (other.gameObject.GetComponent("PlatformerController"))
other.gameObject.GetComponent("PlatformerController").movement.verticalSpeed =bounce;
//collision.gameObject.transform.Translate(0, 1, 0);

}