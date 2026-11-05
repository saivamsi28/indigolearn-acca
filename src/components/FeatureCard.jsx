import Icon from "./Icon";

export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card h-100 text-center">
      <div className="feature-icon"><Icon name={icon} size={44} /></div>
      <h3 className="feature-title">{title}</h3>
      <p className="mb-0 text-muted small">{text}</p>
    </div>
  );
}
