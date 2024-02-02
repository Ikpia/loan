import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsResponse } from "./types/loan/loan/query";
import { Loan } from "./types/loan/loan/loan";
import { QueryParamsRequest } from "./types/loan/loan/query";
import { QueryGetLoanResponse } from "./types/loan/loan/query";
import { MsgLiquidateLoan } from "./types/loan/loan/tx";
import { MsgApproveLoan } from "./types/loan/loan/tx";
import { GenesisState } from "./types/loan/loan/genesis";
import { Params } from "./types/loan/loan/params";
import { QueryAllLoanResponse } from "./types/loan/loan/query";
import { MsgApproveLoanResponse } from "./types/loan/loan/tx";
import { MsgRepayLoanResponse } from "./types/loan/loan/tx";
import { MsgLiquidateLoanResponse } from "./types/loan/loan/tx";
import { MsgCancelLoanResponse } from "./types/loan/loan/tx";
import { MsgUpdateParamsResponse } from "./types/loan/loan/tx";
import { MsgRequestLoanResponse } from "./types/loan/loan/tx";
import { MsgUpdateParams } from "./types/loan/loan/tx";
import { QueryGetLoanRequest } from "./types/loan/loan/query";
import { QueryAllLoanRequest } from "./types/loan/loan/query";
import { MsgRepayLoan } from "./types/loan/loan/tx";
import { MsgRequestLoan } from "./types/loan/loan/tx";
import { MsgCancelLoan } from "./types/loan/loan/tx";
export { QueryParamsResponse, Loan, QueryParamsRequest, QueryGetLoanResponse, MsgLiquidateLoan, MsgApproveLoan, GenesisState, Params, QueryAllLoanResponse, MsgApproveLoanResponse, MsgRepayLoanResponse, MsgLiquidateLoanResponse, MsgCancelLoanResponse, MsgUpdateParamsResponse, MsgRequestLoanResponse, MsgUpdateParams, QueryGetLoanRequest, QueryAllLoanRequest, MsgRepayLoan, MsgRequestLoan, MsgCancelLoan };
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendLoanParams = {
    value: Loan;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLoanResponseParams = {
    value: QueryGetLoanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLiquidateLoanParams = {
    value: MsgLiquidateLoan;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveLoanParams = {
    value: MsgApproveLoan;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllLoanResponseParams = {
    value: QueryAllLoanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgApproveLoanResponseParams = {
    value: MsgApproveLoanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRepayLoanResponseParams = {
    value: MsgRepayLoanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLiquidateLoanResponseParams = {
    value: MsgLiquidateLoanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelLoanResponseParams = {
    value: MsgCancelLoanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRequestLoanResponseParams = {
    value: MsgRequestLoanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetLoanRequestParams = {
    value: QueryGetLoanRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllLoanRequestParams = {
    value: QueryAllLoanRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRepayLoanParams = {
    value: MsgRepayLoan;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRequestLoanParams = {
    value: MsgRequestLoan;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelLoanParams = {
    value: MsgCancelLoan;
    fee?: StdFee;
    memo?: string;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type loanParams = {
    value: Loan;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetLoanResponseParams = {
    value: QueryGetLoanResponse;
};
type msgLiquidateLoanParams = {
    value: MsgLiquidateLoan;
};
type msgApproveLoanParams = {
    value: MsgApproveLoan;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type queryAllLoanResponseParams = {
    value: QueryAllLoanResponse;
};
type msgApproveLoanResponseParams = {
    value: MsgApproveLoanResponse;
};
type msgRepayLoanResponseParams = {
    value: MsgRepayLoanResponse;
};
type msgLiquidateLoanResponseParams = {
    value: MsgLiquidateLoanResponse;
};
type msgCancelLoanResponseParams = {
    value: MsgCancelLoanResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgRequestLoanResponseParams = {
    value: MsgRequestLoanResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetLoanRequestParams = {
    value: QueryGetLoanRequest;
};
type queryAllLoanRequestParams = {
    value: QueryAllLoanRequest;
};
type msgRepayLoanParams = {
    value: MsgRepayLoan;
};
type msgRequestLoanParams = {
    value: MsgRequestLoan;
};
type msgCancelLoanParams = {
    value: MsgCancelLoan;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendLoan({ value, fee, memo }: sendLoanParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetLoanResponse({ value, fee, memo }: sendQueryGetLoanResponseParams): Promise<DeliverTxResponse>;
    sendMsgLiquidateLoan({ value, fee, memo }: sendMsgLiquidateLoanParams): Promise<DeliverTxResponse>;
    sendMsgApproveLoan({ value, fee, memo }: sendMsgApproveLoanParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryAllLoanResponse({ value, fee, memo }: sendQueryAllLoanResponseParams): Promise<DeliverTxResponse>;
    sendMsgApproveLoanResponse({ value, fee, memo }: sendMsgApproveLoanResponseParams): Promise<DeliverTxResponse>;
    sendMsgRepayLoanResponse({ value, fee, memo }: sendMsgRepayLoanResponseParams): Promise<DeliverTxResponse>;
    sendMsgLiquidateLoanResponse({ value, fee, memo }: sendMsgLiquidateLoanResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelLoanResponse({ value, fee, memo }: sendMsgCancelLoanResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRequestLoanResponse({ value, fee, memo }: sendMsgRequestLoanResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetLoanRequest({ value, fee, memo }: sendQueryGetLoanRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllLoanRequest({ value, fee, memo }: sendQueryAllLoanRequestParams): Promise<DeliverTxResponse>;
    sendMsgRepayLoan({ value, fee, memo }: sendMsgRepayLoanParams): Promise<DeliverTxResponse>;
    sendMsgRequestLoan({ value, fee, memo }: sendMsgRequestLoanParams): Promise<DeliverTxResponse>;
    sendMsgCancelLoan({ value, fee, memo }: sendMsgCancelLoanParams): Promise<DeliverTxResponse>;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    loan({ value }: loanParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetLoanResponse({ value }: queryGetLoanResponseParams): EncodeObject;
    msgLiquidateLoan({ value }: msgLiquidateLoanParams): EncodeObject;
    msgApproveLoan({ value }: msgApproveLoanParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryAllLoanResponse({ value }: queryAllLoanResponseParams): EncodeObject;
    msgApproveLoanResponse({ value }: msgApproveLoanResponseParams): EncodeObject;
    msgRepayLoanResponse({ value }: msgRepayLoanResponseParams): EncodeObject;
    msgLiquidateLoanResponse({ value }: msgLiquidateLoanResponseParams): EncodeObject;
    msgCancelLoanResponse({ value }: msgCancelLoanResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgRequestLoanResponse({ value }: msgRequestLoanResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetLoanRequest({ value }: queryGetLoanRequestParams): EncodeObject;
    queryAllLoanRequest({ value }: queryAllLoanRequestParams): EncodeObject;
    msgRepayLoan({ value }: msgRepayLoanParams): EncodeObject;
    msgRequestLoan({ value }: msgRequestLoanParams): EncodeObject;
    msgCancelLoan({ value }: msgCancelLoanParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        LoanLoan: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
