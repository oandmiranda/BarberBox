import { getCurrentUser } from "@/lib/auth";
import { sql } from "@/lib/db";
import { redirect } from "next/navigation";
import { updateService } from "@/app/actions/services/updateService";

type Props = {
  params: { id: string };
};

export default async function EditService({ params }: Props) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const service = await sql`
    SELECT
      id,
      name,
      description,
      duration_minutes,
      price
    FROM services
    WHERE id = ${params.id}
    LIMIT 1
  `;

  if (service.length === 0) {
    redirect("/services");
  }

  const s = service[0];
  
  return (
    <div>
      <h2>Serviço</h2>

      <div>
        <p>Nome: {s.name}</p>
        <p>Duração: {s.duration_minutes} min</p>
        <p>Preço: {s.price}</p>
        <p>Descrição: {s.description ?? "—"}</p>
      </div>

      {user.role === "ADMIN" && (
        <form
          action={updateService.bind(null, s.id)}
          className="text-black mt-4"
        >
          <input name="name" defaultValue={s.name} />
          <input name="description" defaultValue={s.description ?? ""} />
          <input
            name="duration"
            type="number"
            defaultValue={s.duration_minutes}
          />
          <input
            name="price"
            type="number"
            defaultValue={s.price}
          />

          <button type="submit" className="bg-yellow-500">
            Salvar
          </button>
        </form>
      )}
    </div>
  );
}