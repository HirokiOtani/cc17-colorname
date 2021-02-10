export default function dbtype2xy(colors) {
  const rgb = [colors.r, colors.g, colors.b];
  const rgbC = rgb.map((x) => x / 255);
  //console.log(rgbC);
  const rgbN = rgbC.map((x) =>
    x > 0.04045 ? Math.pow((x + 0.055) / (1.0 + 0.055), 2.4) : x / 12.92
  );
  const X = rgbN[0] * 0.664511 + rgbN[1] * 0.154324 + rgbN[2] * 0.162028;
  const Y = rgbN[0] * 0.283881 + rgbN[1] * 0.668433 + rgbN[2] * 0.047685;
  const Z = rgbN[0] * 0.000088 + rgbN[1] * 0.07231 + rgbN[2] * 0.986039;
  //console.log(X, Y, Z);
  const x = X / (X + Y + Z);
  const y = Y / (X + Y + Z);
  return [x, y];
}
