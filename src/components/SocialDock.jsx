import profile from "../data/profile";

function SocialDock() {
  const items = [
    {
      icon: "🐙",
      label: "GitHub",
      href: profile.github,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: profile.linkedin,
    },
    {
      icon: "✉️",
      label: "Email",
      href: `mailto:${profile.email}`,
    },
    {
      icon: "💬",
      label: "WhatsApp",
      href: profile.whatsapp,
    },
    {
      icon: "📄",
      label: "Resume",
      href: profile.resume,
    },
  ];

  return (
    <div className="social-dock">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          aria-label={item.label}
        >
          <span className="dock-icon">{item.icon}</span>

          <span className="dock-tooltip">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}

export default SocialDock;