
function Update () {
}

function OnCollisionEnter(collision : Collision)
{
if (collision.gameObject.name == "Character (Lerpz)" )
Destroy(gameObject);
}