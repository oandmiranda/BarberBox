import Link from "next/link";
import { createService } from "../actions/services/createService";
import { listServicesByBarber } from "../actions/services/listServiceByBarber";
import { getCurrentUser } from "@/lib/auth";
import { deactivateService } from "../actions/services/deactivateService";

export default async function Services() {
  const currentServices = await listServicesByBarber();

  const user = await getCurrentUser();

  return (
    <>
      <div>
        <h2>Serviços cadastrados</h2>

        {currentServices.length === 0 ? (
          <p>Nenhum serviço disponível</p>
        ) : (
          <ul>
            {currentServices.map((service) => (
              <li key={service.id}>
                <div>Nome: {service.name}</div>
                <div>Duração: {service.duration_minutes} min</div>
                <div>Preço: {service.price}</div>
                <div>Descrição: {service.description ?? ""}</div>

                {user && user.role === "ADMIN" && (
                  <div>
                    <Link
                      href={`/services/${service.id}/edit`}
                      className="bg-red-400 pg-2"
                    >
                      <button>editar</button>
                    </Link>
                    <form action={deactivateService.bind(null, service.id)}>
                      <button type="submit" className="bg-red-500 text-white">
                        Desativar serviço
                      </button>
                    </form>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {user && user.role === "ADMIN" && (
        <>
        <form action={createService} className="text-black">
          <div>
            <input name="name" placeholder="Nome do serviço" required />
          </div>

          <div>
            <input name="description" placeholder="Descrição (opcional)" />
          </div>

          <div>
            <input
              name="duration"
              type="number"
              placeholder="Duração em minutos"
              required
            />
          </div>

          <div>
            <input name="price" type="number" placeholder="Preço" required />
          </div>

          <button type="submit" className="bg-amber-400 p-2">
            Criar serviço
          </button>
        </form>

        <div>
          <Link href={"/services/inactive"} className="bg-slate-600">Serviços inativos</Link>
        </div>
        </>
      )}
    </>
  );
}
