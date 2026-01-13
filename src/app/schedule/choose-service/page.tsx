import { getActiveServices } from "@/services/getActiveServices";
import Link from "next/link";

export default async function ChooseService() {
  const currentServices = await getActiveServices();

  return (
    <>
      <div>
        <h2>Escolha um serviço</h2>

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
                 {service.image_url && (
                  <img src={service.image_url} alt={service.name} className="w-20 h-20"/>
                )}
                <Link
                  href={`/schedule/date?serviceId=${service.id}`}
                  className="bg-amber-500 p-2"
                >
                  Agendar
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
