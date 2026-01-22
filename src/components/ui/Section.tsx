import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light" | "pattern" | "dark" | "transparent";
}

export function Section({
  children,
  id,
  className,
  background = "white",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        {
          "bg-white": background === "white",
          "bg-slate-50": background === "light",
          "bg-slate-50/50": background === "pattern",
          "bg-slate-900 text-slate-200": background === "dark",
          "bg-transparent": background === "transparent",
        },
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
