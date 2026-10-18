# Instruções do projeto para Claude Code

## Missão
Continuar o editor de vídeos educativos curtos. O usuário quer criar vídeos originais de cerca de 40 a 50 segundos, formato vertical 9:16, para TikTok, Reels e Shorts, com motion graphics de alto nível, animação pseudo-3D/3D, narração, legendas sincronizadas e transições. Não copiar vídeos de terceiros: usar referências apenas como linguagem visual.

## Fluxo acordado
ChatGPT define escopo, roteiro e código → GitHub guarda as versões → Claude Code abre o repositório, executa, aprimora e pode fazer commits/push autorizados. A integração de repositórios no chat normal do Claude é primariamente de leitura e pode exigir sincronização manual. NUNCA afirmar que um vídeo foi renderizado, uma IA externa executada ou uma integração ficou ativa sem testes.

## Direção visual aprovada
- Vídeo 1080x1920, 30 fps, 40–50s no início.
- Linguagem de vídeos educativos explicativos, estilo motion graphics 3D com elementos simplificados.
- Fundo preto/azul bem escuro, tipografia branca, detalhes laranja, ênfase gráfica moderada, look profissional.
- Zooms e closes de objetos, movimentos de câmera suaves, ritmo ágil, texto realmente visível na tela.
- Narração em português brasileiro; legendas coerentes com o áudio quando este existir.
- Exemplo piloto: 'Como o Waze sabe quando existe trânsito?' com estrada isolada, carrinhos geométricos, indicadores de localização/sinais, trânsito em vermelho e rota alternativa.
- Explicações factualmente cuidadosas, sem alegar mecanismos proprietários não confirmados.

## Estado atual
- Projeto base Remotion criado em src/.
- `npm run dev` para preview e `npm run render` para exportação.
- `src/project.ts` concentra texto e tempos.
- A animação inicial é pseudo-3D em HTML/CSS/SVG, não Three.js.
- Não há música, voz, legendas por palavra nem gerador de vídeo por IA integrados.

## Próxima tarefa ao abrir no Claude Code
1. Ler `README.md`, `docs/PLANO-DO-EDITOR.md` e `docs/ROTEIRO-EXEMPLO.md`.
2. Executar `npm install`, `npx tsc --noEmit` e `npm run dev`, corrigindo erros verificáveis.
3. Produzir render de teste com `npm run render`; conferir enquadramento, textos, duração e transições.
4. Se necessário, refinar a direção visual mantendo conteúdo e cores aprovadas.
5. Criar uma interface intuitiva para editar cenas, trocar roteiro, texto, cores, duração e mídias sem editar TS manualmente. Planejar essa evolução, sem fingir que já está pronta.
6. Implementar suporte opcional a áudio local, TTS e legendas com sincronização efetiva; nunca colocar chaves de API no frontend ou no Git.
7. Somente após os testes, registrar commits claros no GitHub e informar o que está funcional versus planejado.

## Prompt curto de continuidade
'Abra este repositório como workspace de desenvolvimento. Leia CLAUDE.md e os docs. Primeiro instale dependências, verifique compilação, abra a prévia do vídeo piloto e corrija problemas. Depois construa a primeira interface intuitiva de edição de cenas mantendo o visual institucional escuro e o formato 9:16. Faça alterações no código, teste e mostre resultados reais. Evite serviços pagos.'

## Regras
- Prioridade para opções gratuitas, sem promessas de gratuidades ilimitadas.
- Não pedir novamente decisões de estilo já registradas acima.
- Não sobrescrever configurações ou vídeos do usuário sem necessidade.
- Não criar integração falsa com plataformas externas.
- Nunca publicar automaticamente redes sociais sem autorização explícita.
