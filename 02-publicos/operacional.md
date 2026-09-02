# Público operacional

**Quem:** supervisores de turno, líderes de célula, analistas, técnicos, operadores, equipes de campo, atendimento, times de desenvolvimento em reunião diária.

**O que querem:** saber **o que está fora do padrão, o que fazer agora e quem é responsável**. Já conhecem o contexto; não precisam de introdução.

## Perfil de decisão
| Aspecto | Característica |
|---|---|
| Horizonte | Turno, dia, semana; mês como horizonte máximo |
| Tempo disponível | 5 a 15 minutos (reunião de pé, início de turno) ou painel fixo em TV |
| Perguntas típicas | "O que parou?", "Qual máquina/pedido está atrasado?", "Bateu a meta de ontem?", "O que eu faço diferente hoje?" |
| Decisões | Ajustar sequência, acionar manutenção, redistribuir pessoas, abrir chamado, escalar para o gerente |
| Tolerância a detalhe | Alta para dados; nula para narrativa |

## Regras de construção
1. **Fonte grande**: corpo mínimo 18 pt; se for TV vista a distância, 20 a 24 pt. Títulos 36 pt.
2. **Semáforo em tudo**: verde/amarelo/vermelho com ícone ou texto, nunca só cor.
3. **Só desvios ganham slide.** O que está no alvo aparece uma vez no painel e pronto.
4. **Ações com dono e prazo em horas/dias**, não semanas.
5. Deck de 5 a 12 slides, ou **um painel único** que se atualiza (dashboard em slide).
6. Sem capa elaborada, sem agenda, sem sumário executivo. Slide 1 já é o painel.
7. Layout fixo, idêntico todo dia: a equipe aprende onde olhar.
8. Alto contraste (paleta `operacional-alto-contraste`), fundo branco ou muito claro.
9. Unidades físicas e concretas: peças/hora, minutos de parada, % refugo, chamados abertos.

## Dados e gráficos
- Painel de KPIs do período com semáforo (produção, qualidade, disponibilidade, segurança, entregas).
- Run chart (linha diária) com faixa de meta.
- Pareto de causas de parada / defeito / reclamação.
- Tabela de desvios: item, valor, meta, causa, ação, dono, prazo.
- Lista de pendências e chamados abertos.
- Evitar: gráficos com muitas séries, tendências de longo prazo, cenários.

## Estrutura padrão (Status, Desvios, Ações)
```
1. Painel do período: KPIs com semáforo (1 slide, layout fixo)
2. Segurança / incidentes (sempre primeiro se houver ocorrência)
3-5. Desvios: um slide por indicador vermelho (o que, por quê, ação, dono, prazo)
6. Pareto de causas da semana
7. Pendências e apoio necessário (o que a supervisão precisa escalar)
8. Plano do dia / semana (sequência, prioridades)
```

## Variante "painel único" (TV / gestão à vista)
Um slide 16:9 dividido em:
- Faixa superior: 4 a 6 KPIs grandes com semáforo.
- Área central: run chart do indicador principal + Pareto.
- Faixa inferior: 3 a 5 ações abertas com dono e prazo.
Atualizado por script a cada turno (ver `06-codigo/`).

## Tom e linguagem
- Imperativo e curto: "Trocar ferramenta na Prensa 3 até 14h (João)".
- Vocabulário da operação, sem tradução gerencial.
- Sem porcentagens sem valor absoluto ao lado quando a base é pequena ("3 de 12" e não "25%").

## Erros comuns
- Fonte de 10 a 12 pt em TV.
- Slides de contexto histórico que ninguém precisa.
- Ação sem dono ("verificar a máquina").
- Mudar o layout do painel toda semana.
- Cor sem legenda/ícone (problema para daltônicos e para TVs com cor ruim).

## Tipos de apresentação mais comuns para este público
`revisao-operacional`, `treinamento`, `relatorio-de-projeto` (versão semanal de time), `kickoff-de-projeto` (versão para equipe).
