import React from "react";
import celeImage from "../assets/cele.png";
import cele2Image from "../assets/cele2.png";
import firstOne from "../assets/Ellipse 1.png";
import secondone from "../assets/Ellipse 2.png";
import thirdone from "../assets/Ellipse 3.png";
import cap1 from "../assets/Rectangle 5.png";
import cap2 from "../assets/Rectangle 6.png";
import cap3 from "../assets/Rectangle 7.png";
import jake1 from "../assets/jake1.png";
import jake2 from "../assets/jake2.png";
import jake3 from "../assets/jake3.png";

const Leaderboard = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#FBF1F6",
      }}
    >
      <div
        style={{
          width: 1309,
          height: 610.19,
          left: -16,
          top: -51.83,
          position: "absolute",
          background:
            "linear-gradient(180deg, rgba(109.61, 7.28, 145.56, 0.90) 0%, rgba(146.62, 14.66, 78, 0.90) 100%)",
          boxShadow: "0px 10px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 60,
        }}
      ></div>
      <img
        style={{
          width: 447,
          height: 444,

          position: "absolute",

          transformOrigin: "0 0",
        }}
        src={celeImage}
      />
      <div
        style={{
          left: 469,
          top: 0,
          position: "absolute",
          color: "white",
          fontSize: 70,
          fontFamily: "Javanese Text",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Leaderboard
      </div>
      <img
        style={{
          width: 200,
          height: 200,
          left: 565,
          top: 142,
          position: "absolute",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 9999,
          border: "3px black solid",
        }}
        src={firstOne}
      />
      <img
        style={{
          width: 147,
          height: 135,
          left: 861,
          top: 352.08,
          position: "absolute",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 9999,
          border: "3px black solid",
        }}
        src={secondone}
      />
      <img
        style={{
          width: 173,
          height: 168,
          left: 312,
          top: 305.5,
          position: "absolute",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 9999,
          border: "3px black solid",
        }}
        src={thirdone}
      />
      <div
        style={{
          width: 217,
          height: 70,
          left: 557,
          top: 333,
          position: "absolute",
          background: "#F182B7",
        }}
      />
      <div
        style={{
          width: 217,
          height: 70,
          left: 293,
          top: 434.5,
          position: "absolute",
          background: "#F182B7",
        }}
      />
      <div
        style={{
          width: 217,
          height: 70,
          left: 826,
          top: 460.08,
          position: "absolute",
          background: "#F182B7",
        }}
      />
      <img
        style={{
          width: 106.28,
          height: 66.06,
          left: 700.13,
          top: 120.59,
          position: "absolute",
          transform: "rotate(3.86deg)",
          transformOrigin: "0 0",
        }}
        src={cap1}
      />
      <img
        style={{
          width: 102.28,
          height: 94.08,
          left: 282,
          top: 279.72,
          position: "absolute",
          transform: "rotate(-29.09deg)",
          transformOrigin: "0 0",
        }}
        src={cap2}
      />
      <img
        style={{
          width: 102.3,
          height: 94.07,
          left: 951.19,
          top: 300,
          position: "absolute",
          transform: "rotate(10.33deg)",
          transformOrigin: "0 0",
        }}
        src={cap3}
      />
      <div
        style={{
          width: 1154,
          height: 98,
          left: 70,
          top: 586,
          position: "absolute",
          background: "#F182B7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 30,
        }}
      />
      <div
        style={{
          width: 1154,
          height: 98,
          left: 70,
          top: 700,
          position: "absolute",
          background: "#F182B7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 30,
        }}
      />
      <div
        style={{
          width: 1154,
          height: 98,
          left: 70,
          top: 814,
          position: "absolute",
          background: "#F182B7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 30,
        }}
      />
      <div
        style={{
          width: 169,
          height: 24,
          left: 580,
          top: 345,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          overflow: "hidden",
          wordWrap: "break-word",
          display: "flex", // Align the image inside the div
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        PHOEBE BUFFAY
      </div>
      <div
        style={{
          width: 144,
          height: 29,
          left: 591,
          top: 372,
          position: "absolute",
          color: "black",
          fontSize: 24,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        2055 Points
      </div>
      <div
        style={{
          width: 171,
          height: 24,
          left: 321,
          top: 441,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        JOEY TRIBBIANI
      </div>
      <div
        style={{
          width: 145,
          height: 29,
          left: 327,
          top: 465.5,
          position: "absolute",
          color: "black",
          fontSize: 24,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        2006 Points
      </div>
      <div
        style={{
          width: 163,
          height: 24,
          left: 853,
          top: 470,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        AMY SANTIAFO
      </div>
      <div
        style={{
          width: 141,
          height: 29,
          left: 862,
          top: 495.08,
          position: "absolute",
          color: "black",
          fontSize: 24,
          fontFamily: "Inter",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        1098 Points
      </div>
      <div
        style={{
          width: 201,
          height: 29,
          left: 923,
          top: 620,
          position: "absolute",
          color: "black",
          fontSize: 32,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        1098 Points
      </div>
      <div
        style={{
          width: 201,
          height: 29,
          left: 923,
          top: 734,
          position: "absolute",
          color: "black",
          fontSize: 32,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        1098 Points
      </div>
      <div
        style={{
          width: 201,
          height: 29,
          left: 923,
          top: 846,
          position: "absolute",
          color: "black",
          fontSize: 32,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        1098 Points
      </div>
      <div
        style={{
          width: 192,
          left: 293,
          top: 621,
          position: "absolute",
          color: "black",
          fontSize: 32,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Jake Peralta{" "}
      </div>
      <img
        style={{
          width: 483.35,
          height: 415.94,
          left: 800.29,

          position: "absolute",

          transformOrigin: "0 0",
        }}
        src={cele2Image}
      />
      <div
        style={{
          left: 119,
          top: 616,
          position: "absolute",
          color: "black",
          fontSize: 36,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        3
      </div>
      <img
        style={{
          width: 78,
          height: 82,
          left: 181,
          top: 594,
          position: "absolute",
          borderRadius: 9999,
        }}
        src={jake3}
      />
      <div
        style={{
          width: 219,
          left: 297,
          top: 844,
          position: "absolute",
          color: "black",
          fontSize: 32,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Ross Geller{" "}
      </div>
      <div
        style={{
          left: 119,
          top: 844,
          position: "absolute",
          color: "black",
          fontSize: 36,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        5
      </div>
      <img
        style={{
          width: 78,
          height: 82,
          left: 181,
          top: 822,
          position: "absolute",
          borderRadius: 9999,
        }}
        src={jake2}
      />
      <div
        style={{
          width: 237,
          left: 297,
          top: 733,
          position: "absolute",
          color: "black",
          fontSize: 32,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Monica Geller{" "}
      </div>
      <div
        style={{
          left: 119,
          top: 733,
          position: "absolute",
          color: "black",
          fontSize: 36,
          fontFamily: "Inter",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        4
      </div>
      <img
        style={{
          width: 78,
          height: 82,
          left: 181,
          top: 711,
          position: "absolute",
          borderRadius: 9999,
        }}
        src={jake1}
      />
    </div>
  );
};

export default Leaderboard;
