export default function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="h-7 w-7 rounded-full border-4 border-brandPrimary border-t-transparent animate-spin" />
    </div>
  );
}