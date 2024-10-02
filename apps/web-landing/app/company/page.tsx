import React from "react";

type ColorBoxProps = {
  color: string;
};
const ColorBox: React.FC<ColorBoxProps> = ({ color }) => (
  <div
    style={{
      display: "inline-block",
      width: "100px",
      height: "100px",
      marginRight: "20px",
      border: "1px solid #ddd",
      backgroundColor: color,
    }}
  ></div>
);

type ColorInfoProps = {
  name: string;
  description: string;
  hsl: string;
};

const ColorInfo: React.FC<ColorInfoProps> = ({ name, description, hsl }) => (
  <div style={{ display: "inline-block", verticalAlign: "top" }}>
    <strong>{name}</strong>
    <br />
    {description}
    <br />
    HSL: {hsl}
  </div>
);

type ColorSectionProps = {
  title: string;
  colors: ColorInfoProps[];
};

const ColorSection: React.FC<ColorSectionProps> = ({ title, colors }) => (
  <div style={{ marginBottom: "30px" }}>
    <h2 style={{ color: "#2980b9" }}>{title}</h2>
    {colors.map((color, index) => (
      <div key={index}>
        <ColorBox color={`hsl(${color.hsl})`} />
        <ColorInfo {...color} />
      </div>
    ))}
  </div>
);

const BrandColorGuide = () => {
  const colorSections = [
    {
      title: "Primary Colors",
      colors: [
        {
          name: "Primary",
          description: "A deep, rich navy blue",
          hsl: "222.2, 47.4%, 11.2%",
        },
        {
          name: "Primary Foreground",
          description: "An almost white, very light blue",
          hsl: "210, 40%, 98%",
        },
      ],
    },
    {
      title: "Secondary Colors",
      colors: [
        {
          name: "Secondary",
          description: "A very light grayish blue",
          hsl: "210, 40%, 96.1%",
        },
        {
          name: "Secondary Foreground",
          description: "The same deep navy as the primary color",
          hsl: "222.2, 47.4%, 11.2%",
        },
      ],
    },
    {
      title: "Accent Colors",
      colors: [
        {
          name: "Accent",
          description: "The same light grayish blue as the secondary color",
          hsl: "210, 40%, 96.1%",
        },
        {
          name: "Accent Foreground",
          description: "The deep navy, consistent with primary and secondary",
          hsl: "222.2, 47.4%, 11.2%",
        },
      ],
    },
    {
      title: "Background and Foreground",
      colors: [
        { name: "Background", description: "Pure white", hsl: "0, 0%, 100%" },
        {
          name: "Foreground",
          description: "The consistent deep navy",
          hsl: "222.2, 47.4%, 11.2%",
        },
      ],
    },
    {
      title: "UI Element Colors",
      colors: [
        {
          name: "Border & Input",
          description: "A light grayish blue for borders and input fields",
          hsl: "214.3, 31.8%, 91.4%",
        },
        {
          name: "Ring",
          description: "A medium grayish blue for focus rings or highlights",
          hsl: "215, 20.2%, 65.1%",
        },
      ],
    },
    {
      title: "Semantic Colors",
      colors: [
        {
          name: "Destructive",
          description: "A bright red for destructive actions or alerts",
          hsl: "0, 100%, 50%",
        },
        {
          name: "Destructive Foreground",
          description:
            "An almost white, very light blue (same as Primary Foreground)",
          hsl: "210, 40%, 98%",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "#333",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#2c3e50",
          borderBottom: "2px solid #3498db",
          paddingBottom: "10px",
        }}
      >
        Brand Color Guide
      </h1>

      {colorSections.map((section, index) => (
        <ColorSection key={index} {...section} />
      ))}

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#2980b9" }}>Additional Information</h2>
        <p>
          <strong>Border Radius:</strong> The default border radius is 0.5rem
          (8px). Use this for consistency across components.
          <br />
          <strong>Muted Colors:</strong> Use HSL 210, 40%, 96.1% for muted
          backgrounds and HSL 215.4, 16.3%, 46.9% for muted text.
        </p>
      </div>
    </div>
  );
};

export default BrandColorGuide;
