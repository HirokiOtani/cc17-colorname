export default function getName(nearRGB, colors) {
  for (const color of colors) {
    if (
      nearRGB[0] === color.r &&
      nearRGB[1] === color.g &&
      nearRGB[2] === color.b
    )
      return color.name;
  }
}
