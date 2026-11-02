export default function SectionHeading({
  title,
  subtitle,
  light = false,
  as: Tag = "h2",
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  as?: "h2" | "h3";
}) {
  return (
    <div className={`section-heading ${light ? "is-light" : ""}`}>
      <span className="accent-bar" aria-hidden="true" />
      <Tag className="section-title">{title}</Tag>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
