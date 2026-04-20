import { useUsers } from "@/features/users/hooks/useUsers";

const DashboardPage = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error al cargar usuarios</p>;
  if (!data) return null;

  const users = Array.isArray(data) ? data : data?.data ?? [];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Usuarios</h1>

      <ul>
        {users.map((user: any) => (
          <li key={user.id} className="border p-2 mb-2 rounded">
            {user.fullName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;