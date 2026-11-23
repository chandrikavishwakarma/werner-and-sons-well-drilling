import { Link } from '../context/NavigationContext';
import Strata from '../components/Strata';
import CtaBand from '../components/CtaBand';

const resources = [
  {
    id: 'planning-a-well-project',
    category: 'Well Drilling',
    title: 'Planning a new well project',
    summary: 'A short checklist to help you prepare for a site-specific conversation and estimate.',
  },
  {
    id: 'understanding-well-output',
    category: 'Well Deepening',
    title: 'Understanding changes in well output',
    summary: 'Learn why a change in water supply needs an assessment before choosing a repair.',
  },
  {
    id: 'water-quality-and-treatment',
    category: 'Water Treatment',
    title: 'Start with a water-quality question',
    summary: 'Understand why testing is useful and why appearance alone cannot identify a water concern.',
  },
  {
    id: 'pump-warning-signs',
    category: 'Pump Service',
    title: 'Possible signs of a pump problem',
    summary: 'Recognize common symptoms and know when it is time to contact a qualified professional.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Resources</span>
          </nav>
          <span className="eyebrow">Homeowner Resources</span>
          <h1>Helpful information for your well and water system</h1>
          <p className="lead">
            Clear starting points for common questions about wells, water treatment, and pumps. Every property and system is different, so contact a qualified professional for an assessment.
          </p>
        </div>
        <Strata />
      </section>

      <section className="section section--white" aria-labelledby="resource-library-title">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Browse by topic</span>
            <h2 id="resource-library-title">Start with a question</h2>
            <p className="lead">These guides provide general information. They are not a diagnosis or a substitute for local requirements or professional advice.</p>
          </div>
          <div className="resource-card-grid">
            {resources.map((resource) => (
              <article className="resource-card" key={resource.id}>
                <span className="resource-category">{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.summary}</p>
                <a className="resource-read-more" href={`#${resource.id}`}>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Educational guides">
        <div className="container resource-articles">
          <article className="resource-article" id="planning-a-well-project" tabIndex={-1}>
            <span className="eyebrow">Well Drilling</span>
            <h2>Planning a new well project</h2>
            <p>A useful first step is to describe the property and the water needs you want the well to serve. A site-specific estimate can account for details that a general online guide cannot determine.</p>
            <h3>Information to gather before you call</h3>
            <ul>
              <li>The property location and the best way to access the proposed work area.</li>
              <li>Whether you are planning a new well or asking about an existing water system.</li>
              <li>Any available well records and the household or property water needs you want to discuss.</li>
              <li>Questions about local approvals, site requirements, or utility marking that should be confirmed with the relevant local authority and your contractor.</li>
            </ul>
            <p>Drilling conditions, project requirements, and costs depend on the property. The information above does not predict a well’s depth, yield, schedule, or price.</p>
            <p><Link href="/well-drilling">Learn about Werner &amp; Sons well drilling</Link></p>
          </article>

          <article className="resource-article" id="understanding-well-output" tabIndex={-1}>
            <span className="eyebrow">Well Deepening</span>
            <h2>Understanding changes in well output</h2>
            <p>A noticeable change in water supply can have more than one cause. Low pressure, sputtering faucets, or running short of water do not by themselves establish that a well needs deepening.</p>
            <h3>What to share during an assessment</h3>
            <ul>
              <li>When you first noticed the change and whether it is constant or intermittent.</li>
              <li>Whether faucets sputter, pressure changes, or the pump appears to run differently.</li>
              <li>Any available well, pump, or pressure-tank records.</li>
            </ul>
            <p>A qualified professional can help distinguish between a pump, tank, well, or other water-delivery concern. Do not open electrical equipment or attempt to remove a pump from a well.</p>
            <p><Link href="/well-deepening">Learn about well deepening and tanks</Link></p>
          </article>

          <article className="resource-article" id="water-quality-and-treatment" tabIndex={-1}>
            <span className="eyebrow">Water Treatment</span>
            <h2>Start with a water-quality question</h2>
            <p>Taste, odor, color, and staining can be useful observations, but they cannot identify every water-quality concern. A treatment choice should be based on test results and the specific water system rather than appearance alone.</p>
            <h3>Testing and treatment</h3>
            <p>The Pennsylvania Department of Health recommends routine private-well testing and identifies total coliform bacteria, nitrates, total dissolved solids, and pH among the tests to discuss. Use a Pennsylvania-accredited laboratory and follow current state guidance for your circumstances.</p>
            <p>Different treatment equipment addresses different issues. Review test results with a qualified water professional before selecting a system. Werner &amp; Sons’ website describes water-treatment services; this guide does not imply that the company provides laboratory testing.</p>
            <p><a href="https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/environmental-health/Private%20Well%20Water%20Testing%20Checklist.pdf" target="_blank" rel="noopener noreferrer">Read the Pennsylvania Department of Health private-well testing checklist</a>.</p>
            <p><Link href="/water-treatment">Learn about water treatment services</Link></p>
          </article>

          <article className="resource-article" id="pump-warning-signs" tabIndex={-1}>
            <span className="eyebrow">Pump Service</span>
            <h2>Possible signs of a pump problem</h2>
            <p>No water, sputtering faucets, low or fluctuating pressure, or a pump that cycles unusually can be reasons to seek professional advice. These symptoms do not identify a particular failed part.</p>
            <h3>What you can do safely</h3>
            <ul>
              <li>Note when the symptom began and whether it affects the whole property.</li>
              <li>Share any recent changes or available pump and tank records with the service provider.</li>
              <li>Avoid opening electrical equipment, handling wiring, or pulling a pump from the well.</li>
            </ul>
            <p>If the water supply stops or changes, contact a qualified well or pump professional for an assessment. For urgent service, use the business’s published phone number to confirm current availability.</p>
            <p><Link href="/pump-service">Learn about pump service</Link></p>
          </article>
        </div>
      </section>

      <CtaBand title="Have a question about your well?" description="Talk with Werner & Sons about your property and the service you need." />
    </>
  );
}
