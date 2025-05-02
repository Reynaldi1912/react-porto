import React, { useState, useEffect, ReactNode } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Project.scss';

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  role: string;
  description: ReactNode;
  stack: string[];
  images: string[];
};

function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  stack,
  images,
  role
}: ProjectModalProps) {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true
  };

  return (
    <>
      {/* Modal overlay */}
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          
          {/* Sticky header */}
          <div className="modal-header">
            <button className="close-button" onClick={onClose}>×</button>
          </div>

          {/* Scrollable body */}
          <div className="modal-body">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="zoomable-image"
                    onClick={() => setZoomSrc(src)}
                  />
                </div>
              ))}
            </Slider>

              <h3 className='titleModal'>{title}</h3>
              <div className="stack-container">
                <span className="stack"><strong>Stack:</strong> {stack.join(', ')}</span>
                <br />
                <span className="stack"><strong>Role:</strong> {role}</span>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* Zoom modal */}
      {zoomSrc && (
        <div className="zoom-modal" onClick={() => setZoomSrc(null)}>
          <img src={zoomSrc} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </>
  );
}

export default ProjectModal;
