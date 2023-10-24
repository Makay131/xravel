import { forwardRef } from "react";

const ScrollToSection = forwardRef(({ children }, ref) => {
    return (
      <div ref={ref}>
        {children}
      </div>
    );
  });
  
export default ScrollToSection;