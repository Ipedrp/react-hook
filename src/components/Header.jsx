// components/Header.jsx
export default function Header({ title, subtitle, children }) {
    return (
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-200 font-extrabold text-4xl">{title}</h1>
          <p className="text-gray-400">{subtitle}</p>
        </div>
        {children}
      </header>
    );
  }