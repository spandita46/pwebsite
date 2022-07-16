import React from "react";
import Image from "next/image";
const ResumeBtn = () => (
  <a
    href="/skp_cv.docx"
    className="social-icon"
    style={{
      display: "inline-block",
      width: "50px",
      height: "50px",
      position: "relative",
      overflow: "hidden",
      verticalAlign: "middle",
      cursor: "pointer",
    }}
  >
    <div
      class="social-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        priority
        src="/images/CVLogo.png"
        height={"80px"}
        width={"80px"}
        alt={"Sandeep's Resume"}
      />
    </div>
  </a>
);

export default ResumeBtn;
