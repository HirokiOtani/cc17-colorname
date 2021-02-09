export default function dbtypeToRgb(colors) {
  //[{id:4, name:"Black", r:0,g:0,b:0}, ...] => [{R:0,G:0,B:0}]
  const changeColors = [];
  for (const color of colors) {
    changeColors.push({ R: color.r, G: color.g, B: color.b });
  }
  return changeColors;
}
