// Work.tsx - Главная страница со списком проектов
const projects = [
  { id: 1, title: "Noir Study I", category: "Video", year: "2025-2026" },
  { id: 2, title: "Vertical Dreams", category: "Video", year: "2025-2026" },
  { id: 3, title: "Light Trails", category: "Video", year: "2025-2026" },
  { id: 4, title: "Urban Shadows", category: "Video", year: "2025-2026" },
  { id: 5, title: "Midnight Objects", category: "Video", year: "2025-2026" },
  { id: 6, title: "Dark Horizons", category: "Photo", year: "2025-2026" },
  { id: 7, title: "Noir Fashion", category: "Photo", year: "2025-2026" },
  { id: 8, title: "Smoke Forms", category: "Photo", year: "2025-2026" },
  { id: 9, title: "City Rain", category: "Photo", year: "2025-2026" },
  { id: 10, title: "Liquid Metal", category: "Photo", year: "2025-2026" },
  { id: 11, title: "Dark Flora", category: "Photo", year: "2025-2026" },
  { id: 12, title: "Mystery Figure", category: "Photo", year: "2025-2026" },
  { id: 13, title: "Geometric Noir", category: "Photo", year: "2025-2026" },
  { id: 14, title: "Night Waves", category: "Photo", year: "2025-2026" },
  { id: 15, title: "Light Painting", category: "Photo", year: "2025-2026" },
];

export default function Work() {
  return (
    <div className="page-container">
      <h1 className="page-title">Selected Works</h1>
      <p className="page-subtitle">AI Art & Motion Design / 2025—2026</p>
      
      <div className="work-list">
        {projects.map((project, index) => (
          <div key={project.id} className="work-item">
            <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="work-title">{project.title}</h3>
            <span className="work-category">{project.category}</span>
            <span className="work-year">{project.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
