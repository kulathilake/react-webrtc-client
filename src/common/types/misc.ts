/**
 * Geolocation types.
 */
export type Address = {
    line1: string;
    line2: string;
    city: City | string;
    province: Province | string;
    country: Country | string;
    zip: number;
};

export type City = {
    id: string | number;
    label: string;
    province?: Province | string;
};

export type Province = {
    id: string | number;
    label: string;
    country?: Country | string;
};

export type Country = {
    id: string | number;
    countryCode?: string;
    label: string;
    shortHand?: string;
};

export type Coordinates = {
    lat: number;
    long: number;
    altitude?: number;
};



/**
 * Temporal Types
 */
export interface Temporal<T> {
    timestamp: BigInt;
    state: T;
    setTimestamp: (time:Date|BigInt) => void;
    setStateAtTime: (time: Date|BigInt, state: T) => void;
};

