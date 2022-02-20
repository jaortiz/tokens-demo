export const Swatch = ({ color, ...props }) => (
  <div
    style={{
      height: "5rem",
      width: "5rem",
      backgroundColor: color,
      display: "inline-block",
    }}
    {...props}
  />
);
