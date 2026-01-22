import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "outline";
}

export function Card({
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 md:p-8 transition-shadow",
        {
          "shadow-sm border border-slate-100 hover:shadow-md": variant === "default",
          "bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl":
            variant === "glass",
          "border-2 border-slate-200 bg-transparent": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
