import { useState } from 'react';

export default function GridDemo() {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(16);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Columns: {columns}
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Rows: {rows}
          </label>
          <input
            type="range"
            min="1"
            max="4"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Gap: {gap}px
          </label>
          <input
            type="range"
            min="0"
            max="40"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="p-6 bg-[rgb(var(--color-bg-primary))] border-2 border-dashed border-[rgb(var(--color-border))] rounded-lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 100px)`,
            gap: `${gap}px`,
          }}
        >
          {Array.from({ length: columns * rows }).map((_, i) => (
            <div
              key={i}
              className="bg-accent-500 text-white rounded-lg flex items-center justify-center font-semibold"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Code Output */}
      <div className="p-4 bg-slate-900 text-slate-100 rounded-lg font-mono text-sm overflow-x-auto">
        <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 100px);
  gap: ${gap}px;
}`}</pre>
      </div>
    </div>
  );
}
