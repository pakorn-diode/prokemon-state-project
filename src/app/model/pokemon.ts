export interface Pokemon {
    readonly count?: number;
    readonly next?: string;
    readonly previous?: string;
    readonly results?: Result[];
}

export interface Result {
    readonly name?: string;
    readonly url?: string;
}