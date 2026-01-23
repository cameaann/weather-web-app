export const Skeleton = ({ width = '100%', height = '20px', borderRadius = '4px', backgroundColor = 'var(--color-neutral-600)', style, children }: { width?: string; height?: string; borderRadius?: string; backgroundColor?: string; children?: React.ReactNode, style?: React.CSSProperties }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ...style,
      }}
    >{children}</div>
  );
};