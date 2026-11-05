// Minimal inline SVG icon set (no extra dependency)
const paths = {
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 19c0-3.3 2.7-5 6-5s6 1.7 6 5" /><circle cx="17" cy="9" r="2.3" /><path d="M16.5 14c2.6 0 4.5 1.4 4.5 4" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19V5" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="M10 8.5v7l6-3.5z" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></>,
  bulb: <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" /></>,
  team: <><circle cx="12" cy="7" r="3" /><circle cx="5" cy="10" r="2.3" /><circle cx="19" cy="10" r="2.3" /><path d="M6.5 20c0-3.6 2.5-5.5 5.5-5.5s5.5 1.9 5.5 5.5z" /></>,
  badge: <><rect x="3" y="7" width="18" height="11" rx="2" /><circle cx="9" cy="12.5" r="1.8" /><circle cx="15" cy="12.5" r="1.8" /><path d="M9 7V5h6v2" /></>,
};

export default function Icon({ name, size = 28, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
