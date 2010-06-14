
function Update () {
}

var plant : GameObject;
function OnCollisionEnter(collision : Collision) {
Destroy(gameObject);
var wreckClone = Instantiate(plant, transform.position, transform.rotation);
}