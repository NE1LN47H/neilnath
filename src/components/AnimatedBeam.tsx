const AnimatedBeam = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[shimmer_4s_ease-in-out_infinite]" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[shimmer_5s_ease-in-out_infinite]" />
    </div>
  );
};

export default AnimatedBeam;
