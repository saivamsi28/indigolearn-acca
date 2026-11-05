import Icon from "./Icon";

export default function StatChip({ icon, label, value }) {
  return (
    <div className="stat-chip">
      <span className="stat-icon"><Icon name={icon} size={18} /></span>
      <div className="lh-sm">
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
}
