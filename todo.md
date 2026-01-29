# feature/appointments-flow

- Após escolher serviço:
[X] - os dias que estiverem com agendamento em todos os horários devem ficar indisponíveis para o user e impedir click

- Após escolher data:
[X] - um barbeiro não pode ter > 1 agendamento no mesmo horário 
[X] - os horários que estiverem com agendamento para todos os barbeiros devem ficar indisponíveis após o cliente escolher uma data
[X] - retornar objeto barber ao inves de só o ID para alimentar ui 

[X] - refatorar arquitetura: server function x client
[X] - fix flow
[] - deve usar apenas um type de Service para Ui (com ID)
[] - resolver conflitos de types

# ui/global-layout

# highlights
- 2 heros: premium services & another one

- 4 card:
    1. serviço mais agendado + botão de agendamento
    2. dica: como manter a barba alinhada por mais tempo? -> button to route
    3. Avaliação média: Exemplo:
            ⭐ 4.9 / 5
            Mais de 300 atendimentos