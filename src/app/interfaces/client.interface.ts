export interface IClient {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    document: string;
    cellPhone: string;
    fixed: string;
    state: string;
    city: string;
    zipCode: string;
    number: string;
    road: string
    neighborhood: string // Bairro
    reference?: string;
    isPeronFisic: boolean;
    observation?: string;
}