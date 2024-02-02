import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "loan.loan";
export interface Loan {
    id: number;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
    state: string;
    borrower: string;
    lender: string;
}
export declare const Loan: {
    encode(message: Loan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Loan;
    fromJSON(object: any): Loan;
    toJSON(message: Loan): unknown;
    create<I extends {
        id?: number;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
        state?: string;
        borrower?: string;
        lender?: string;
    } & {
        id?: number;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
        state?: string;
        borrower?: string;
        lender?: string;
    } & { [K in Exclude<keyof I, keyof Loan>]: never; }>(base?: I): Loan;
    fromPartial<I_1 extends {
        id?: number;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
        state?: string;
        borrower?: string;
        lender?: string;
    } & {
        id?: number;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
        state?: string;
        borrower?: string;
        lender?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Loan>]: never; }>(object: I_1): Loan;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
