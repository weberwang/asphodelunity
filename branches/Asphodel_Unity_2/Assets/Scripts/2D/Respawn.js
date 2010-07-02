var player : GameObject;
function Update () {

if (Input.GetButtonDown ("Jump") ) {
Instantiate(player, transform.position, transform.rotation);
Destroy (this);
	}
}