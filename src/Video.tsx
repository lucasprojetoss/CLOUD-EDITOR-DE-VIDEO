import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {FPS, scenes} from './project';

const C = {
  bg: '#060910',
  paper: '#F7F8FA',
  secondary: '#B7C2D6',
  orange: '#FF8A33',
  green: '#60E3A0',
  red: '#FF556B',
  blue: '#6FC8FF',
};

type Scene = (typeof scenes)[number];

const appear = (frame: number, start = 0, end = 18) =>
  interpolate(frame, [start, start + end], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

const Base: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill
    style={{
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 40%, #142034 0%, #080D17 55%, #03050B 100%)',
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: C.paper,
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 44,
        border: '2px solid rgba(255,255,255,0.06)',
        borderRadius: 32,
        pointerEvents: 'none',
      }}
    />
    {children}
  </AbsoluteFill>
);

const Header: React.FC<{
  scene: Scene;
  frame: number;
  highlight?: string;
}> = ({scene, frame, highlight}) => {
  const amount = appear(frame, 3, 20);
  return (
    <div
      style={{
        position: 'absolute',
        top: 136,
        left: 90,
        right: 80,
        opacity: amount,
        transform: `translateY(${(1 - amount) * 42}px)`,
      }}
    >
      <div
        style={{
          color: C.orange,
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: 5,
          marginBottom: 26,
        }}
      >
        {scene.eyebrow}
      </div>
      <div style={{fontSize: 86, lineHeight: 1.04, fontWeight: 950, letterSpacing: -3, whiteSpace: 'pre-line'}}>
        {scene.title.split('\n').map((line, index) => (
          <div key={index} style={{color: highlight && line.includes(highlight) ? C.orange : C.paper}}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC<{scene: Scene; frame: number; progress: number}> = ({
  scene,
  frame,
  progress,
}) => {
  const amount = appear(frame, 14, 20);
  return (
    <div
      style={{
        position: 'absolute',
        left: 92,
        right: 92,
        bottom: 148,
        opacity: amount,
        transform: `translateY(${(1 - amount) * 30}px)`,
      }}
    >
      <div style={{height: 3, background: 'rgba(255,255,255,0.20)', marginBottom: 28}}>
        <div style={{width: `${progress * 100}%`, height: '100%', background: C.orange}} />
      </div>
      <div
        style={{
          fontSize: 40,
          lineHeight: 1.26,
          fontWeight: 700,
          color: C.paper,
          background: 'rgba(4,9,19,0.72)',
          borderLeft: `7px solid ${C.orange}`,
          padding: '20px 26px',
          borderRadius: 12,
        }}
      >
        {scene.caption}
      </div>
    </div>
  );
};

const Car: React.FC<{
  x: number;
  y: number;
  color?: string;
  offset?: number;
  scale?: number;
}> = ({x, y, color = C.paper, offset = 0, scale = 1}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y + offset,
      width: 100,
      height: 170,
      transform: `scale(${scale})`,
      transformOrigin: 'center center',
      border: '7px solid rgba(0,0,0,0.42)',
      background: color,
      borderRadius: 30,
      boxShadow: '18px 22px 16px rgba(0,0,0,0.32), inset 0 10px 8px rgba(255,255,255,0.25)',
    }}
  >
    <div style={{position: 'absolute', top: 30, left: 10, right: 10, height: 46, borderRadius: 15, background: '#1A3043'}} />
    <div style={{position: 'absolute', bottom: 18, left: 15, right: 15, height: 7, borderRadius: 4, background: '#F4F6FF', opacity: 0.75}} />
  </div>
);

const Road: React.FC<{
  frame: number;
  jam?: boolean;
  signals?: boolean;
}> = ({frame, jam = false, signals = false}) => {
  const move = interpolate(frame, [0, 240], [140, -380], {
    extrapolateLeft: 'extend',
    extrapolateRight: 'extend',
  });
  const slow = jam ? 0.15 : 1;
  const cars = [
    {x: 120, y: 120, color: C.paper, delay: 0},
    {x: 360, y: -120, color: C.blue, delay: 30},
    {x: 605, y: 235, color: C.paper, delay: 65},
    {x: 120, y: 640, color: C.orange, delay: 80},
    {x: 365, y: 465, color: C.paper, delay: 50},
    {x: 605, y: -350, color: C.green, delay: 100},
  ];
  return (
    <div
      style={{
        position: 'absolute',
        top: 680,
        left: -250,
        width: 1380,
        height: 1050,
        transform: 'perspective(1100px) rotateX(48deg) rotateZ(-24deg)',
        transformStyle: 'preserve-3d',
        filter: 'drop-shadow(0 80px 55px rgba(0,0,0,0.48))',
      }}
    >
      <div style={{position: 'absolute', left: 0, top: 0, width: 900, height: 1200, background: '#253146', border: '16px solid #46536A', borderRadius: 26, boxShadow: '0 0 0 30px #131C2D'}}>
        {[300, 590].map((x) => (
          <div key={x} style={{position: 'absolute', left: x, top: -20, height: 1240, width: 10, background: 'repeating-linear-gradient(to bottom, #CED4E3 0px, #CED4E3 52px, transparent 52px, transparent 105px)', opacity: 0.5}} />
        ))}
        {jam && (
          <div style={{position: 'absolute', left: 0, top: 200, width: 880, height: 300, background: 'rgba(255,85,107,0.24)', borderTop: `9px solid ${C.red}`, borderBottom: `9px solid ${C.red}`, boxShadow: '0 0 75px rgba(255,85,107,0.5)'}} />
        )}
        {cars.map((car, i) => {
          const travel = Math.max(-40, Math.min(160, (frame - car.delay) * (jam ? 0.15 : 2.1))) * slow;
          return (
            <React.Fragment key={i}>
              <Car x={car.x} y={car.y} color={jam && i % 2 === 0 ? C.red : car.color} offset={travel + move * 0.1} scale={0.85} />
              {signals && (
                <div style={{
                  position: 'absolute',
                  left: car.x + 5,
                  top: car.y - 20 + travel,
                  width: 155 + Math.sin(frame / 9 + i) * 25,
                  height: 155 + Math.sin(frame / 9 + i) * 25,
                  border: `7px solid ${C.green}`,
                  borderRadius: '50%',
                  opacity: 0.65,
                  boxShadow: `0 0 30px ${C.green}88`,
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const Intro: React.FC<{scene: Scene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const scale = spring({frame, fps, config: {damping: 200, mass: 1}, durationInFrames: 38});
  return (
    <Base>
      <Road frame={frame} />
      <div style={{position: 'absolute', top: 850, left: 500, fontSize: 118, filter: 'drop-shadow(0 8px 14px rgba(0,0,0,.5))', transform: `scale(${0.4 + scale * 0.6})`}}>📍</div>
      <Header scene={scene} frame={frame} highlight="TRÂNSITO?" />
      <Footer scene={scene} frame={frame} progress={frame / (7 * FPS)} />
    </Base>
  );
};

const Signals: React.FC<{scene: Scene}> = ({scene}) => {
  const frame = useCurrentFrame();
  return (
    <Base>
      <Road frame={frame} signals />
      <div style={{position: 'absolute', left: 90, right: 90, top: 550, fontSize: 37, fontWeight: 800, color: C.green, textAlign: 'center', opacity: appear(frame, 20, 22)}}>
        GPS + MOVIMENTO + INFORMAÇÕES
      </div>
      <Header scene={scene} frame={frame} highlight="MOVIMENTOS" />
      <Footer scene={scene} frame={frame} progress={frame / (8 * FPS)} />
    </Base>
  );
};

const Traffic: React.FC<{scene: Scene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const pulse = 0.73 + 0.27 * Math.sin(frame / 6);
  return (
    <Base>
      <Road frame={frame} jam />
      <div style={{position: 'absolute', left: 150, right: 150, top: 615, borderRadius: 16, background: 'rgba(255,85,107,.18)', border: `4px solid ${C.red}`, padding: '18px 22px', textAlign: 'center', color: C.red, fontSize: 48, fontWeight: 950, opacity: appear(frame, 28, 18) * pulse}}>
        VELOCIDADE EM QUEDA
      </div>
      <Header scene={scene} frame={frame} highlight="PARAM" />
      <Footer scene={scene} frame={frame} progress={frame / (9 * FPS)} />
    </Base>
  );
};

const Route: React.FC<{scene: Scene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const dashOffset = -frame * 9;
  return (
    <Base>
      <div style={{position: 'absolute', top: 610, left: 50, width: 980, height: 900, opacity: appear(frame, 9, 30)}}>
        <svg width="980" height="900" viewBox="0 0 980 900">
          <path d="M100 740 L250 610 L340 650 L440 470 L595 490 L710 300 L845 185" fill="none" stroke="#334052" strokeWidth="76" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M100 740 L250 610 L340 650 L440 470 L595 490 L710 300 L845 185" fill="none" stroke={C.red} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30 24" />
          <path d="M100 740 L200 510 L360 430 L475 275 L720 230 L845 185" fill="none" stroke={C.blue} strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="37 22" strokeDashoffset={dashOffset} style={{filter: 'drop-shadow(0 0 20px #6FC8FF70)'}} />
          <circle cx="100" cy="740" r="32" fill={C.green} stroke="#fff" strokeWidth="7" />
          <circle cx="845" cy="185" r="36" fill={C.orange} stroke="#fff" strokeWidth="7" />
        </svg>
        <div style={{position: 'absolute', top: 455, left: 190, padding: '20px 32px', background: '#101B2E', border: `3px solid ${C.blue}`, color: C.blue, borderRadius: 16, fontSize: 36, fontWeight: 900}}>
          ROTA ALTERNATIVA
        </div>
      </div>
      <Header scene={scene} frame={frame} highlight="MELHOR" />
      <Footer scene={scene} frame={frame} progress={frame / (8 * FPS)} />
    </Base>
  );
};

const Final: React.FC<{scene: Scene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const grow = spring({frame, fps, config: {damping: 15, stiffness: 75}});
  return (
    <Base>
      <div style={{position: 'absolute', top: 670, left: 260, width: 560, height: 560, borderRadius: '50%', border: `9px solid ${C.orange}`, boxShadow: '0 0 100px rgba(255,138,51,.3)', transform: `scale(${grow})`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{fontSize: 240}}>🧠</div>
      </div>
      <div style={{position: 'absolute', top: 1320, left: 80, right: 80, fontSize: 47, textAlign: 'center', color: C.orange, fontWeight: 900, opacity: appear(frame, 26, 20)}}>
        CIÊNCIA • DADOS • TECNOLOGIA
      </div>
      <Header scene={scene} frame={frame} highlight="DADOS!" />
      <Footer scene={scene} frame={frame} progress={frame / (8 * FPS)} />
    </Base>
  );
};

const COMPONENTS = [Intro, Signals, Traffic, Route, Final] as const;

export const Video: React.FC = () => {
  let start = 0;
  return (
    <AbsoluteFill style={{backgroundColor: C.bg}}>
      {scenes.map((scene, index) => {
        const duration = scene.seconds * FPS;
        const from = start;
        start += duration;
        const Component = COMPONENTS[index];
        return (
          <Sequence key={scene.id} from={from} durationInFrames={duration}>
            <Component scene={scene} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
