import React from "react";
import { cn } from "@/lib/utils";

const Pill = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("rounded-full bg-accent w-fit px-2 text-sm py-1 text-primary", props.className)}
    {...props}
  />
));
Pill.displayName = "Pill";

export { Pill };
