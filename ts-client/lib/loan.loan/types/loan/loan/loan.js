/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "loan.loan";
function createBaseLoan() {
    return { id: 0, amount: "", fee: "", collateral: "", deadline: "", state: "", borrower: "", lender: "" };
}
export const Loan = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.fee !== "") {
            writer.uint32(26).string(message.fee);
        }
        if (message.collateral !== "") {
            writer.uint32(34).string(message.collateral);
        }
        if (message.deadline !== "") {
            writer.uint32(42).string(message.deadline);
        }
        if (message.state !== "") {
            writer.uint32(50).string(message.state);
        }
        if (message.borrower !== "") {
            writer.uint32(58).string(message.borrower);
        }
        if (message.lender !== "") {
            writer.uint32(66).string(message.lender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoan();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fee = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.collateral = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.deadline = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.state = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.borrower = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.lender = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            amount: isSet(object.amount) ? String(object.amount) : "",
            fee: isSet(object.fee) ? String(object.fee) : "",
            collateral: isSet(object.collateral) ? String(object.collateral) : "",
            deadline: isSet(object.deadline) ? String(object.deadline) : "",
            state: isSet(object.state) ? String(object.state) : "",
            borrower: isSet(object.borrower) ? String(object.borrower) : "",
            lender: isSet(object.lender) ? String(object.lender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.amount !== "") {
            obj.amount = message.amount;
        }
        if (message.fee !== "") {
            obj.fee = message.fee;
        }
        if (message.collateral !== "") {
            obj.collateral = message.collateral;
        }
        if (message.deadline !== "") {
            obj.deadline = message.deadline;
        }
        if (message.state !== "") {
            obj.state = message.state;
        }
        if (message.borrower !== "") {
            obj.borrower = message.borrower;
        }
        if (message.lender !== "") {
            obj.lender = message.lender;
        }
        return obj;
    },
    create(base) {
        return Loan.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoan();
        message.id = object.id ?? 0;
        message.amount = object.amount ?? "";
        message.fee = object.fee ?? "";
        message.collateral = object.collateral ?? "";
        message.deadline = object.deadline ?? "";
        message.state = object.state ?? "";
        message.borrower = object.borrower ?? "";
        message.lender = object.lender ?? "";
        return message;
    },
};
const tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
