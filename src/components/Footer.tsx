"use client";

export default function Footer() {
  return (
    <footer
      className="bg-neutral-950 border-t border-outline-variant/10"
      role="contentinfo"
    >
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Brand + Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
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
            <a
              href="https://www.instagram.com/hdglobalgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow HD Global Group on Instagram"
              className="text-on-surface-variant/60 hover:text-primary-container transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3 text-sm">
            <a
              href="tel:+19367180696"
              className="text-on-surface-variant/60 hover:text-primary-container transition-colors duration-300 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                phone
              </span>
              (936) 718-0696
            </a>
            <a
              href="mailto:info@hdglobalgroup.us"
              className="text-on-surface-variant/60 hover:text-primary-container transition-colors duration-300 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                mail
              </span>
              info@hdglobalgroup.us
            </a>
          </div>

          {/* Links + Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center md:justify-end gap-6">
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
            <p className="text-on-surface-variant/40 text-xs tracking-wider">
              &copy; 2026 HD Global Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
