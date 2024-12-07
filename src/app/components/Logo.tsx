type LogoProps = {
  size?: "small" | "large";
};

const Logo = ({ size = "large" }: LogoProps) => {
  const width = size === "small" ? 240 : 400;
  const height = size === "small" ? 72 : 120;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 400 120"
      className="w-full h-auto"
    >
      <circle cx="60" cy="60" r="50" fill="#3A405A" />
      <circle cx="35" cy="40" r="6" fill="#F76C5E" />
      <circle cx="50" cy="40" r="6" fill="#F76C5E" />
      <circle cx="65" cy="40" r="6" fill="#F76C5E" />
      <circle cx="35" cy="60" r="6" fill="#F76C5E" />
      <circle cx="50" cy="60" r="6" fill="#F76C5E" />
      <circle cx="35" cy="80" r="6" fill="#F76C5E" />
      <circle cx="50" cy="80" r="6" fill="#4CAF9A" />
      <circle cx="65" cy="80" r="6" fill="#4CAF9A" />
      <text
        x="130"
        y="75"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fill="#FFFFFF"
        fontWeight="bold"
      >
        Energizers.<tspan fill="#F76C5E">Fun</tspan>
      </text>
    </svg>
  );
};

export default Logo;
