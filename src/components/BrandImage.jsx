import React, { useState } from 'react';

/**
 * Imagen con placeholder de marca mientras carga o si falla.
 * Así la página se ve bien mientras reemplazas fotos de muestra.
 */
const BrandImage = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  label = '',
  tone = 'cream',
}) => {
  const [status, setStatus] = useState(src ? 'loading' : 'error');
  const showPlaceholder = status !== 'loaded';

  const tones = {
    cream: 'from-[#2B2B2B] via-[#3d3428] to-[#1B5E20]',
    green: 'from-[#1B5E20] via-[#2E7D32] to-[#2B2B2B]',
    orange: 'from-[#6D4C2F] via-[#F26522] to-[#FBB040]',
    dark: 'from-[#14120e] via-[#2B2B2B] to-[#1B5E20]',
  };

  return (
    <div className={`relative h-full w-full overflow-hidden bg-rozo-dark ${className}`}>
      {showPlaceholder && (
        <div
          className={`absolute inset-0 z-[1] flex flex-col items-center justify-center bg-gradient-to-br ${tones[tone] || tones.cream}`}
          aria-hidden={status === 'loaded'}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px, 36px 36px',
          }} />
          <img
            src="/logopng.png"
            alt=""
            className="relative z-[1] h-[42%] max-h-28 w-auto max-w-[70%] object-contain opacity-90 drop-shadow-md"
            draggable={false}
          />
          {label ? (
            <p className="relative z-[1] mt-3 max-w-[85%] text-center font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
              {label}
            </p>
          ) : null}
          {status === 'loading' && (
            <span className="absolute bottom-3 right-3 h-1.5 w-1.5 animate-pulse rounded-full bg-rozo-amber" />
          )}
        </div>
      )}

      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`brand-image-photo h-full w-full object-cover transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
};

export default BrandImage;
