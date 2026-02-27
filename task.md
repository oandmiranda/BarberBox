[] - Create “My Appointments” page where users can cancel appointments

# Fase 1. O que exatamente precisa existir quando isso estiver pronto?

- [] a new page
- [] the user list of appointments
- [] the button to cancel scheduled appointments
- [] a home button


Definir critérios:

- [] create a new function to fetch all user appointments with current status
- [] create a new Server Action to update the appointment status (must update in database)


# Fase 2. Quebrar em camadas
 
- UI: 
Preciso de uma página com lista e botão cancelar.

- States:
Preciso armazenar lista de appointments.

- Regra de negócio:
[] The client can only access the route if authenticated
[] the client is only allowed to cancel the appointment if status = 'schedule'
[] the client is only allowed to cancel the appointment up to one day before to the scheduled date.

- Infraestrutura (API / banco)
Preciso de endpoint GET e PUT /appointments.

# Fase 3. Ordem correta de construção
- start from domin
- testar endpoint isolado
- depois criar UI
- integrar


# Fase 4 — Revisão estrutural

Perguntas obrigatórias:
	•	Essa lógica está no lugar certo?
	•	UI está misturada com regra?
	•	Estou duplicando algo?
	•	Existe separação clara entre client e server?


- Summary:
	1.	Definir claramente o que é “pronto”
	2.	Quebrar em UI / Estado / Regra / Infra
	3.	Construir de dentro para fora (domínio → UI)
	4.	Integrar conscientemente
	5.	Revisar arquitetura