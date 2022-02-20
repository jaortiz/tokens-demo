import { useBrand } from "@westpac/core";

export const BrandHook = (props) => {
  const { COLORS } = useBrand();

  return (
    <p style={{ color: COLORS.primary }} {...props}>
      This text is colored using the useBrand hook
    </p>
  );
};
