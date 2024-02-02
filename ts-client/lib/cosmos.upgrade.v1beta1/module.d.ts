import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgSoftwareUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { ModuleVersion } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { QueryAppliedPlanResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryUpgradedConsensusStateRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryUpgradedConsensusStateResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryModuleVersionsRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAuthorityResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { CancelSoftwareUpgradeProposal } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { MsgCancelUpgradeResponse } from "./types/cosmos/upgrade/v1beta1/tx";
import { QueryCurrentPlanRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryCurrentPlanResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAppliedPlanRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { Plan } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { MsgCancelUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { QueryModuleVersionsResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAuthorityRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { MsgSoftwareUpgradeResponse } from "./types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "./types/cosmos/upgrade/v1beta1/upgrade";
export { MsgSoftwareUpgrade, ModuleVersion, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryAuthorityResponse, CancelSoftwareUpgradeProposal, MsgCancelUpgradeResponse, QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, Plan, MsgCancelUpgrade, QueryModuleVersionsResponse, QueryAuthorityRequest, MsgSoftwareUpgradeResponse, SoftwareUpgradeProposal };
type sendMsgSoftwareUpgradeParams = {
    value: MsgSoftwareUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendModuleVersionParams = {
    value: ModuleVersion;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAppliedPlanResponseParams = {
    value: QueryAppliedPlanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleVersionsRequestParams = {
    value: QueryModuleVersionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAuthorityResponseParams = {
    value: QueryAuthorityResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCancelSoftwareUpgradeProposalParams = {
    value: CancelSoftwareUpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUpgradeResponseParams = {
    value: MsgCancelUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCurrentPlanRequestParams = {
    value: QueryCurrentPlanRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCurrentPlanResponseParams = {
    value: QueryCurrentPlanResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAppliedPlanRequestParams = {
    value: QueryAppliedPlanRequest;
    fee?: StdFee;
    memo?: string;
};
type sendPlanParams = {
    value: Plan;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUpgradeParams = {
    value: MsgCancelUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleVersionsResponseParams = {
    value: QueryModuleVersionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAuthorityRequestParams = {
    value: QueryAuthorityRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSoftwareUpgradeResponseParams = {
    value: MsgSoftwareUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSoftwareUpgradeProposalParams = {
    value: SoftwareUpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type msgSoftwareUpgradeParams = {
    value: MsgSoftwareUpgrade;
};
type moduleVersionParams = {
    value: ModuleVersion;
};
type queryAppliedPlanResponseParams = {
    value: QueryAppliedPlanResponse;
};
type queryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
};
type queryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
};
type queryModuleVersionsRequestParams = {
    value: QueryModuleVersionsRequest;
};
type queryAuthorityResponseParams = {
    value: QueryAuthorityResponse;
};
type cancelSoftwareUpgradeProposalParams = {
    value: CancelSoftwareUpgradeProposal;
};
type msgCancelUpgradeResponseParams = {
    value: MsgCancelUpgradeResponse;
};
type queryCurrentPlanRequestParams = {
    value: QueryCurrentPlanRequest;
};
type queryCurrentPlanResponseParams = {
    value: QueryCurrentPlanResponse;
};
type queryAppliedPlanRequestParams = {
    value: QueryAppliedPlanRequest;
};
type planParams = {
    value: Plan;
};
type msgCancelUpgradeParams = {
    value: MsgCancelUpgrade;
};
type queryModuleVersionsResponseParams = {
    value: QueryModuleVersionsResponse;
};
type queryAuthorityRequestParams = {
    value: QueryAuthorityRequest;
};
type msgSoftwareUpgradeResponseParams = {
    value: MsgSoftwareUpgradeResponse;
};
type softwareUpgradeProposalParams = {
    value: SoftwareUpgradeProposal;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgSoftwareUpgrade({ value, fee, memo }: sendMsgSoftwareUpgradeParams): Promise<DeliverTxResponse>;
    sendModuleVersion({ value, fee, memo }: sendModuleVersionParams): Promise<DeliverTxResponse>;
    sendQueryAppliedPlanResponse({ value, fee, memo }: sendQueryAppliedPlanResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: sendQueryUpgradedConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: sendQueryUpgradedConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryModuleVersionsRequest({ value, fee, memo }: sendQueryModuleVersionsRequestParams): Promise<DeliverTxResponse>;
    sendQueryAuthorityResponse({ value, fee, memo }: sendQueryAuthorityResponseParams): Promise<DeliverTxResponse>;
    sendCancelSoftwareUpgradeProposal({ value, fee, memo }: sendCancelSoftwareUpgradeProposalParams): Promise<DeliverTxResponse>;
    sendMsgCancelUpgradeResponse({ value, fee, memo }: sendMsgCancelUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendQueryCurrentPlanRequest({ value, fee, memo }: sendQueryCurrentPlanRequestParams): Promise<DeliverTxResponse>;
    sendQueryCurrentPlanResponse({ value, fee, memo }: sendQueryCurrentPlanResponseParams): Promise<DeliverTxResponse>;
    sendQueryAppliedPlanRequest({ value, fee, memo }: sendQueryAppliedPlanRequestParams): Promise<DeliverTxResponse>;
    sendPlan({ value, fee, memo }: sendPlanParams): Promise<DeliverTxResponse>;
    sendMsgCancelUpgrade({ value, fee, memo }: sendMsgCancelUpgradeParams): Promise<DeliverTxResponse>;
    sendQueryModuleVersionsResponse({ value, fee, memo }: sendQueryModuleVersionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAuthorityRequest({ value, fee, memo }: sendQueryAuthorityRequestParams): Promise<DeliverTxResponse>;
    sendMsgSoftwareUpgradeResponse({ value, fee, memo }: sendMsgSoftwareUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendSoftwareUpgradeProposal({ value, fee, memo }: sendSoftwareUpgradeProposalParams): Promise<DeliverTxResponse>;
    msgSoftwareUpgrade({ value }: msgSoftwareUpgradeParams): EncodeObject;
    moduleVersion({ value }: moduleVersionParams): EncodeObject;
    queryAppliedPlanResponse({ value }: queryAppliedPlanResponseParams): EncodeObject;
    queryUpgradedConsensusStateRequest({ value }: queryUpgradedConsensusStateRequestParams): EncodeObject;
    queryUpgradedConsensusStateResponse({ value }: queryUpgradedConsensusStateResponseParams): EncodeObject;
    queryModuleVersionsRequest({ value }: queryModuleVersionsRequestParams): EncodeObject;
    queryAuthorityResponse({ value }: queryAuthorityResponseParams): EncodeObject;
    cancelSoftwareUpgradeProposal({ value }: cancelSoftwareUpgradeProposalParams): EncodeObject;
    msgCancelUpgradeResponse({ value }: msgCancelUpgradeResponseParams): EncodeObject;
    queryCurrentPlanRequest({ value }: queryCurrentPlanRequestParams): EncodeObject;
    queryCurrentPlanResponse({ value }: queryCurrentPlanResponseParams): EncodeObject;
    queryAppliedPlanRequest({ value }: queryAppliedPlanRequestParams): EncodeObject;
    plan({ value }: planParams): EncodeObject;
    msgCancelUpgrade({ value }: msgCancelUpgradeParams): EncodeObject;
    queryModuleVersionsResponse({ value }: queryModuleVersionsResponseParams): EncodeObject;
    queryAuthorityRequest({ value }: queryAuthorityRequestParams): EncodeObject;
    msgSoftwareUpgradeResponse({ value }: msgSoftwareUpgradeResponseParams): EncodeObject;
    softwareUpgradeProposal({ value }: softwareUpgradeProposalParams): EncodeObject;
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
        CosmosUpgradeV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
