# Briefing: descobrir o que a pessoa quer mostrar

Antes de escolher público, tipo ou modelo de slide, a IA precisa descobrir **a mensagem central** e **o nível de exposição**. Este roteiro é o "passo 0" do fluxo em [`como-usar.md`](como-usar.md). Faça as perguntas em ordem, mas pule as que o pedido já responde. Nunca faça mais de 3 ou 4 perguntas por vez; se o usuário tiver pressa, use as premissas padrão e declare-as.

## Bloco 1 - O ponto-chave (obrigatório)

| # | Pergunta | Por que importa | Se não responder |
|---|---|---|---|
| 1 | **Se o público esquecer tudo e lembrar de uma frase, qual é?** | Vira a mensagem central e o headline do sumário executivo | Extraia do material fornecido e proponha uma frase para confirmação |
| 2 | **O que você quer que aconteça depois da apresentação?** (aprovar, decidir, alinhar, informar, comprar, mudar comportamento) | Define se o deck termina em pedido, plano de ação ou só próximos passos | Assuma "informar e alinhar" e avise |
| 3 | **Qual a notícia principal: boa, ruim ou mista?** | Má notícia exige vir cedo e acompanhada do plano; boa notícia pede reconhecimento | Infira dos dados |
| 4 | **Que dados ou evidências você tem?** (planilhas, relatórios, números de cabeça) | Determina quais modelos de slide são viáveis (gráfico, tabela, KPI) e o que precisa ser marcado como estimativa | Use placeholders claramente marcados como `[dado a confirmar]` |

Técnica para ajudar quem não sabe o ponto-chave: peça para completar "Estou apresentando isso porque ___ e, ao final, quero que vocês ___". Se surgirem dois "porquês" diferentes, são dois decks (ou um deck com anexo).

## Bloco 2 - Público e contexto

| # | Pergunta | Mapeia para |
|---|---|---|
| 5 | **Quem vai assistir e quem decide?** (cargo, área) | Nível: estratégico / tático / operacional / externo, ver `02-publicos/` |
| 6 | **Como é o decisor?** (direto e impaciente; entusiasmado e falante; calmo e cuidadoso com pessoas; detalhista e cético) | Estilo: vermelho / amarelo / verde / azul, ver `02-publicos/estilos-de-comunicacao.md` |
| 7 | **Quanto tempo tem e em que formato?** (5 min em pé, 30 min em sala, enviado por e-mail, TV na fábrica) | Nº de slides, densidade, fonte mínima, necessidade de sumário para leitura sem apresentador |
| 8 | **É recorrente?** (semanal, mensal) ou único? | Recorrente pede layout fixo e comparação com o período anterior |

## Bloco 3 - Nível de exposição (obrigatório)

A mesma informação pode ser adequada para o próprio time e inadequada para um cliente. Pergunte: **"Quem mais pode ver esse deck depois?"** e classifique:

| Nível | Quem vê | O que pode entrar | O que fica de fora ou é suavizado |
|---|---|---|---|
| **Interno (própria área ou liderança direta)** | Seu time, seu gestor, diretoria da sua área | Tudo: riscos crus, erros, causas raiz com nomes de processos, números preliminares, opinião sobre fornecedores, conflitos de prioridade | Dados pessoais sensíveis e avaliação individual (mesmo internamente, use cargo em vez de nome quando o tema é desempenho) |
| **Interáreas (outras áreas, comitês, all-hands)** | Gerentes de outras áreas, RH, financeiro, toda a empresa | Resultados, desvios com causa e plano, riscos gerenciados, pedidos claros de apoio | Fraquezas sem plano de ação, culpa atribuída a outra área, números não conciliados com a área dona do dado, detalhes de negociação com terceiros, informação de pessoas (salários, desligamentos, avaliações) |
| **Externo (clientes, investidores, parceiros, órgãos, imprensa)** | Qualquer pessoa fora da empresa | O que a empresa autoriza publicar: resultados aprovados, cases com autorização, roadmap público, escopo e preço da proposta | Margens e custos internos, nomes de outros clientes sem autorização, riscos operacionais internos, problemas em andamento, metas não atingidas (a menos que já públicas), dados de fornecedores, qualquer informação regulada (financeira não divulgada, dados pessoais) |

