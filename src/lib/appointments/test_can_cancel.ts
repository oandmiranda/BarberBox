import { canCancelAppointment } from "./can_cancel"

const now = new Date()

// 5 horas no futuro
const fiveHoursLater = new Date(now.getTime() + 5 * 60 * 60 * 1000)

// 3 horas no futuro
const threeHoursLater = new Date(now.getTime() + 3 * 60 * 60 * 1000)

console.log("5 horas, SCHEDULE:",
  canCancelAppointment("SCHEDULE", fiveHoursLater, now)
)

console.log("3 horas, SCHEDULE:",
  canCancelAppointment("SCHEDULE", threeHoursLater, now)
)

console.log("CANCELED:",
  canCancelAppointment("CANCELED", fiveHoursLater, now)
)