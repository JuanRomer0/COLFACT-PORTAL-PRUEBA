import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    navigate("/");
  }
}, []);

const schema = z.object({
  userName: z.string().min(1, "Usuario requerido"),
  password: z.string().min(1, "Contraseña requerida"),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const { login, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    login(data, {
        onSuccess: () => navigate("/"),
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 space-y-4 border p-6 rounded-xl shadow"
      >
        <h2 className="text-xl font-bold">Login</h2>

        <input
          {...register("userName")}
          placeholder="Usuario"
          className="w-full border p-2 rounded"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm">
            {errors.userName.message}
          </p>
        )}

        <input
          type="password"
          {...register("password")}
          placeholder="Contraseña"
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {isLoading ? "Cargando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;


