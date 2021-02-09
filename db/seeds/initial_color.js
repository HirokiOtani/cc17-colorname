const fs = require("fs");
const db = require("../../server/knex.js");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("colors")
    .del()
    .then(async function () {
      const colors = JSON.parse(fs.readFileSync("../db/color-list.json"));
      for (const color of colors) {
        const name = color.name;
        const r = color.rgb.R;
        const g = color.rgb.G;
        const b = color.rgb.B;
        const hex = color.hexString;
        await db("colors").insert({
          name: name,
          r: r,
          g: g,
          b: b,
          hex: hex,
        });
      }
    });
};
