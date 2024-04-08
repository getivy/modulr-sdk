"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulrPaymentErrorStatuses = exports.ModulrPaymentStatus = void 0;
var ModulrPaymentStatus;
(function (ModulrPaymentStatus) {
    ModulrPaymentStatus["SUBMITTED"] = "SUBMITTED";
    ModulrPaymentStatus["SCREENING_REQ"] = "SCREENING_REQ";
    ModulrPaymentStatus["VALIDATED"] = "VALIDATED";
    ModulrPaymentStatus["PENDING_FOR_DATE"] = "PENDING_FOR_DATE";
    ModulrPaymentStatus["PENDING_FOR_FUNDS"] = "PENDING_FOR_FUNDS";
    ModulrPaymentStatus["EXT_PROC"] = "EXT_PROC";
    ModulrPaymentStatus["PROCESSED"] = "PROCESSED";
    ModulrPaymentStatus["RECONCILED"] = "RECONCILED";
    ModulrPaymentStatus["ER_INVALID"] = "ER_INVALID";
    ModulrPaymentStatus["ER_EXTCONN"] = "ER_EXTCONN";
    ModulrPaymentStatus["ER_EXTSYS"] = "ER_EXTSYS";
    ModulrPaymentStatus["ER_EXPIRED"] = "ER_EXPIRED";
    ModulrPaymentStatus["ER_GENERAL"] = "ER_GENERAL";
    ModulrPaymentStatus["ER_BATCH"] = "ER_BATCH";
    ModulrPaymentStatus["EXT_SENT"] = "EXT_SENT";
    ModulrPaymentStatus["UNALLOCATED"] = "UNALLOCATED";
    ModulrPaymentStatus["HELD"] = "HELD";
    ModulrPaymentStatus["RETURNED"] = "RETURNED";
    ModulrPaymentStatus["CANCELLED"] = "CANCELLED";
    ModulrPaymentStatus["REPROCESSING"] = "REPROCESSING";
    ModulrPaymentStatus["VOID"] = "VOID";
    ModulrPaymentStatus["CLEARING"] = "CLEARING";
    ModulrPaymentStatus["HELD_IN_SUSPENSE"] = "HELD_IN_SUSPENSE";
})(ModulrPaymentStatus || (exports.ModulrPaymentStatus = ModulrPaymentStatus = {}));
const ModulrPaymentErrorStatuses = [
    ModulrPaymentStatus.ER_INVALID,
    ModulrPaymentStatus.ER_EXTCONN,
    ModulrPaymentStatus.ER_EXTSYS,
    ModulrPaymentStatus.ER_EXPIRED,
    ModulrPaymentStatus.ER_GENERAL,
    ModulrPaymentStatus.ER_BATCH,
];
exports.ModulrPaymentErrorStatuses = ModulrPaymentErrorStatuses;
