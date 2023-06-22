import { z } from "zod";

export const formScheme = z.object({
    name: z
        .string()
        .nonempty("Campo obrigatório.")
        .min(2, "O nome precisa conter pelo menos 2 caracteres."),
    email: z
        .string()
        .nonempty("Campo obrigatório.")
        .email("O e-mail fornecido é inválido."),
    password: z
        .string()
        .nonempty("Campo obrigatório.")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Senha inválida"),
    bio: z
        .string()
        .nonempty("Campo obrigatório.")
        .min(10, "A bio precisa conter pelo menos 10 caracteres."),
    contact: z
        .string()
        .nonempty("Campo obrigatório."),
    course_module: z
        .string()
        .nonempty("Campo obrigatório."),
})
