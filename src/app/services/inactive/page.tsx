import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { listInactiveServices } from "../../actions/services/inactivateServices";
import { reactivateService } from "../../actions/services/reactivateService";

export default async function InactiveServices() {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    redirect("/services");
  }

  const services = await listInactiveServices();

  return (
    <div>
      <h2>Serviços inativos</h2>

      {services.length === 0 ? (
        <p>Nenhum serviço inativo por aqui</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <div>Nome: {service.name}</div>
              <div>Preço: {service.price}</div>
              {service.description && (
                <div>Descrição: {service.description}</div>
              )}

              <form action={reactivateService.bind(null, service.id)}>
                <button className="bg-green-500 text-white">
                  Reativar
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}