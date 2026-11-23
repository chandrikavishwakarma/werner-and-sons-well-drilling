import { useState } from 'react';

const areas = [
  { id: 'carbon', label: 'Carbon County', className: 'service-map-carbon' },
  { id: 'poconos', label: 'The Poconos', className: 'service-map-poconos' },
  { id: 'monroe', label: 'Monroe County', className: 'service-map-monroe' },
  { id: 'lehigh', label: 'Lehigh County', className: 'service-map-lehigh' },
  { id: 'northampton', label: 'Northampton County', className: 'service-map-northampton' },
];

export default function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState(null);
  const selectedLabel = areas.find((area) => area.id === selectedArea)?.label;

  return (
    <div className="service-area-explorer">
      <span className="service-map-caption">Approximate regional overview · Not to scale</span>
      <div className="service-map" role="group" aria-label="Select a listed service area. Approximate regional positions, not county boundaries.">
        {areas.map((area) => (
          <button
            key={area.id}
            type="button"
            className={`service-map-region ${area.className}${selectedArea === area.id ? ' selected' : ''}`}
            aria-pressed={selectedArea === area.id}
            onClick={() => setSelectedArea(area.id)}
          >
            {area.label}
          </button>
        ))}
      </div>
      <p className="service-map-note" aria-live="polite">
        {selectedLabel
          ? `${selectedLabel} is listed among the areas served on this website. Call to confirm service availability at a specific property.`
          : 'Select a labeled area for details. The diagram shows approximate regional positions only; it does not define exact service boundaries.'}
      </p>
      <a className="btn btn--outline service-map-cta" href="tel:+16102585615">
        Contact us to confirm availability
      </a>
    </div>
  );
}
