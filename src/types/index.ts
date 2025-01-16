export type User = {
    name: string
    email: string
    handle: string
}

export type RegisterForm = Pick<User, 'name' | 'email' | 'handle'> & {
    password: string
    password_confirmation: string
}