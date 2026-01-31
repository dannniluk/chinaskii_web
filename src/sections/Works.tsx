import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// ============================================
// WORKS DATA - 15 portfolio items
// ============================================

const worksData = [
  { 
    id: 1, 
    title: 'Noir Study I', 
    year: '2026', 
    category: 'AI ART', 
    type: 'video',
    image: './images/work-1.jpg', 
    videoPreview: './images/video-preview-1.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520410',
  },
  { 
    id: 2, 
    title: 'Vertical Dreams', 
    year: '2026', 
    category: 'VIDEO', 
    type: 'video',
    image: './images/work-2.jpg', 
    videoPreview: './images/video-preview-2.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520503',
  },
  { 
    id: 3, 
    title: 'Light Trails', 
    year: '2026', 
    category: 'AI ART', 
    type: 'video',
    image: './images/work-3.jpg', 
    videoPreview: './images/video-preview-3.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520383',
  },
  { 
    id: 4, 
    title: 'Urban Shadows', 
    year: '2026', 
    category: 'PHOTO', 
    type: 'video',
    image: './images/work-4.jpg', 
    videoPreview: './images/video-preview-4.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520461',
  },
  { 
    id: 5, 
    title: 'Midnight Objects', 
    year: '2026', 
    category: 'AI ART', 
    type: 'video',
    image: './images/work-5.jpg', 
    videoPreview: './images/video-preview-5.jpg',
    videoUrl: 'https://player.vimeo.com/video/1160520441',
  },
  { 
    id: 6, 
    title: 'Dark Horizons', 
    year: '2026', 
    category: 'VIDEO', 
    type: 'static',
    image: './images/work-6.jpg',
  },
  { 
    id: 7, 
    title: 'Noir Fashion', 
    year: '2026', 
    category: 'AI ART', 
    type: 'static',
    image: './images/work-7.jpg',
  },
  { 
    id: 8, 
    title: 'Smoke Forms', 
    year: '2026', 
    category: 'VIDEO', 
    type: 'static',
    image: './images/work-8.jpg',
  },
  { 
    id: 9, 
    title: 'City Rain', 
    year: '2026', 
    category: 'PHOTO', 
    type: 'static',
    image: './images/work-9.jpg',
  },
  { 
    id: 10, 
    title: 'Liquid Metal', 
    year: '2026', 
    category: 'AI ART', 
    type: 'static',
    image: './images/work-10.jpg',
  },
  { 
    id: 11, 
    title: 'Dark Flora', 
    year: '2026', 
    category: 'AI ART', 
    type: 'static',
    image: './images/work-11.jpg',
  },
  { 
    id: 12, 
    title: 'Mystery Figure', 
    year: '2026', 
    category: 'VIDEO', 
    type: 'static',
    image: './images/work-12.jpg',
  },
  { 
    id: 13, 
    title: 'Geometric Noir', 
    year: '2026', 
    category: 'AI ART', 
    type: 'static',
    image: './images/work-13.jpg',
  },
  { 
    id: 14, 
    title: 'Night Waves', 
    year: '2026', 
    category: 'PHOTO', 
    type: 'static',
    image: './images/work-14.jpg',
  },
  { 
    id: 15, 
    title: 'Light Painting', 
    year: '2026', 
    category: 'VIDEO', 
    type: 'static',
    image: './images/work-15.jpg',
  },
];

type FilterCategory = 'ALL' | 'VIDEO' | 'AI ART' | 'PHOTO';

export function Works() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollRef = useRef(0);
  const heroHeightRef = useRef(0);
  const { t } = useLanguage();

  const filters: FilterCategory[] = ['ALL', 'VIDEO', 'AI ART', 'PHOTO'];

  const filteredWorks = activeFilter === 'ALL' 
    ? worksData 
    : worksData.filter(work => work.category === activeFilter);

  // Smart header with debounce and threshold
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      heroHeightRef.current = hero.offsetHeight;
    }

    let ticking = false;
    const scrollThreshold = 150;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.pageYOffset;
          const heroHeight = heroHeightRef.current;
          
          // Show header when in hero section
          if (currentScroll < heroHeight + 100) {
            setHeaderHidden(false);
            lastScrollRef.current = currentScroll;
            ticking = false;
            return;
          }
          
          // Only process if scroll delta > threshold
          if (Math.abs(currentScroll - lastScrollRef.current) <= scrollThreshold) {
            ticking = false;
            return;
          }
          
          if (currentScroll > lastScrollRef.current) {
            // Scroll down - hide
            setHeaderHidden(true);
          } else {
            // Scroll up - show
            setHeaderHidden(false);
          }
          
          lastScrollRef.current = currentScroll <= 0 ? 0 : currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle image load error
  const handleImageError = (workId: number) => {
    setImageErrors(prev => new Set(prev).add(workId));
  };

  // Get filter label
  const getFilterLabel = (filter: FilterCategory): string => {
    const labels: Record<FilterCategory, string> = {
      'ALL': t('works.filters.all'),
      'VIDEO': t('works.filters.motion'),
      'AI ART': 'AI ART',
      'PHOTO': t('works.filters.static'),
    };
    return labels[filter];
  };

  return (
    <section id="works" className="gallery-section">
      {/* Sticky Gallery Header */}
      <div className={`gallery-header ${headerHidden ? 'hidden' : ''}`}>
        <h2 className="gallery-title">{t('works.title')}</h2>
        
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`gallery-filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid - Unified for all types */}
      <div className="gallery-grid-container">
        {filteredWorks.map((work) => (
          work.type === 'video' ? (
            <VideoItem 
              key={work.id}
              work={work}
              onError={() => handleImageError(work.id)}
            />
          ) : (
            <StaticItem
              key={work.id}
              work={work}
              onError={() => handleImageError(work.id)}
              onClick={() => setLightboxImage(work.image)}
              hasError={imageErrors.has(work.id)}
            />
          )
        ))}
      </div>

      {/* Empty State */}
      {filteredWorks.length === 0 && (
        <div className="flex items-center justify-center py-20">
          <p className="text-[#9A9894] font-body text-sm">
            {t('works.empty')}
          </p>
        </div>
      )}

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

// Video Item Component with badge and play overlay
function VideoItem({ 
  work, 
  onError 
}: { 
  work: typeof worksData[0]; 
  onError: () => void;
}) {
  return (
    <a 
      href={work.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-gallery-item"
    >
      <div className="video-gallery-preview">
        {/* Try video preview first, fall back to main image */}
        <img 
          src={work.videoPreview || work.image}
          alt={work.title}
          className="video-gallery-thumb"
          onError={(e) => {
            // If video preview fails, use main image
            const img = e.target as HTMLImageElement;
            if (img.src !== work.image) {
              img.src = work.image;
            } else {
              onError();
            }
          }}
          loading="lazy"
        />
        
        {/* Video Badge */}
        <div className="video-badge">VIDEO</div>
        
        {/* Play Overlay */}
        <div className="play-overlay">
          <div className="play-icon-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

// Static Item Component
function StaticItem({ 
  work, 
  onError,
  onClick,
  hasError
}: { 
  work: typeof worksData[0]; 
  onError: () => void;
  onClick: () => void;
  hasError: boolean;
}) {
  return (
    <div 
      className="static-gallery-item"
      onClick={onClick}
    >
      <img
        src={work.image}
        alt={work.title}
        className="static-gallery-thumb"
        loading="lazy"
        onError={onError}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
          <p className="text-red-500 text-xs text-center p-4">
            Failed to load<br/>work-{work.id}
          </p>
        </div>
      )}
    </div>
  );
}
