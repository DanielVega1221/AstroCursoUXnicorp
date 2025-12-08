import { useState, type ReactNode } from 'react';

interface InteractiveDemoProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function InteractiveDemo({ title, description, children }: InteractiveDemoProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="my-6 border border-[rgb(var(--color-border))] rounded-xl overflow-hidden bg-[rgb(var(--color-bg-secondary))]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between bg-[rgb(var(--color-bg-primary))] hover:bg-[rgb(var(--color-bg-secondary))] transition-colors"
      >
        <div className="text-left">
          <h4 className="font-semibold text-[rgb(var(--color-text-primary))]">{title}</h4>
          {description && (
            <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">{description}</p>
          )}
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="p-6 animate-slide-down">
          {children}
        </div>
      )}
    </div>
  );
}
