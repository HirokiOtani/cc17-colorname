import axios from "axios";
import rgb2hex from "./rgb2hex";

export default async function pushName(color, name) {
  await axios.post("/postName", {
    name: name,
    color: color,
    hex: rgb2hex(color),
  });
}
