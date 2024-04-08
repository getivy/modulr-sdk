export { ModulrPaymentStatus, ModulrPaymentErrorStatuses }

enum ModulrPaymentStatus {
  'SUBMITTED' = 'SUBMITTED',
  'SCREENING_REQ' = 'SCREENING_REQ',
  'VALIDATED' = 'VALIDATED',
  'PENDING_FOR_DATE' = 'PENDING_FOR_DATE',
  'PENDING_FOR_FUNDS' = 'PENDING_FOR_FUNDS',
  'EXT_PROC' = 'EXT_PROC',
  'PROCESSED' = 'PROCESSED',
  'RECONCILED' = 'RECONCILED',
  'ER_INVALID' = 'ER_INVALID',
  'ER_EXTCONN' = 'ER_EXTCONN',
  'ER_EXTSYS' = 'ER_EXTSYS',
  'ER_EXPIRED' = 'ER_EXPIRED',
  'ER_GENERAL' = 'ER_GENERAL',
  'ER_BATCH' = 'ER_BATCH',
  'EXT_SENT' = 'EXT_SENT',
  'UNALLOCATED' = 'UNALLOCATED',
  'HELD' = 'HELD',
  'RETURNED' = 'RETURNED',
  'CANCELLED' = 'CANCELLED',
  'REPROCESSING' = 'REPROCESSING',
  'VOID' = 'VOID',
  'CLEARING' = 'CLEARING',
  'HELD_IN_SUSPENSE' = 'HELD_IN_SUSPENSE',
}

const ModulrPaymentErrorStatuses = [
  ModulrPaymentStatus.ER_INVALID,
  ModulrPaymentStatus.ER_EXTCONN,
  ModulrPaymentStatus.ER_EXTSYS,
  ModulrPaymentStatus.ER_EXPIRED,
  ModulrPaymentStatus.ER_GENERAL,
  ModulrPaymentStatus.ER_BATCH,
]
