// Video.tsx - Страница с видео-работами
const videos = [
  {
    id: 1,
    title: "Noir Study I",
    year: "2025-2026",
    vimeoUrl: "https://player.vimeo.com/video/1160520410",
    thumbnail: "./images/work-1.jpg",
    duration: "0:45"
  },
  {
    id: 2,
    title: "Vertical Dreams",
    year: "2025-2026",
    vimeoUrl: "https://player.vimeo.com/video/1160520503",
    thumbnail: "./images/work-2.jpg",
    duration: "0:52"
  },
  {
    id: 3,
    title: "Light Trails",
    year: "2025-2026",
    vimeoUrl: "https://player.vimeo.com/video/1160520383",
    thumbnail: "./images/work-3.jpg",
    duration: "0:38"
  },
  {
    id: 4,
    title: "Urban Shadows",
    year: "2025-2026",
    vimeoUrl: "https://player.vimeo.com/video/1160520461",
    thumbnail: "./images/work-4.jpg",
    duration: "1:12"
  },
  {
    id: 5,
    title: "Midnight Objects",
    year: "2025-2026",
    vimeoUrl: "https://player.vimeo.com/video/1160520441",
    thumbnail: "./images/work-5.jpg",
    duration: "0:55"
  },
];

export default function Video() {
  return (
    <div className="page-container">
      <h1 className="page-title">Video Works</h1>
      
      <div className="video-list">
        {videos.map((video, index) => (
          <a 
            key={video.id}
            href={video.vimeoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="video-item"
          >
            <span className="video-index">{String(index + 1).padStart(2, '0')}</span>
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-icon">▶</div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <span className="video-meta">{video.year} — {video.duration}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
