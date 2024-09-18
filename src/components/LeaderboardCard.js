import React from "react";
import jake1 from "../assets/jake1.png";
import jake2 from "../assets/jake2.png";
import jake3 from "../assets/jake3.png";
import cele2Image from "../assets/cele2.png";

const LeaderboardCard = () => {
  return (
    <>
      {/* Card Elements */}
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
          display: "flex",
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
        }}
      >
        2055 Points
      </div>

      {/* Cele2 image */}
      <img
        style={{
          width: 483.35,
          height: 415.94,
          left: 800.29,
          position: "absolute",
          transformOrigin: "0 0",
        }}
        src={cele2Image}
        alt="cele2"
      />

      {/* Player 2, 3, and 4 */}
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
        }}
      >
        2006 Points
      </div>

      {/* Remaining Players */}
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
        alt="jake3"
      />
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
        alt="jake2"
      />
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
        alt="jake1"
      />
    </>
  );
};

export default LeaderboardCard;
