import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn("w-full py-12 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </section>
  );
};
