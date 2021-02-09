import axios from "axios";

export default async function getColors() {
  const colors = await axios.get("/get");
  return colors;
}