### Regras por nível

**Interno**
- Seja completo e franco: o deck existe para decidir e corrigir. Riscos em vermelho de verdade.
- Causa raiz explícita, mesmo quando é falha da própria área.
- Números preliminares aceitos, desde que marcados ("prévia", "estimativa").
- Rodapé: "Uso interno - <área>".

**Interáreas**
- Toda fraqueza acompanhada do plano e do dono ("estamos 10% abaixo e faremos X até Y").
- Causa raiz descrita por processo, não por área culpada ("atraso na homologação" em vez de "Compras atrasou").
- Números conciliados com a área dona (financeiro para R$, RH para pessoas, comercial para vendas).
- Sem informação de pessoas identificáveis; ranking só por faixa ou anonimizado.
- Rodapé: "Uso interno" ou "Confidencial - <empresa>".

Rodapé automático: quando `meta.confidentiality` não é informado, o gerador usa "Uso interno" para `interno`/`interareas` e "Confidencial" para `externo`.

**Externo**
- Passe cada slide pelo filtro: "se isso vazasse, prejudicaria a empresa, um cliente, um fornecedor ou uma pessoa?" Se sim, remova ou generalize.
- Resultados apenas os já divulgados ou autorizados pela liderança/jurídico; sem margem, custo unitário ou preço de outros clientes.
- Riscos só os que afetam o público e já têm mitigação apresentável.
- Cases e logos de terceiros com autorização por escrito.
- Aviso de confidencialidade quando for proposta ou material sob NDA; validade do documento.
- Rodapé: "Confidencial - preparado para <cliente>" ou sem marcação quando for material público.

### Perguntas de checagem antes de fechar o nível
1. Esse deck será encaminhado a alguém que não está na reunião? (Se sim, suba um nível de proteção.)
2. Há algum número aqui que outra área ou a diretoria ainda não validou?
3. Há nomes de pessoas, clientes ou fornecedores? Eles autorizaram?
4. Há algo que o jurídico, RI (relações com investidores) ou compliance precisaria aprovar?

## Bloco 4 - Restrições práticas
| # | Pergunta | Uso |
|---|---|---|
| 9 | **Existe logotipo?** Envie o PNG com fundo transparente (e a versão branca para fundo escuro). Sem arquivo, qual o nome a usar como marca-texto? | `meta.logo`, `meta.logo_light`, `meta.brand`; regra em `05-artefatos-visuais/logotipo-e-marca.md` |
| 9b | Cores e fontes da marca, ou template `.pptx` obrigatório? | Paleta JSON em `05-artefatos-visuais/paletas/`; `meta.palette` ou `--template` |
| 10 | Idioma e unidade monetária? | Formatação de números, siglas |
| 11 | Há slides ou decks anteriores para manter consistência? | Reaproveitar layout fixo (recorrentes) |
| 12 | Data-base dos dados e prazo de entrega? | Rodapé, capa, priorização |

## Saída do briefing
Ao final, a IA deve produzir e confirmar com o usuário um **resumo de briefing** de 6 linhas antes de montar o deck:

```
Mensagem central: <uma frase>
Objetivo: <decidir / aprovar / alinhar / informar / vender>
Público: <nível> | Estilo do decisor: <cor ou misto>
Exposição: <interno / interáreas / externo>
Formato: <duração, apresentado ou lido, recorrente ou único>
Tipo de apresentação: <arquivo em 03-tipos-de-apresentacao/>
```

Identidade: <paleta | logotipo (arquivo ou marca-texto) | fontes>
```

Esses campos correspondem a `meta.audience`, `meta.communication_style`, `meta.exposure`, `meta.type`, `meta.key_message`, `meta.palette`, `meta.logo`, `meta.brand` na spec (`schemas/deck-spec.schema.json`).

```

## Premissas padrão (quando o usuário não responde)
- Público: tático. Estilo: misto. Exposição: **interáreas** (nível intermediário de proteção; é o erro menos custoso).
- Objetivo: informar e alinhar, terminando em próximos passos.
- Formato: 20 a 30 min apresentado, 10 a 15 slides.
Declare as premissas no resumo de briefing e no rodapé das notas do slide 1.
