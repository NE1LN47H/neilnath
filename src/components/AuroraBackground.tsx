const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-3xl animate-[spin_20s_linear_infinite]" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/20 via-transparent to-transparent blur-3xl animate-[spin_25s_linear_infinite_reverse]" />
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl animate-pulse" />
    </div>
  );
};

export default AuroraBackground;
