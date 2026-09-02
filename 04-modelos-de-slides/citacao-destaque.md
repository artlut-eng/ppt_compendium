# Citação / destaque (`quote`)

## Quando usar
Depoimento de cliente (proposta, pitch), visão/ambição (plano estratégico), frase de impacto (all-hands), reconhecimento. Com moderação: no máximo 1 a 2 por deck.

## Anatomia
| Elemento | left | top | width | height | Estilo |
|---|---|---|---|---|---|
| Fundo (opcional) | 0 | 0 | 13,333 | 7,5 | `primary` (texto branco) ou `background` |
| Aspas decorativas | 1,0 | 1,4 | 1,2 | 1,2 | 96 pt, `accent`, opcional |
| Texto | 1,5 | 2,2 | 10,33 | 2,6 | 28 a 32 pt, itálico ou regular, `primary` (ou branco), alinhado à esquerda |
| Autor | 1,5 | 5,0 | 10,33 | 0,5 | 14 a 16 pt, `neutral_mid` (ou branco 80%), "Nome, cargo, empresa" |
| Foto/logo (opcional) | 10,8 | 5,0 | 1,5 | 1,5 | |

## Regras
- Até 30 palavras. Corte com reticências se preciso, sem mudar o sentido.
- Autor identificado (com autorização quando externo).
- Não usar para frases motivacionais genéricas.

## Spec
```json
{ "type": "quote", "text": "Em 6 meses reduzimos 18% do custo de energia e descobrimos duas máquinas que consumiam parado.", "author": "Gerente industrial, cliente do setor metalúrgico", "dark": true }
```
