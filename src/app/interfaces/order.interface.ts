export interface IOrder {
    id?: string;
    created_at?: Date,
    client: string;
    payment_form: string;
    nature?: string;
    product: string;
    quanty: number;
    unitary_value: string;
    amount: string;
    delivery_date: Date;
}