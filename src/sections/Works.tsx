import { useState } from 'react';

// ============================================
// WORKS DATA - 15 portfolio items
// ============================================

const videoData = [
  { 
    id: 1, 
    title: 'Noir Study I', 
    year: '2026', 
    image: './images/work-1.jpg', 
    videoPreview: './images/video-previews/video-1.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520410',
  },
  { 
    id: 2, 
    title: 'Vertical Dreams', 
    year: '2026', 
    image: './images/work-2.jpg', 
    videoPreview: './images/video-previews/video-2.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520503',
  },
  { 
    id: 3, 
    title: 'Light Trails', 
    year: '2026', 
    image: './images/work-3.jpg', 
    videoPreview: './images/video-previews/video-3.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520383',
  },
  { 
    id: 4, 
    title: 'Urban Shadows', 
    year: '2026', 
    image: './images/work-4.jpg', 
    videoPreview: './images/video-previews/video-4.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520461',
  },
  { 
    id: 5, 
    title: 'Midnight Objects', 
    year: '2026', 
    image: './images/work-5.jpg', 
    videoPreview: './images/video-previews/video-5.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520441',
  },
];

const photoData = [
  { id: 6, title: 'Dark Horizons', year: '2026', image: './images/work-6.jpg' },
  { id: 7, title: 'Noir Fashion', year: '2026', image: './images/work-7.jpg' },
  { id: 8, title: 'Smoke Forms', year: '2026', image: './images/work-8.jpg' },
  { id: 9, title: 'City Rain', year: '2026', image: './images/work-9.jpg' },
  { id: 10, title: 'Liquid Metal', year: '2026', image: './images/work-10.jpg' },
  { id: 11, title: 'Dark Flora', year: '2026', image: './images/work-11.jpg' },
  { id: 12, title: 'Mystery Figure', year: '2026', image: './images/work-12.jpg' },
  { id: 13, title: 'Geometric Noir', year: '2026', image: './images/work-13.jpg' },
  { id: 14, title: 'Night Waves', year: '2026', image: './images/work-14.jpg' },
  { id: 15, title: 'Light Painting', year: '2026', image: './images/work-15.jpg' },
];

export function Works() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (workId: number) => {
    setImageErrors(prev => new Set(prev).add(workId));
  };

  return (
    <section id="works" className="works-page">
      {/* VIDEO Section */}
      <div id="video-section" className="video-section">
        <div className="section-header-anchor">
          <h2 className="section-title">VIDEO</h2>
        </div>
        
        <div className="video-grid">
          {videoData.map((work) => (
            <VideoItem 
              key={work.id}
              work={work}
              onError={() => handleImageError(work.id)}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider">
        <span className="divider-line"></span>
      </div>

      {/* PHOTO Section */}
      <div id="photo-section" className="photo-section">
        <div className="section-header-anchor">
          <h2 className="section-title">PHOTO</h2>
        </div>
        
        <div className="photo-grid">
          {photoData.map((work) => (
            <PhotoItem
              key={work.id}
              work={work}
              onError={() => handleImageError(work.id)}
              onClick={() => setLightboxImage(work.image)}
              hasError={imageErrors.has(work.id)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="lightbox active"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Full size" />
        </div>
      )}
    </section>
  );
}

// Video Item Component
function VideoItem({ 
  work, 
  onError 
}: { 
  work: typeof videoData[0]; 
  onError: () => void;
}) {
  return (
    <a 
      href={work.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-item"
    >
      <div className="video-preview">
        <img 
          src={work.videoPreview || work.image}
          alt={work.title}
          className="video-thumb"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (img.src !== work.image) {
              img.src = work.image;
            } else {
              onError();
            }
          }}
          loading="lazy"
        />
        
        <div className="video-play-overlay">
          <div className="play-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

// Photo Item Component
function PhotoItem({ 
  work, 
  onError,
  onClick,
  hasError
}: { 
  work: typeof photoData[0]; 
  onError: () => void;
  onClick: () => void;
  hasError: boolean;
}) {
  return (
    <div 
      className="photo-item"
      onClick={onClick}
    >
      <img
        src={work.image}
        alt={work.title}
        className="photo-thumb"
        loading="lazy"
        onError={onError}
      />
      
      {hasError && (
        <div className="error-overlay">
          <p className="error-text">
            Failed to load<br/>work-{work.id}
          </p>
        </div>
      )}
    </div>
  );
}
