"use client";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className="bg-neutral-950 border-t border-outline-variant/10"
      role="contentinfo"
    >
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-black tracking-tighter text-on-surface"
            aria-label="HD Global Group — back to top"
          >
            HD GLOBAL GROUP
          </a>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              <li>
                <a
                  href="#"
                  className="text-on-surface-variant/60 hover:text-primary-container text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-on-surface-variant/60 hover:text-primary-container text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-on-surface-variant/60 hover:text-primary-container text-sm transition-colors duration-300"
                >
                  Safety Standards
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-on-surface-variant/40 text-xs tracking-wider">
            &copy; 2026 HD Global Group
          </p>
        </div>
      </div>
    </footer>
  );
}
