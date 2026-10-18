# Plano do Cloud Editor de Vídeo

## Objetivo de produto
Um editor de vídeos curtos intuitivo: digitar uma ideia, receber um roteiro em cenas, visualizar timeline, trocar imagens/objetos/textos, adicionar voz/legendas/trilha, pré-visualizar e exportar vídeo MP4 vertical.

## Etapa 1 — Base funcional (neste repositório)
- [x] Estrutura React + Remotion.
- [x] Vídeo piloto com 5 cenas, 40s, 1080x1920.
- [x] Animações de movimento, sinais, trânsito e rota.
- [x] Textos e tempos editáveis via código.
- [ ] Validar instalação, TypeScript, preview e render no computador/Claude Code.
- [ ] Revisar acessibilidade visual e legibilidade em tela de celular.

## Etapa 2 — Editor intuitivo
- [ ] Tela de projetos (nome, duração, status).
- [ ] Campo 'Escreva o tema do vídeo' e roteiro manual/assistido.
- [ ] Cartões das cenas, timeline e prévia sincronizada.
- [ ] Edição de título, legendas, cores, tempo, câmera, transições e posições.
- [ ] Upload de mídias autorizadas; biblioteca com histórico.
- [ ] Salvar e carregar projetos sem perder versões.

## Etapa 3 — Áudio e acabamento
- [ ] Importar narração MP3/WAV.
- [ ] Locução/TTS opcional, com custo e limites mostrados claramente.
- [ ] Gerar/alinha legendas por palavra a partir do áudio efetivamente usado.
- [ ] Música, efeitos sonoros com licença adequada, ducking e controle de níveis.
- [ ] Transições, cortes, zooms e câmera melhorados.

## Etapa 4 — 3D e IA
- [ ] Migrar cenas selecionadas para Three.js / React Three Fiber quando necessário.
- [ ] Permitir gerar cenas específicas com Flow/PixVerse ou outros serviços, mediante integração real e respeitando condições de uso.
- [ ] Prever substituição e fallback: cenas SVG/CSS gratuitas quando ferramentas externas não estiverem disponíveis.
- [ ] Assistência de IA para roteiro, storyboard e sugestão de efeitos, sem obrigar API paga.

## Etapa 5 — Exportação e operação
- [ ] Exportação MP4 1080x1920 com progresso e mensagens de erro.
- [ ] Controle de vídeos curtos em lote quando houver infraestrutura.
- [ ] Pacote desktop futuro, se fizer sentido; preservar acesso ao projeto no GitHub.
- [ ] Publicação externa somente após autorização e integrações oficiais verificadas.

## Arquitetura e restrições
- Fonte de verdade: GitHub. Claude Code pode criar commits/pull requests autorizados.
- Remotion renderiza programaticamente no ambiente Node/Chromium. Hospedar um painel estático não cria automaticamente processamento de MP4 no servidor.
- Guardar tokens somente em variáveis/segredos do servidor; nunca commitá-los.
- Custos: motor local sem cobrança de API por cena; processamento, servidor, modelo generativo e contas externas podem ter custos.
- Distinguir sempre 'implementado', 'parcial' e 'planejado'.
