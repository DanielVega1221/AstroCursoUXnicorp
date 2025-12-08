import { useState } from 'react';

export default function FlexboxDemo() {
  const [direction, setDirection] = useState<'row' | 'column'>('row');
  const [justify, setJustify] = useState<'start' | 'center' | 'end' | 'between' | 'around'>('start');
  const [align, setAlign] = useState<'start' | 'center' | 'end' | 'stretch'>('stretch');

  const justifyMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
  };

  const alignMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Direction</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as any)}
            className="w-full px-3 py-2 bg-[rgb(var(--color-bg-primary))] border border-[rgb(var(--color-border))] rounded-lg"
          >
            <option value="row">Row</option>
            <option value="column">Column</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Justify Content</label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value as any)}
            className="w-full px-3 py-2 bg-[rgb(var(--color-bg-primary))] border border-[rgb(var(--color-border))] rounded-lg"
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="between">Space Between</option>
            <option value="around">Space Around</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Align Items</label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value as any)}
            className="w-full px-3 py-2 bg-[rgb(var(--color-bg-primary))] border border-[rgb(var(--color-border))] rounded-lg"
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
      </div>

      {/* Preview */}
      <div className="p-6 bg-[rgb(var(--color-bg-primary))] border-2 border-dashed border-[rgb(var(--color-border))] rounded-lg">
        <div
          style={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: justifyMap[justify],
            alignItems: alignMap[align],
            gap: '12px',
            minHeight: '200px',
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="px-6 py-4 bg-primary-500 text-white rounded-lg font-semibold"
            >
              Item {item}
            </div>
          ))}
        </div>
      </div>

      {/* Code Output */}
      <div className="p-4 bg-slate-900 text-slate-100 rounded-lg font-mono text-sm overflow-x-auto">
        <pre>{`.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyMap[justify]};
  align-items: ${alignMap[align]};
  gap: 12px;
}`}</pre>
      </div>
    </div>
  );
}
