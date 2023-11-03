import { jwtDecode } from "jwt-decode";

function giveMeMyStuff(stuff) {
  return jwtDecode(stuff);
}

export default giveMeMyStuff;
