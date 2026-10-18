# Cloud Editor de Vídeo

Projeto inicial de vídeos educativos curtos com **motion graphics pseudo-3D**, criado para o fluxo **ChatGPT → GitHub → Claude Code → renderização**.

## O que já está incluído

- Primeiro vídeo demonstrativo: **Como o Waze sabe que tem trânsito?**
- Formato vertical **1080 × 1920**, **30 FPS**, **40 segundos**.
- Cinco cenas com movimento de carros, sinais, congestionamento, rota alternativa e conclusão.
- Fundo escuro, tipografia clara e realces em laranja; legendas grandes.
- Textos, narrativas e durações editáveis em `src/project.ts`.
- Prévia e exportação para MP4 usando Remotion. **Não contém ainda narração gravada nem música.**

> A cena representa conceitos de maneira educativa e simplificada, não o funcionamento interno oficial do Waze.
> As estradas e os carros usam animações 2D com perspectiva (*pseudo-3D*); 3D real é uma evolução planejada.

## Rodar no computador ou no Claude Code

Pré-requisitos: Node.js LTS e npm.

```bash
git clone https://github.com/lucasprojetoss/CLOUD-EDITOR-DE-VIDEO.git
cd CLOUD-EDITOR-DE-VIDEO
npm install
npm run dev
```

O Remotion Studio será aberto para você assistir às cenas e conferir as animações. Para renderizar um MP4:

```bash
npm run render
```

Saída prevista: `out/waze-explicativo.mp4`. Renderizar depende de um ambiente com Node.js e navegador compatível. Não foi executado na criação deste commit.

## Como trabalhar no Claude

1. Abra **Claude Code** e selecione/clone o repositório **lucasprojetoss/CLOUD-EDITOR-DE-VIDEO**.
2. Peça para ler `CLAUDE.md` e `docs/ROTEIRO-EXEMPLO.md`.
3. Peça para executar `npm install`, `npm run dev` e verificar a prévia.
4. Solicite ajustes; depois peça um commit e push para a branch do GitHub.
5. Para ler atualizações no chat normal do Claude por conector GitHub, use a opção **Sincronizar agora**. Esse conector não substitui um ambiente de edição.

## Arquivos importantes

- `CLAUDE.md`: instruções para o agente de desenvolvimento.
- `docs/ROTEIRO-EXEMPLO.md`: cenas, narração e direção.
- `docs/PLANO-DO-EDITOR.md`: metas para transformar o protótipo em editor de vídeos.
- `src/project.ts`: roteiro estruturado, títulos, legendas e tempo de cena.
- `src/Video.tsx`: animações visuais e composição.

## Limites da primeira versão

Esta entrega é um **protótipo de renderização** e uma base para construir o editor, **não** um serviço de geração automática de IA nem um editor visual finalizado. Não há upload, transcrição, TTS, geração 3D real, integração com Flow/PixVerse, publicação em redes sociais ou hospedagem configurados.

**Diretriz de custo:** priorizar ferramentas locais e gratuitas. APIs externas e plataformas de vídeo podem exigir conta, créditos, assinatura ou limites de uso.
