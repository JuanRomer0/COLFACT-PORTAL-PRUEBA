import { http, HttpResponse } from "msw";

type LoginBody = {
  userName: string;
  password: string;
};

export const handlers = [
  // 🔐 LOGIN
http.post("/api/auth/login", async ({ request }) => {
  const body = (await request.json()) as LoginBody;

  if (
    body.userName === "admin" &&
    body.password === "Admin123!"
  ) {
    return HttpResponse.json({
      accessToken: "eyJ_fake_token",
      refreshToken: "abc_refresh",
      role: "Admin",
      fullName: "Administrador",
    });
  }

  return new HttpResponse(null, { status: 401 });
}),

  // 👥 USERS
  http.get("/api/users", () => {
    return HttpResponse.json([
      {
        id: 1,
        fullName: "Diana Sánchez",
        userName: "diana.sanchez",
        identification: "1098721258",
        email: "diana@empresa.com",
        role: "Issuer",
        isActive: true,
      },
      {
        id: 2,
        fullName: "Carlos Gómez",
        userName: "carlos.gomez",
        identification: "900123456",
        email: "carlos@empresa.com",
        role: "IssuerViewer",
        isActive: false,
      },
    ]);
  }),
];