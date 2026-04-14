import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

function Spinner({ className, ...props }) {
  return (
    <Icon
      icon="fluent-emoji-flat:magic-wand"
      strokeWidth={2}
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
