export interface IPerson {
    id: number;
    male: boolean;
    name: string;
    surname: string;
    dateOfBirth: IDate;
    dateOfDeath?: IDate;
    motherId?: number;
    fatherId?: number;
    spouseId?: number;
    exSpousesId?: number[];
    children?: number[];
}

interface IDate {
    year: number;
    month: number;
    day: number;
}
