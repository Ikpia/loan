import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Loan } from "./loan";
import { Params } from "./params";
export declare const protobufPackage = "loan.loan";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetLoanRequest {
    id: number;
}
export interface QueryGetLoanResponse {
    Loan: Loan | undefined;
}
export interface QueryAllLoanRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllLoanResponse {
    Loan: Loan[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryGetLoanRequest: {
    encode(message: QueryGetLoanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoanRequest;
    fromJSON(object: any): QueryGetLoanRequest;
    toJSON(message: QueryGetLoanRequest): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): QueryGetLoanRequest;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): QueryGetLoanRequest;
};
export declare const QueryGetLoanResponse: {
    encode(message: QueryGetLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoanResponse;
    fromJSON(object: any): QueryGetLoanResponse;
    toJSON(message: QueryGetLoanResponse): unknown;
    create<I extends {
        Loan?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        };
    } & {
        Loan?: {
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
        } & { [K in Exclude<keyof I["Loan"], keyof Loan>]: never; };
    } & { [K_1 in Exclude<keyof I, "Loan">]: never; }>(base?: I): QueryGetLoanResponse;
    fromPartial<I_1 extends {
        Loan?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        };
    } & {
        Loan?: {
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
        } & { [K_2 in Exclude<keyof I_1["Loan"], keyof Loan>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "Loan">]: never; }>(object: I_1): QueryGetLoanResponse;
};
export declare const QueryAllLoanRequest: {
    encode(message: QueryAllLoanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLoanRequest;
    fromJSON(object: any): QueryAllLoanRequest;
    toJSON(message: QueryAllLoanRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryAllLoanRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryAllLoanRequest;
};
export declare const QueryAllLoanResponse: {
    encode(message: QueryAllLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLoanResponse;
    fromJSON(object: any): QueryAllLoanResponse;
    toJSON(message: QueryAllLoanResponse): unknown;
    create<I extends {
        Loan?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        Loan?: {
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
        } & { [K in Exclude<keyof I["Loan"][number], keyof Loan>]: never; })[] & { [K_1 in Exclude<keyof I["Loan"], keyof {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof QueryAllLoanResponse>]: never; }>(base?: I): QueryAllLoanResponse;
    fromPartial<I_1 extends {
        Loan?: {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        Loan?: {
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
        } & { [K_4 in Exclude<keyof I_1["Loan"][number], keyof Loan>]: never; })[] & { [K_5 in Exclude<keyof I_1["Loan"], keyof {
            id?: number;
            amount?: string;
            fee?: string;
            collateral?: string;
            deadline?: string;
            state?: string;
            borrower?: string;
            lender?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof QueryAllLoanResponse>]: never; }>(object: I_1): QueryAllLoanResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Loan items. */
    Loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
    LoanAll(request: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
}
export declare const QueryServiceName = "loan.loan.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
    LoanAll(request: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
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
