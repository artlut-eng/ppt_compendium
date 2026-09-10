# Template corporativo (.pptx / .potx)

Quando a empresa tem um template obrigatório, o deck deve nascer dele: mestre, layouts, tema de cores e fontes, logotipo e rodapé já vêm do arquivo. O gerador passa a **preencher layouts** em vez de desenhar identidade.

## Como usar
```json
{ "meta": {
    "title": "...", "template": "caminho/template.pptx", "template_branding": true,
    "template_layouts": {"cover": "Capa", "section": "Divisória", "content": "Somente título", "blank": "Em branco"} } }
```
ou `python build_from_spec.py spec.json saida.pptx --template template.pptx`.

| Opção | Efeito |
|---|---|
| `template` | Abre o arquivo, remove slides existentes, usa seus layouts. Sem `template_branding`, o gerador ainda desenha fundos, cabeçalho e logo (útil quando o template só define tamanho e fontes). |
| `template_branding: true` | O template já traz identidade: o gerador **não** desenha fundos de capa/seção, cabeçalho "marca | deck", logo nem marca-texto; título usa o estilo do placeholder do layout; capa, seções e encerramento preenchem os placeholders do layout de título/seção. Rodapé do gerador continua com fonte dos dados e número de página (remova o número se o mestre já numera). |
| `template_layouts` | Mapeia por nome (parcial, sem distinção de maiúsculas) ou índice. Sem mapeamento, o gerador procura nomes usuais em português e inglês (Title Slide/Capa, Section Header/Seção, Title Only/Somente título, Blank/Em branco) e cai nos índices padrão 0, 2, 5, 6. |

## Preparar o template
1. Salve o template corporativo como `.pptx` (o `.potx` também abre, mas `.pptx` evita problemas de tipo de conteúdo).
2. Confirme que existem os quatro layouts: capa (título + subtítulo), divisória de seção, somente título e em branco. Renomeie-os no PowerPoint (Exibir > Slide mestre) se os nomes forem confusos.
3. Confira o tamanho: 16:9 (13,333 × 7,5 pol.). Em 4:3, todas as coordenadas do compêndio ficam erradas; peça a versão 16:9 ou aceite a margem direita cortada.
4. Registre a paleta do template em `05-artefatos-visuais/paletas/<empresa>.json` com as cores do tema, para que gráficos, KPIs e callouts sigam a mesma identidade.
5. Remova slides de exemplo do arquivo (o gerador também remove, mas evita surpresas).
6. Teste: `python build_from_spec.py schemas/exemplos/todos-os-modelos.json teste.pptx --template template.pptx` e renderize.

## Limitações
- Placeholders de corpo dos layouts não são usados (o gerador desenha o conteúdo nas coordenadas do grid); só título, subtítulo e o placeholder de corpo da capa/seção são preenchidos.
- Se o mestre tem elementos na zona de conteúdo (faixas laterais grandes, imagens de fundo), o grid pode colidir; ajuste `MARGIN`/`CONTENT_W` ou peça um layout limpo.
- Fontes do tema só aparecem se estiverem instaladas na máquina que abre o arquivo.
- Numeração: se o mestre numera slides, o rodapé do gerador duplica; nesse caso, ajuste `_footer` ou remova o número no template.

## Exemplo
`05-artefatos-visuais/template-exemplo.pptx` é um template mínimo (faixa superior roxa, marca-texto, rodapé e títulos em Georgia) usado para testar a integração. Spec de teste: `schemas/exemplos/template-exemplo.json`.
