import BackgroundSection from "@/components/ui/backgroundSection";

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundSection image="/assets/images/barbershop/barbershop4.png">
      {children}
    </BackgroundSection>
  );
}