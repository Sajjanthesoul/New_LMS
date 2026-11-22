import { Activity, BookOpen, BrainCircuit, CalendarCheck, GraduationCap, LayoutDashboard, Users } from "lucide-react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Students", icon: Users, active: false },
  { label: "Courses", icon: BookOpen, active: false },
  { label: "Attendance", icon: CalendarCheck, active: false },
  { label: "Performance", icon: BrainCircuit, active: false },
];

const metrics = [
  { label: "Total students", value: "—", note: "Connect the database to load data", icon: GraduationCap },
  { label: "Active courses", value: "—", note: "Course module is planned", icon: BookOpen },
  { label: "Attendance rate", value: "—", note: "Attendance module is planned", icon: CalendarCheck },
  { label: "At-risk students", value: "—", note: "ML service integration is planned", icon: Activity },
];

export default function App() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><GraduationCap size={22} /></div>
          <div><strong>New LMS</strong><span>INTELLIGENT CAMPUS</span></div>
        </div>
        <div className="nav-caption">WORKSPACE</div>
        <nav>
          {navigation.map(({ label, icon: Icon, active }) => (
            <a className={active ? "nav-link active" : "nav-link"} href="#" key={label} onClick={(event) => event.preventDefault()}>
              <Icon size={18} /><span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="avatar">SA</div>
          <div><strong>Workspace Admin</strong><span>Administrator</span></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div><span className="eyebrow">LEARNING MANAGEMENT</span><h1>Dashboard overview</h1></div>
          <div className="status"><span className="status-dot" /> Development workspace</div>
        </header>

        <section className="welcome">
          <div>
            <span className="welcome-kicker">YOUR CAMPUS, CONNECTED</span>
            <h2>Welcome to your learning hub.</h2>
            <p>Your foundation for student management, learning activity, and data-driven academic insights.</p>
          </div>
          <div className="welcome-art"><BrainCircuit size={76} strokeWidth={1.15} /></div>
        </section>

        <section className="section-heading">
          <div><h2>At a glance</h2><p>Live metrics will appear when the platform modules are connected.</p></div>
          <span className="period-label">INITIAL SETUP</span>
        </section>

        <section className="metric-grid">
          {metrics.map(({ label, value, note, icon: Icon }) => (
            <article className="metric-card" key={label}>
              <div className="metric-top"><span>{label}</span><div className="metric-icon"><Icon size={19} /></div></div>
              <strong className="metric-value">{value}</strong>
              <p>{note}</p>
            </article>
          ))}
        </section>

        <section className="lower-grid">
          <article className="panel">
            <div className="panel-heading"><div><h3>Platform modules</h3><p>The core areas planned for this LMS</p></div><span className="mini-tag">ROADMAP</span></div>
            <div className="module-list">
              <div><Users size={18} /><span><strong>Student management</strong><small>Profiles, registration, and enrollment</small></span><em>Planned</em></div>
              <div><CalendarCheck size={18} /><span><strong>Attendance tracking</strong><small>Class attendance and records</small></span><em>Planned</em></div>
              <div><BookOpen size={18} /><span><strong>Learning and assessments</strong><small>Courses, materials, quizzes, and results</small></span><em>Planned</em></div>
              <div><BrainCircuit size={18} /><span><strong>Predictive analytics</strong><small>Student performance and risk insights</small></span><em>Planned</em></div>
            </div>
          </article>
          <article className="panel api-panel">
            <div className="panel-heading"><div><h3>System connection</h3><p>Backend service configuration</p></div><span className="api-symbol"><Activity size={19} /></span></div>
            <div className="connection-label">API BASE URL</div>
            <code>{apiUrl}</code>
            <p className="connection-note">Start the FastAPI service to make this dashboard ready for live data.</p>
            <a className="docs-link" href={`${apiUrl}/docs`} target="_blank" rel="noreferrer">Open API documentation <span>↗</span></a>
          </article>
        </section>
        <footer>New LMS <span>•</span> Foundation build v0.1.0</footer>
      </main>
    </div>
  );
}
