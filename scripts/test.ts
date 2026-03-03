console.log("Timezone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
console.log("Offset (minutos):", new Date().getTimezoneOffset());
console.log("Agora:", new Date().toString());