import { Customer } from "../customer/customer.type"

export type Order = {
    "id": number,
    "service_type": string,
    "tva": number,
    "customer": Customer,
    "nb_days": number,
    "total_exclude_tax": number,
    "state": number,
    "comment": string
}