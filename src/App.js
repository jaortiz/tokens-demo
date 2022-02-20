import { GEL } from "@westpac/core";
import rams from "@westpac/rams";
import { AccessibilityIcon, BankIcon } from "@westpac/icon";
import { RAMSLogo } from "@westpac/symbol";
import { ATMPictogram, AccessibilityPictogram } from "@westpac/pictogram";
import { Swatch } from "./Swatch";
import { BrandHook } from "./BrandHook";

function App() {
  const { COLORS } = rams;
  const palette = [
    "primary",
    "hero",
    "neutral",
    "heading",
    "text",
    "muted",
    "border",
    "background",
    "light",
    "link",
    "pop",
  ];

  return (
    // GEL component is a context provider for passed brand
    <GEL brand={rams}>
      <div style={{ padding: "2rem" }}>
        <h2>Colours</h2>
        {palette.map((color) => (
          <Swatch key={color} color={COLORS[color]} />
        ))}
        {/* Any Westpac GEL components are required to be wrapped in a GEL wrapper to work */}
        <h2>Icons</h2>
        <AccessibilityIcon />
        <BankIcon />
        <h2>Logos</h2>
        <RAMSLogo />
        <h2>Pictograms</h2>
        <ATMPictogram />
        <AccessibilityPictogram />
        {/* Demo useBrand hook usage */}
        <h2>useBrand</h2>
        <BrandHook />
      </div>
    </GEL>
  );
}

export default App;
