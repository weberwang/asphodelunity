
function Update () {
}

var plant : GameObject;
function OnCollisionEnter(collision : Collision) {
Destroy(gameObject);
if (collision.gameObject.GetComponent("FertileSoil"))
{
var newPlant = Instantiate(plant, transform.position,  Quaternion.identity);
if (newPlant.gameObject.name == "Mushroom(Clone)")
newPlant.transform.position.z = -1;  
}
}