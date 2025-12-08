import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ 
  code, 
  language = 'javascript', 
  filename,
  showLineNumbers = true 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const lines = code.split('\n');

  // Simple syntax highlighting with HTML escaping
  const highlightCode = (line: string) => {
    // First, escape HTML entities to prevent injection
    let escapedLine = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    
    // Keywords
    escapedLine = escapedLine.replace(
      /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|try|catch|new|this)\b/g,
      '<span class="text-purple-500">$1</span>'
    );
    
    // Comments
    escapedLine = escapedLine.replace(
      /(\/\/.*$)/g,
      '<span class="text-gray-500 italic">$1</span>'
    );
    
    // Numbers
    escapedLine = escapedLine.replace(
      /\b(\d+)\b/g,
      '<span class="text-blue-400">$1</span>'
    );
    
    return escapedLine;
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg-secondary))]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[rgb(var(--color-bg-primary))] border-b border-[rgb(var(--color-border))]">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {filename && (
            <span className="text-sm text-[rgb(var(--color-text-secondary))] font-mono">
              {filename}
            </span>
          )}
          <span className="text-xs px-2 py-1 rounded bg-primary-500/10 text-primary-600 dark:text-primary-400 font-mono">
            {language}
          </span>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg hover:bg-[rgb(var(--color-bg-secondary))] transition-colors"
          aria-label="Copiar código"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-[rgb(var(--color-text-secondary))]" />
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="select-none w-10 text-right pr-4 text-[rgb(var(--color-text-secondary))]/50">
                  {index + 1}
                </span>
              )}
              <code 
                className="flex-1 text-[rgb(var(--color-text-primary))]"
                dangerouslySetInnerHTML={{ __html: highlightCode(line) || '&nbsp;' }}
              />
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
