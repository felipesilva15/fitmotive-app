import { Exercice } from "./exercice";

export interface Workout {
    id?: number;
    provider_id: number;
    name: string;
    description?: string;
    exercices: Array<Exercice>;
    created_at?: string | Date;
    updated_at?: string | Date;
}
