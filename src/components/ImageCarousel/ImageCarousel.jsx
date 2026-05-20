import { useState } from 'react';

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '80%'}}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.35s ease',
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className='img-carousel'
            alt={`skill ${i + 1}`}
            style={{ minWidth: '100%', position: 'center' }}
          />
        ))}
      </div>

      <button onClick={prev} style={btnStyle('left')}>
        ‹
      </button>
      <button onClick={next} style={btnStyle('right')}>
        ›
      </button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
          marginTop: 8,
        }}
      >
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              cursor: 'pointer',
              background: i === current ? '#888' : '#ccc',
            }}
          />
        ))}
      </div>
    </div>
  );
}

const btnStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [side]: 10,
  background: 'white',
  border: '1px solid #ddd',
  borderRadius: '50%',
  width: 32,
  height: 32,
  cursor: 'pointer',
  fontSize: 18,
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default ImageCarousel;
