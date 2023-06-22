import { z } from "zod";

export const loginScheme = z.object({
    email: z
        .string()
        .nonempty("Campo obrigatório.")
        .email("O e-mail fornecido é inválido."),
    password: z
        .string()
        .nonempty("Campo obrigatório.")
})