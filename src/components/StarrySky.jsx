import React from 'react';
import Particles from 'react-particles-js';

const StarrySky = () => {
    return (
        <Particles
        width={document.width}
        height={document.height}
        params={{
            particles: {
              number: { value: 64, density: { enable: true, value_area: 900 } },
              color: { value: '#fff' },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
              },
              size: {
                value: 2,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: true,
                distance: 50,
                color: '#fff',
                opacity: 0.42,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.12,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
            retina_detect: true,
          }}
          className='starsParticles'
      />
    );
}

export default StarrySky;