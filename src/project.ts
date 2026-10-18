/**
 * Dados editáveis da primeira produção.
 * Cada cena tem duração e narração correspondentes.
 * O Waze é utilizado apenas como assunto educativo, não como integração oficial.
 */
export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const scenes = [
  {
    id: 'abertura',
    seconds: 7,
    eyebrow: 'VOCÊ JÁ SE PERGUNTOU?',
    title: 'COMO O WAZE\nSABE QUE TEM\nTRÂNSITO?',
    caption: 'Parece mágica. Mas é tecnologia.',
    narration: 'Como o Waze sabe que tem trânsito, mesmo antes de você chegar lá?',
  },
  {
    id: 'sinais',
    seconds: 8,
    eyebrow: 'PASSO 01 · SINAIS',
    title: 'MILHARES\nDE MOVIMENTOS',
    caption: 'Os deslocamentos ajudam a estimar a velocidade das vias.',
    narration: 'O aplicativo usa informações de deslocamento de motoristas para perceber como o trânsito está fluindo.',
  },
  {
    id: 'transito',
    seconds: 9,
    eyebrow: 'PASSO 02 · VELOCIDADE',
    title: 'QUANDO OS\nCARROS PARAM',
    caption: 'Uma queda de velocidade pode indicar congestionamento.',
    narration: 'Quando muitos veículos ficam lentos em uma mesma região, o sistema pode identificar um congestionamento.',
  },
  {
    id: 'rota',
    seconds: 8,
    eyebrow: 'PASSO 03 · RECOMENDAÇÃO',
    title: 'UMA ROTA\nMELHOR',
    caption: 'As rotas podem ser recalculadas conforme as condições.',
    narration: 'Com essas informações e os avisos enviados pelos usuários, o aplicativo pode sugerir outros caminhos.',
  },
  {
    id: 'final',
    seconds: 8,
    eyebrow: 'AGORA VOCÊ SABE',
    title: 'NÃO É MÁGICA.\nSÃO DADOS!',
    caption: 'Tecnologia explicada de um jeito simples.',
    narration: 'Por isso, a rota pode mudar durante a viagem. Agora você já sabe como isso funciona!',
  },
] as const;

export const TOTAL_FRAMES = scenes.reduce(
  (sum, scene) => sum + scene.seconds * FPS,
  0,
);
