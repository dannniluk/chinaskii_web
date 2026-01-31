// Gallery.tsx - Страница с фото-галереей
const photos = [
  { id: 6, src: "./images/work-6.jpg", title: "Dark Horizons" },
  { id: 7, src: "./images/work-7.jpg", title: "Noir Fashion" },
  { id: 8, src: "./images/work-8.jpg", title: "Smoke Forms" },
  { id: 9, src: "./images/work-9.jpg", title: "City Rain" },
  { id: 10, src: "./images/work-10.jpg", title: "Liquid Metal" },
  { id: 11, src: "./images/work-11.jpg", title: "Dark Flora" },
  { id: 12, src: "./images/work-12.jpg", title: "Mystery Figure" },
  { id: 13, src: "./images/work-13.jpg", title: "Geometric Noir" },
  { id: 14, src: "./images/work-14.jpg", title: "Night Waves" },
  { id: 15, src: "./images/work-15.jpg", title: "Light Painting" },
];

export default function Gallery() {
  return (
    <div className="page-container">
      <h1 className="page-title">Photo Gallery</h1>
      <p className="page-subtitle">Selected stills 2025—2026</p>
      
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src} alt={photo.title} loading="lazy" />

          </div>
        ))}
      </div>
    </div>
  );
}
