import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  disabled?: boolean;
}

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(212, 175, 55, 0.35)",
  disabled = false,
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={disabled ? undefined : handleMouseMove}
      onMouseEnter={disabled ? undefined : handleMouseEnter}
      onMouseLeave={disabled ? undefined : handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spotlight effect */}
      {!disabled && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            opacity,
            background: `radial-gradient(180px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 50%)`,
          }}
        />
      )}
      {/* Border glow effect */}
      {!disabled && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl z-10"
          style={{
            opacity: isFocused ? 1 : 0,
            background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.8), transparent 50%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "2px",
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default SpotlightCard;
