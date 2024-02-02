import _m0 from "protobufjs/minimal";
import { Loan } from "./loan";
import { Params } from "./params";
export declare const protobufPackage = "loan.loan";
/** GenesisState defines the loan module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    loanList: Loan[];
    loanCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {};
        loanList?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[];
        loanCount?: number;
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
        loanList?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[] & ({
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
        } & { [K_1 in Exclude<keyof I["loanList"][number], keyof Loan>]: never; })[] & { [K_2 in Exclude<keyof I["loanList"], keyof {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[]>]: never; };
        loanCount?: number;
    } & { [K_3 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I): GenesisState;
    fromPartial<I_1 extends {
        params?: {};
        loanList?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[];
        loanCount?: number;
    } & {
        params?: {} & {} & { [K_4 in Exclude<keyof I_1["params"], never>]: never; };
        loanList?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[] & ({
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
        } & { [K_5 in Exclude<keyof I_1["loanList"][number], keyof Loan>]: never; })[] & { [K_6 in Exclude<keyof I_1["loanList"], keyof {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[]>]: never; };
        loanCount?: number;
    } & { [K_7 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
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
