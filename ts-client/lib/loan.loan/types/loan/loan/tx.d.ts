import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "loan.loan";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgRequestLoan {
    creator: string;
    amount: string;
    fee: string;
    collateral: string;
    deadline: string;
}
export interface MsgRequestLoanResponse {
}
export interface MsgApproveLoan {
    creator: string;
    id: number;
}
export interface MsgApproveLoanResponse {
}
export interface MsgRepayLoan {
    creator: string;
    id: number;
}
export interface MsgRepayLoanResponse {
}
export interface MsgLiquidateLoan {
    creator: string;
    id: number;
}
export interface MsgLiquidateLoanResponse {
}
export interface MsgCancelLoan {
    creator: string;
    id: number;
}
export interface MsgCancelLoanResponse {
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(base?: I): MsgUpdateParams;
    fromPartial<I_1 extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never; }>(object: I_1): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateParamsResponse;
};
export declare const MsgRequestLoan: {
    encode(message: MsgRequestLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestLoan;
    fromJSON(object: any): MsgRequestLoan;
    toJSON(message: MsgRequestLoan): unknown;
    create<I extends {
        creator?: string;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
    } & {
        creator?: string;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
    } & { [K in Exclude<keyof I, keyof MsgRequestLoan>]: never; }>(base?: I): MsgRequestLoan;
    fromPartial<I_1 extends {
        creator?: string;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
    } & {
        creator?: string;
        amount?: string;
        fee?: string;
        collateral?: string;
        deadline?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgRequestLoan>]: never; }>(object: I_1): MsgRequestLoan;
};
export declare const MsgRequestLoanResponse: {
    encode(_: MsgRequestLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestLoanResponse;
    fromJSON(_: any): MsgRequestLoanResponse;
    toJSON(_: MsgRequestLoanResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgRequestLoanResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgRequestLoanResponse;
};
export declare const MsgApproveLoan: {
    encode(message: MsgApproveLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveLoan;
    fromJSON(object: any): MsgApproveLoan;
    toJSON(message: MsgApproveLoan): unknown;
    create<I extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof MsgApproveLoan>]: never; }>(base?: I): MsgApproveLoan;
    fromPartial<I_1 extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgApproveLoan>]: never; }>(object: I_1): MsgApproveLoan;
};
export declare const MsgApproveLoanResponse: {
    encode(_: MsgApproveLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveLoanResponse;
    fromJSON(_: any): MsgApproveLoanResponse;
    toJSON(_: MsgApproveLoanResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgApproveLoanResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgApproveLoanResponse;
};
export declare const MsgRepayLoan: {
    encode(message: MsgRepayLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayLoan;
    fromJSON(object: any): MsgRepayLoan;
    toJSON(message: MsgRepayLoan): unknown;
    create<I extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof MsgRepayLoan>]: never; }>(base?: I): MsgRepayLoan;
    fromPartial<I_1 extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgRepayLoan>]: never; }>(object: I_1): MsgRepayLoan;
};
export declare const MsgRepayLoanResponse: {
    encode(_: MsgRepayLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayLoanResponse;
    fromJSON(_: any): MsgRepayLoanResponse;
    toJSON(_: MsgRepayLoanResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgRepayLoanResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgRepayLoanResponse;
};
export declare const MsgLiquidateLoan: {
    encode(message: MsgLiquidateLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateLoan;
    fromJSON(object: any): MsgLiquidateLoan;
    toJSON(message: MsgLiquidateLoan): unknown;
    create<I extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof MsgLiquidateLoan>]: never; }>(base?: I): MsgLiquidateLoan;
    fromPartial<I_1 extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgLiquidateLoan>]: never; }>(object: I_1): MsgLiquidateLoan;
};
export declare const MsgLiquidateLoanResponse: {
    encode(_: MsgLiquidateLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateLoanResponse;
    fromJSON(_: any): MsgLiquidateLoanResponse;
    toJSON(_: MsgLiquidateLoanResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgLiquidateLoanResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgLiquidateLoanResponse;
};
export declare const MsgCancelLoan: {
    encode(message: MsgCancelLoan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLoan;
    fromJSON(object: any): MsgCancelLoan;
    toJSON(message: MsgCancelLoan): unknown;
    create<I extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof MsgCancelLoan>]: never; }>(base?: I): MsgCancelLoan;
    fromPartial<I_1 extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCancelLoan>]: never; }>(object: I_1): MsgCancelLoan;
};
export declare const MsgCancelLoanResponse: {
    encode(_: MsgCancelLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLoanResponse;
    fromJSON(_: any): MsgCancelLoanResponse;
    toJSON(_: MsgCancelLoanResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCancelLoanResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCancelLoanResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    RequestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
    ApproveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
    RepayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
    LiquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
    CancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
export declare const MsgServiceName = "loan.loan.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    RequestLoan(request: MsgRequestLoan): Promise<MsgRequestLoanResponse>;
    ApproveLoan(request: MsgApproveLoan): Promise<MsgApproveLoanResponse>;
    RepayLoan(request: MsgRepayLoan): Promise<MsgRepayLoanResponse>;
    LiquidateLoan(request: MsgLiquidateLoan): Promise<MsgLiquidateLoanResponse>;
    CancelLoan(request: MsgCancelLoan): Promise<MsgCancelLoanResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
