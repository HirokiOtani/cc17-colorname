import React, { useEffect, useState } from "react";
import diff from "color-diff";
import hexToRgb from "./helper/hexToRgb";
import rgb2hex from "./helper/rgb2hex";
import getName from "./helper/getName";
import axios from "axios";
import dbtypeToRgb from "./helper/dbtypeToRgb";
import pushName from "./helper/pushName";
import { ColorSpace } from "./ColorSpace";

export const ColorForm = () => {
  const [colors, setColors] = useState([{ name: "Black", r: 0, g: 0, b: 0 }]);
  const [palette, setPalette] = useState([
    { R: 255, G: 0, B: 0 },
    { R: 0, G: 255, B: 0 },
    { R: 0, G: 0, B: 255 },
  ]);
  const [newName, setNewName] = useState("noNewName");
  const [toggle, setToggle] = useState("");
  const [upLoadedFile, setUploadedFile] = useState({});

  useEffect(() => {
    async function fetchColors() {
      try {
        const res = await axios.get("/get");
        setColors(res.data);
        setPalette(dbtypeToRgb(res.data));
      } catch (err) {
        console.error(err);
      }
    }
    fetchColors();
  }, [toggle]);
  const [color, setColor] = useState([255, 255, 255]); //initial color is black.
  const [hex, setHex] = useState("");
  const [nearRGB, setNearRGB] = useState(false);
  const [nearHex, setNearHex] = useState(false);
  useEffect(() => {
    const near = diff.closest(
      { R: color[0], G: color[1], B: color[2] },
      palette
    );
    setNearRGB([near.R, near.G, near.B]);
    setNearHex(rgb2hex([near.R, near.G, near.B]));
  }, [color, palette, toggle]);

  return (
    <main
      style={{
        backgroundColor: "#dee6ed",
        // minHeight: 530,
        height: "100vh",
      }}
    >
      <input
        type="color"
        onChange={(e) => {
          setColor(hexToRgb(e.target.value));
          setHex(e.target.value);
        }}
        style={{ position: "absolute", top: 200, left: 20 }}
      ></input>
      <h1 style={{ color: nearHex, position: "absolute", left: 270, top: 30 }}>
        {getName(nearRGB, colors)}
      </h1>
      <img
        style={{ width: "200px", position: "absolute", left: 270, top: 200 }}
        id="photo"
        alt=""
      />
      <input
        type="file"
        style={{ position: "absolute", left: 20, top: 250 }}
        onChange={(e) => {
          setUploadedFile(e.target.files[0]);
          const selectedFile = e.target.files[0];
          const reader = new FileReader();
          const imgtag = document.getElementById("photo");
          reader.onload = function (event) {
            imgtag.src = event.target.result;
          };
          reader.readAsDataURL(selectedFile);
        }}
      ></input>
      <div
        style={{
          backgroundColor: hex,
          width: 90,
          height: 90,
          position: "absolute",
          left: 30,
          top: 50,
        }}
      ></div>
      <div
        style={{
          backgroundColor: nearHex,
          width: 90,
          height: 90,
          position: "absolute",
          left: 120,
          top: 50,
        }}
      ></div>
      <button
        style={{ position: "absolute", left: 20, top: 350 }}
        onClick={() => {
          pushName(color, getName(nearRGB, colors));
          setToggle(color);
        }}
      >
        This Name is correct!
      </button>
      <form style={{ position: "absolute", left: 20, top: 400 }}>
        <input
          type="text"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="button"
          value="Submit new name!"
          onClick={() => {
            pushName(color, newName);
            setToggle(newName);
          }}
        ></input>
      </form>
      <canvas id="myChart" width="400" height="400"></canvas>
      <ColorSpace colors={colors} />
    </main>
  );
};
