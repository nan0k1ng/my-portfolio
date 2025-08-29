// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-700 px-4 py-6 text-sm text-neutral-500 dark:text-neutral-400 flex justify-between items-center">
      <span>&copy; {new Date().getFullYear()}© 2025 Cyrus. Crafted with myth and motion.</span>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        GitHub ↗
      </a>
    </footer>
  );
}





