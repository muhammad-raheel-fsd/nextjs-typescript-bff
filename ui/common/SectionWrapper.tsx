import React from "react";

import { cn } from "@/lib/utils";

const SectionWrapper: React.FC<{
  children: React.ReactNode;
  parentClassName?: string;
  childrenClassName?: string;
  component?: React.ElementType;
}> = ({ children, parentClassName, childrenClassName, component }) => {
  const Comp = component ?? "section";
  return (
    <Comp className={cn("w-full", parentClassName)}>
      <div className={cn("max-w-7xl mx-auto", childrenClassName)}>
        {children}
      </div>
    </Comp>
  );
};

export default SectionWrapper;
