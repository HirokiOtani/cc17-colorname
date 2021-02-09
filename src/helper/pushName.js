import axios from "axios";

export default async function pushName(color, name) {
  await axios.post("/postName", {
    name: name,
    color: color,
  });
}
