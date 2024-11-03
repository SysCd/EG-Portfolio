import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Load only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Slim particle engine for lightweight
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      //background: { color: { value: "#ffffff" } }, // White background for contrast
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 3 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#000000" }, // Black particles for contrast
        links: {
          color: "#000000",
          distance: 120,
          enable: true,
          opacity: 0.2, // Faint lines for subtle effect
          width: 1,
        },
        move: {
          enable: true,
          outModes: { default: "out" },
          speed: 0.5,
        },
        number: { density: { enable: true, area: 900 }, value: 50 },
        opacity: {
          value: { min: 0.1, max: 0.2 }, // Low opacity to avoid distraction
        },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesBackground;
