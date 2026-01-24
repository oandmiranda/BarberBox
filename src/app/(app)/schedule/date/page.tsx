import ScheduleDateClient from "./scheduleDateClient";

type PageProps = {
  searchParams: {
    serviceId: string;
  };
};

const ScheduleDatePage = async ({ searchParams }: PageProps) => {
  return (
    <>
      <ScheduleDateClient serviceId={searchParams.serviceId} />
    </>
  );
};

export default ScheduleDatePage;
