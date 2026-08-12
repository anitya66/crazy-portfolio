import profile from "../data/profile";

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
        />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="m4 7 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2a9.9 9.9 0 0 0-8.55 14.9L2 22l5.25-1.38A10 10 0 1 0 12 2Zm0 18.1c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.11.82.83-3.03-.21-.33A8.1 8.1 0 1 1 12 20.1Zm4.45-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M6 3h9l3 3v15H6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M15 3v4h3M9 12h6M9 15h6M9 18h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function SocialDock() {
  const items = [
    {
      type: "github",
      label: "GitHub",
      href: profile.github,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      href: profile.linkedin,
    },
    {
      type: "mail",
      label: "Email",
      href: `mailto:${profile.email}`,
    },
    {
      type: "whatsapp",
      label: "WhatsApp",
      href: profile.whatsapp,
    },
    {
      type: "resume",
      label: "Resume",
      href: profile.resume,
    },
  ];

  return (
    <aside className="social-dock">
      <div className="dock-items">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`dock-item dock-${item.type}`}
            aria-label={item.label}
            data-label={item.label}
          >
            <span className="dock-icon">
              <SocialIcon type={item.type} />
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default SocialDock;
