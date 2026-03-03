export async function GET() {
  return Response.json({
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    offset: new Date().getTimezoneOffset(),
    now: new Date().toString(),
  });
}