# Treinamento / capacitação

## Objetivo
Ensinar um procedimento, sistema, conceito ou norma para que o público consiga **executar** algo depois. Inclui onboarding, treinamento de processo, uso de ferramenta, segurança, compliance.

## Público e contexto
| Item | Padrão |
|---|---|
| Público principal | Operacional (quem vai executar); às vezes tático |
| Frequência | Pontual ou recorrente (integração, reciclagem) |
| Duração | 30 min a 4 h, em módulos de 15 a 20 min |
| Tamanho | 15 a 40 slides (mais texto é aceitável; o deck também serve de material de consulta) |
| Estrutura narrativa | Modular: objetivo, conceito, demonstração, prática, verificação |
| Paleta | `corporativa-azul` ou `operacional-alto-contraste` |

## Estrutura recomendada
| # | Modelo de slide | Conteúdo |
|---|---|---|
| 1 | `capa` | Nome do treinamento, público, duração |
| 2 | `bullets` | Objetivos de aprendizagem: "ao final, você será capaz de..." (3 a 5, com verbo de ação) |
| 3 | `agenda` | Módulos com tempo |
| 4 | `secao-divisoria` | Módulo 1 |
| 5 | `bullets` | Por que isso importa (contexto, risco, benefício) |
| 6 a 9 | `processo-fluxo`, `bullets`, imagem/print | Conceito, passo a passo, demonstração (prints de tela com destaque) |
| 10 | `two_column` | Certo vs. errado / antes vs. depois |
| 11 | `bullets` | Exercício prático (instruções) |
| 12 | `bullets` | Verificação: 3 perguntas ou checklist |
| ... | repetir 4 a 12 por módulo | |
| N-2 | `bullets` | Resumo: os 5 pontos que precisam ficar |
| N-1 | `bullets` | Onde buscar ajuda: documentos, contatos, canais |
| N | `encerramento` | Avaliação / certificado / próximos passos |

## Regras específicas
- Um passo por slide quando for procedimento crítico (segurança, qualidade).
- Print de tela sempre com destaque (retângulo em `accent`) no elemento relevante e numeração dos passos.
- Vocabulário exatamente igual ao do sistema/procedimento (mesmos nomes de botões, campos, documentos).
- Repetição intencional: objetivo no início, resumo no fim de cada módulo.
- Fonte de corpo 16 pt ou mais (projetado); slides de consulta podem ter mais texto, mas em blocos com subtítulos.
- Notas do apresentador com roteiro de fala e respostas dos exercícios.

## Gráficos e visuais recomendados
- Fluxograma de processo (`processo-fluxo`).
- Prints de tela anotados.
- Tabela de "se... então..." para decisões.
- Certo × errado lado a lado.
- Evitar: gráficos de dados analíticos, slides de contexto estratégico longos.

## Variações
| Contexto | Ajustes |
|---|---|
| Onboarding institucional | Adicionar: história, valores, organograma, benefícios, sistemas; tom acolhedor; menos procedimento. |
| Treinamento de segurança / compliance | Cada regra com o "por quê" e a consequência; registro de presença; avaliação obrigatória. |
| Treinamento de sistema | Um fluxo completo por módulo; ambiente de teste para prática; FAQ no final. |

## Erros comuns
- Objetivos ausentes ou vagos ("apresentar o sistema").
- Slides de conceito sem demonstração nem prática.
- Prints sem destaque (o aluno não sabe onde olhar).
- Sem verificação de aprendizagem.
- Deck que só faz sentido com o instrutor falando (não serve de consulta depois).

## Spec mínima
```json
{
  "meta": { "title": "Treinamento - Apontamento de paradas no MES", "audience": "operacional", "type": "treinamento", "palette": "corporativa-azul", "font_scale": 1.1 },
  "slides": [
    { "type": "cover", "title": "Apontamento de paradas no MES", "subtitle": "Treinamento para operadores - 45 min" },
    { "type": "bullets", "title": "Ao final, você será capaz de", "bullets": ["Registrar uma parada em até 2 minutos", "Escolher a causa correta entre as 12 categorias", "Corrigir um apontamento errado", "Saber quando chamar a manutenção"] },
    { "type": "agenda", "items": ["Por que apontar (5 min)", "Passo a passo (15 min)", "Prática (15 min)", "Dúvidas e verificação (10 min)"] },
    { "type": "section", "number": "1", "title": "Por que apontar" },
    { "type": "bullets", "title": "Sem apontamento, 40% das paradas viram 'outros' e nada é corrigido", "bullets": ["Pareto de causas depende do seu registro", "Manutenção prioriza pelo que está apontado", "Meta: menos de 5% em 'outros'"] },
    { "type": "section", "number": "2", "title": "Passo a passo" },
    { "type": "process", "title": "Quatro passos para registrar uma parada", "steps": ["Tela Paradas > Nova", "Selecionar máquina", "Escolher causa (lista)", "Confirmar e informar duração"] },
    { "type": "two_column", "title": "Certo vs. errado", "left": {"heading": "Certo", "bullets": ["Causa específica: 'falta de material - almoxarifado'", "Registrar na hora", "Duração real"]}, "right": {"heading": "Errado", "bullets": ["'Outros'", "Registrar no fim do turno", "Arredondar para 30 min"]} },
    { "type": "bullets", "title": "Prática: registre as 3 paradas do cenário", "bullets": ["Cenário no ambiente de teste (usuário treino01)", "15 minutos", "Instrutor valida ao final"] },
    { "type": "bullets", "title": "Resumo: o que precisa ficar", "bullets": ["Apontar na hora, com causa específica", "'Outros' só se nenhuma das 12 servir", "Erro de apontamento: corrigir em Paradas > Editar", "Dúvida: supervisor do turno"] },
    { "type": "closing", "title": "Obrigado", "subtitle": "Avaliação: link no crachá do supervisor" }
  ]
}
```
