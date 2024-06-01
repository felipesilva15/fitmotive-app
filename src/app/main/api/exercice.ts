export interface Exercice {
    id?: number;
    workout_id: number;
    name: string;
    series: number;
    repetitions: number;
    description?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
}
