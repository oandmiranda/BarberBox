"use client";

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Overlay;