# Princípios de design para slides

## 1. Uma ideia por slide
Cada slide responde a uma única pergunta. Se o título precisa de "e", divida.

## 2. Título é a conclusão
- Ruim: "Resultados de vendas"
- Bom: "Vendas cresceram 12% no Q3, acima da meta de 8%"
- Tamanho: máximo 2 linhas (cerca de 90 caracteres em 28 pt).
- Lendo apenas os títulos em sequência, a história deve se sustentar.

## 3. Hierarquia visual
Ordem de leitura (ocidental): canto superior esquerdo, depois direita, depois baixo. Coloque na ordem:
1. Título (conclusão)
2. Elemento principal (gráfico, número grande, imagem)
3. Suporte (bullets, tabela)
4. Rodapé (fonte, nota, numeração)

Use no máximo **3 níveis** de tamanho de fonte por slide.

## 4. Espaço em branco
Margens mínimas de 0,5 pol. em todos os lados. Espaço vazio não é desperdício; é o que separa e destaca. Slide "cheio" = slide ilegível.

## 5. Contraste e cor com significado
- Uma única **cor de destaque** para o que importa; o resto em neutros.
- Cores semânticas fixas: verde = bom/no alvo, amarelo = atenção, vermelho = crítico. Nunca use vermelho decorativamente.
- Contraste mínimo texto/fundo: 4,5:1 (texto normal), 3:1 (títulos de 24 pt ou mais).

## 6. Alinhamento e grid
Todos os elementos alinhados a um grid (ver `grid-e-layout.md`). Bordas de caixas, gráficos e imagens alinhadas entre si e entre slides consecutivos (o título não pode "pular" de posição).

## 7. Texto mínimo
- Bullets: máximo 6 por slide, máximo 2 linhas cada, começam com verbo ou substantivo forte.
- Sem sub-sub-bullets.
- Frases completas só no título e no sumário executivo.
- Slides de leitura (enviados por e-mail sem apresentador) podem ter mais texto, mas então use o modelo `sumario-executivo` e caixas de destaque, não parágrafos.

## 8. Dados com contexto
Todo número precisa de: unidade, período, comparação (meta, período anterior ou benchmark) e fonte. Um número solto não é informação.

## 9. Consistência
Mesma paleta, mesma família tipográfica, mesmo posicionamento de título/rodapé, mesmo estilo de gráfico ao longo de todo o deck.

## 10. Decoração zero
Ícones, imagens, formas e animações só entram se carregam informação ou orientam a leitura. Sem clip-art, sem gradientes decorativos, sem sombras pesadas, sem transições.

## Anti-padrões frequentes
| Anti-padrão | Correção |
|---|---|
| Parede de texto | Extrair a conclusão para o título, restante em 3 a 5 bullets ou em nota do apresentador |
| Gráfico com 8 séries | Destacar 1 ou 2 séries em cor, demais em cinza; ou dividir em slides |
| Tabela de 15 linhas em 10 pt | Mostrar top 5 + "outros", tabela completa em anexo |
| Título genérico ("Overview") | Reescrever como conclusão |
| Cores diferentes em cada slide | Fixar paleta no início |
| Logotipo gigante em todo slide | Logo pequeno no rodapé ou só na capa |
| Números sem comparação | Adicionar delta vs. meta/período anterior |
