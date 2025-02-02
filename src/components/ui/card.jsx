import React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-white/60 bg-card text-card-foreground shadow overflow-y-hidden",
      props.className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", props.className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", props.className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", props.className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", props.className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", props.className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
