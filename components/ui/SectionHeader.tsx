interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 max-w-2xl ${alignClass}`}>
      <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-4 text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
