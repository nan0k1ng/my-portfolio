export default function Navbar({ setActiveSection }) {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-end items-center bg-white px-6 py-4 shadow-md z-50">
      <div className="navbar">
        <button onClick={() => setActiveSection('hero')} className="text-sm font-medium hover:text-blue-600">Home</button>
        <button onClick={() => setActiveSection('about')} className="text-sm font-medium hover:text-blue-600">About</button>
        <button onClick={() => setActiveSection('projects')} className="text-sm font-medium hover:text-blue-600">Projects</button>
        <button onClick={() => setActiveSection('contact')} className="text-sm font-medium hover:text-blue-600">Contact</button>
      </div>
    </nav>
  );
}