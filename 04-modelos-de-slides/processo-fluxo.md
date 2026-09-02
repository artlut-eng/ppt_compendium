# Processo / fluxo (`process`)

## Quando usar
Etapas sequenciais (3 a 6): como a solução funciona, passo a passo de procedimento, fases de metodologia, funil simplificado.

## Anatomia (horizontal, chevrons ou caixas com setas)
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Título | 0,5 | 0,4 | 12,33 | 0,9 | conclusão ("Operando em 3 semanas com 4 etapas") |
| Etapa i (n etapas) | 0,5 + i × (12,33 / n) | 2,4 | 12,33 / n - 0,2 | 1,4 | chevron ou retângulo `primary` (etapa atual em `accent`), texto branco 14 a 16 pt bold, centralizado |
| Número | dentro da etapa, canto superior esquerdo | | | | 12 pt |
| Descrição i (opcional) | mesma left | 4,0 | mesma width | 1,8 | 12 a 14 pt, `neutral_dark`, 1 a 3 linhas |

## Variante vertical (procedimento com detalhe)
Etapas como linhas numeradas (círculo `primary` com número + título bold + descrição), 0,85 pol. por etapa, até 6 etapas.

## Variante ciclo
4 a 6 etapas em círculo (para processos recorrentes: PDCA, ciclo de vendas). Usar formas curvas apenas se a ideia de ciclo importar; senão, horizontal.

## Regras
- Verbo no infinitivo ou substantivo de ação em cada etapa ("Instalar sensores").
- Máximo 6 etapas; acima disso, agrupe em fases.
- Destaque (`accent`) somente na etapa atual ou na que a mensagem trata.
- Não usar setas decorativas entre caixas quando a forma já é chevron.

## Spec
```json
{
  "type": "process", "title": "Sensores, plataforma e alertas em 3 semanas",
  "steps": ["Instalar 40 sensores", "Integrar ao MES", "Painéis por máquina", "Alertas de anomalia"],
  "descriptions": ["Semana 1, sem parada de linha", "Semana 2, via API", "Semana 3", "Semana 3"],
  "current_index": 1
}
```
