export default function SectionTitle({ children, className = "" }) {
  return (
    <div className={`text-center mb-4 ${className}`}>
      <h2 className="section-title">{children}</h2>
      <span className="title-underline" />
    </div>
  );
}
