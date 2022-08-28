export interface createAdminDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
}

export interface loginAdminDto {
    email: string;
    password: string;
}

export interface adminPayload {
    _id: string;
    email: string;
    role: string;
}