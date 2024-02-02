import { GeneratedType } from "@cosmjs/proto-signing";
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

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/loan.loan.QueryParamsResponse", QueryParamsResponse],
    ["/loan.loan.Loan", Loan],
    ["/loan.loan.QueryParamsRequest", QueryParamsRequest],
    ["/loan.loan.QueryGetLoanResponse", QueryGetLoanResponse],
    ["/loan.loan.MsgLiquidateLoan", MsgLiquidateLoan],
    ["/loan.loan.MsgApproveLoan", MsgApproveLoan],
    ["/loan.loan.GenesisState", GenesisState],
    ["/loan.loan.Params", Params],
    ["/loan.loan.QueryAllLoanResponse", QueryAllLoanResponse],
    ["/loan.loan.MsgApproveLoanResponse", MsgApproveLoanResponse],
    ["/loan.loan.MsgRepayLoanResponse", MsgRepayLoanResponse],
    ["/loan.loan.MsgLiquidateLoanResponse", MsgLiquidateLoanResponse],
    ["/loan.loan.MsgCancelLoanResponse", MsgCancelLoanResponse],
    ["/loan.loan.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/loan.loan.MsgRequestLoanResponse", MsgRequestLoanResponse],
    ["/loan.loan.MsgUpdateParams", MsgUpdateParams],
    ["/loan.loan.QueryGetLoanRequest", QueryGetLoanRequest],
    ["/loan.loan.QueryAllLoanRequest", QueryAllLoanRequest],
    ["/loan.loan.MsgRepayLoan", MsgRepayLoan],
    ["/loan.loan.MsgRequestLoan", MsgRequestLoan],
    ["/loan.loan.MsgCancelLoan", MsgCancelLoan],
    
];

export { msgTypes }