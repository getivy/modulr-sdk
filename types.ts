import type { FromSchema } from 'json-schema-to-ts'
import * as schemas from './schemas'

export type ActivateCardMetadataParam = FromSchema<typeof schemas.ActivateCard.metadata>
export type ActivateCardResponse400 = FromSchema<typeof schemas.ActivateCard.response['400']>
export type ActivateCardResponse405 = FromSchema<typeof schemas.ActivateCard.response['405']>
export type AddCustomerNotificationBodyParam = FromSchema<
  typeof schemas.AddCustomerNotification.body
>
export type AddCustomerNotificationMetadataParam = FromSchema<
  typeof schemas.AddCustomerNotification.metadata
>
export type AddCustomerNotificationResponse201 = FromSchema<
  typeof schemas.AddCustomerNotification.response['201']
>
export type AddCustomerNotificationResponse400 = FromSchema<
  typeof schemas.AddCustomerNotification.response['400']
>
export type AddCustomerNotificationResponse405 = FromSchema<
  typeof schemas.AddCustomerNotification.response['405']
>
export type AddPartnerNotificationBodyParam = FromSchema<typeof schemas.AddPartnerNotification.body>
export type AddPartnerNotificationMetadataParam = FromSchema<
  typeof schemas.AddPartnerNotification.metadata
>
export type AddPartnerNotificationResponse201 = FromSchema<
  typeof schemas.AddPartnerNotification.response['201']
>
export type AddPartnerNotificationResponse400 = FromSchema<
  typeof schemas.AddPartnerNotification.response['400']
>
export type AddPartnerNotificationResponse405 = FromSchema<
  typeof schemas.AddPartnerNotification.response['405']
>
export type BlockAccountMetadataParam = FromSchema<typeof schemas.BlockAccount.metadata>
export type BlockAccountResponse400 = FromSchema<typeof schemas.BlockAccount.response['400']>
export type BlockAccountResponse405 = FromSchema<typeof schemas.BlockAccount.response['405']>
export type BlockCardMetadataParam = FromSchema<typeof schemas.BlockCard.metadata>
export type BlockCardResponse400 = FromSchema<typeof schemas.BlockCard.response['400']>
export type BlockCardResponse405 = FromSchema<typeof schemas.BlockCard.response['405']>
export type CancelBatchPaymentsMetadataParam = FromSchema<
  typeof schemas.CancelBatchPayments.metadata
>
export type CancelBatchPaymentsResponse400 = FromSchema<
  typeof schemas.CancelBatchPayments.response['400']
>
export type CancelBatchPaymentsResponse405 = FromSchema<
  typeof schemas.CancelBatchPayments.response['405']
>
export type CancelCardBodyParam = FromSchema<typeof schemas.CancelCard.body>
export type CancelCardMetadataParam = FromSchema<typeof schemas.CancelCard.metadata>
export type CancelCardResponse400 = FromSchema<typeof schemas.CancelCard.response['400']>
export type CancelCardResponse405 = FromSchema<typeof schemas.CancelCard.response['405']>
export type CancelCollectionMetadataParam = FromSchema<typeof schemas.CancelCollection.metadata>
export type CancelCollectionResponse400 = FromSchema<
  typeof schemas.CancelCollection.response['400']
>
export type CancelCollectionResponse404 = FromSchema<
  typeof schemas.CancelCollection.response['404']
>
export type CancelCollectionResponse405 = FromSchema<
  typeof schemas.CancelCollection.response['405']
>
export type CancelCollectionScheduleMetadataParam = FromSchema<
  typeof schemas.CancelCollectionSchedule.metadata
>
export type CancelCollectionScheduleResponse400 = FromSchema<
  typeof schemas.CancelCollectionSchedule.response['400']
>
export type CancelCollectionScheduleResponse404 = FromSchema<
  typeof schemas.CancelCollectionSchedule.response['404']
>
export type CancelCollectionScheduleResponse405 = FromSchema<
  typeof schemas.CancelCollectionSchedule.response['405']
>
export type CancelDdosMandateBodyParam = FromSchema<typeof schemas.CancelDdosMandate.body>
export type CancelDdosMandateResponse400 = FromSchema<
  typeof schemas.CancelDdosMandate.response['400']
>
export type CancelDdosMandateResponse405 = FromSchema<
  typeof schemas.CancelDdosMandate.response['405']
>
export type CancelMandateBodyParam = FromSchema<typeof schemas.CancelMandate.body>
export type CancelMandateMetadataParam = FromSchema<typeof schemas.CancelMandate.metadata>
export type CancelMandateResponse400 = FromSchema<typeof schemas.CancelMandate.response['400']>
export type CancelMandateResponse404 = FromSchema<typeof schemas.CancelMandate.response['404']>
export type CancelMandateResponse405 = FromSchema<typeof schemas.CancelMandate.response['405']>
export type CardEnquiryBodyParam = FromSchema<typeof schemas.CardEnquiry.body>
export type CardEnquiryResponse200 = FromSchema<typeof schemas.CardEnquiry.response['200']>
export type CardEnquiryResponse400 = FromSchema<typeof schemas.CardEnquiry.response['400']>
export type CardEnquiryResponse405 = FromSchema<typeof schemas.CardEnquiry.response['405']>
export type CloseAccountMetadataParam = FromSchema<typeof schemas.CloseAccount.metadata>
export type CloseAccountResponse400 = FromSchema<typeof schemas.CloseAccount.response['400']>
export type CloseAccountResponse405 = FromSchema<typeof schemas.CloseAccount.response['405']>
export type CreateAccessGroupBodyParam = FromSchema<typeof schemas.CreateAccessGroup.body>
export type CreateAccessGroupResponse201 = FromSchema<
  typeof schemas.CreateAccessGroup.response['201']
>
export type CreateAccessGroupResponse400 = FromSchema<
  typeof schemas.CreateAccessGroup.response['400']
>
export type CreateAccessGroupResponse405 = FromSchema<
  typeof schemas.CreateAccessGroup.response['405']
>
export type CreateAccountBodyParam = FromSchema<typeof schemas.CreateAccount.body>
export type CreateAccountMetadataParam = FromSchema<typeof schemas.CreateAccount.metadata>
export type CreateAccountResponse201 = FromSchema<typeof schemas.CreateAccount.response['201']>
export type CreateAccountResponse400 = FromSchema<typeof schemas.CreateAccount.response['400']>
export type CreateAccountResponse405 = FromSchema<typeof schemas.CreateAccount.response['405']>
export type CreateAuthorisationBodyParam = FromSchema<typeof schemas.CreateAuthorisation.body>
export type CreateAuthorisationMetadataParam = FromSchema<
  typeof schemas.CreateAuthorisation.metadata
>
export type CreateAuthorisationResponse201 = FromSchema<
  typeof schemas.CreateAuthorisation.response['201']
>
export type CreateAuthorisationResponse400 = FromSchema<
  typeof schemas.CreateAuthorisation.response['400']
>
export type CreateAuthorisationResponse405 = FromSchema<
  typeof schemas.CreateAuthorisation.response['405']
>
export type CreateBeneficiaryBodyParam = FromSchema<typeof schemas.CreateBeneficiary.body>
export type CreateBeneficiaryMetadataParam = FromSchema<typeof schemas.CreateBeneficiary.metadata>
export type CreateBeneficiaryResponse201 = FromSchema<
  typeof schemas.CreateBeneficiary.response['201']
>
export type CreateBeneficiaryResponse400 = FromSchema<
  typeof schemas.CreateBeneficiary.response['400']
>
export type CreateBeneficiaryResponse405 = FromSchema<
  typeof schemas.CreateBeneficiary.response['405']
>
export type CreateCardBodyParam = FromSchema<typeof schemas.CreateCard.body>
export type CreateCardMetadataParam = FromSchema<typeof schemas.CreateCard.metadata>
export type CreateCardResponse201 = FromSchema<typeof schemas.CreateCard.response['201']>
export type CreateCardResponse400 = FromSchema<typeof schemas.CreateCard.response['400']>
export type CreateCardResponse405 = FromSchema<typeof schemas.CreateCard.response['405']>
export type CreateCollectionScheduleBodyParam = FromSchema<
  typeof schemas.CreateCollectionSchedule.body
>
export type CreateCollectionScheduleMetadataParam = FromSchema<
  typeof schemas.CreateCollectionSchedule.metadata
>
export type CreateCollectionScheduleResponse200 = FromSchema<
  typeof schemas.CreateCollectionSchedule.response['200']
>
export type CreateCollectionScheduleResponse400 = FromSchema<
  typeof schemas.CreateCollectionSchedule.response['400']
>
export type CreateCollectionScheduleResponse404 = FromSchema<
  typeof schemas.CreateCollectionSchedule.response['404']
>
export type CreateCollectionScheduleResponse405 = FromSchema<
  typeof schemas.CreateCollectionSchedule.response['405']
>
export type CreateCustomerBodyParam = FromSchema<typeof schemas.CreateCustomer.body>
export type CreateCustomerResponse201 = FromSchema<typeof schemas.CreateCustomer.response['201']>
export type CreateCustomerResponse400 = FromSchema<typeof schemas.CreateCustomer.response['400']>
export type CreateCustomerResponse405 = FromSchema<typeof schemas.CreateCustomer.response['405']>
export type CreateMandateBodyParam = FromSchema<typeof schemas.CreateMandate.body>
export type CreateMandateMetadataParam = FromSchema<typeof schemas.CreateMandate.metadata>
export type CreateMandateResponse200 = FromSchema<typeof schemas.CreateMandate.response['200']>
export type CreateMandateResponse400 = FromSchema<typeof schemas.CreateMandate.response['400']>
export type CreateMandateResponse404 = FromSchema<typeof schemas.CreateMandate.response['404']>
export type CreateMandateResponse405 = FromSchema<typeof schemas.CreateMandate.response['405']>
export type CreateOutboundCopBodyParam = FromSchema<typeof schemas.CreateOutboundCop.body>
export type CreateOutboundCopResponse201 = FromSchema<
  typeof schemas.CreateOutboundCop.response['201']
>
export type CreateOutboundCopResponse400 = FromSchema<
  typeof schemas.CreateOutboundCop.response['400']
>
export type CreateOutboundCopResponse404 = FromSchema<
  typeof schemas.CreateOutboundCop.response['404']
>
export type CreateOutboundCopResponse429 = FromSchema<
  typeof schemas.CreateOutboundCop.response['429']
>
export type CreateOutboundCopResponse500 = FromSchema<
  typeof schemas.CreateOutboundCop.response['500']
>
export type CreateOutboundCopResponse503 = FromSchema<
  typeof schemas.CreateOutboundCop.response['503']
>
export type CreatePaymentInitiationBodyParam = FromSchema<
  typeof schemas.CreatePaymentInitiation.body
>
export type CreatePaymentInitiationResponse201 = FromSchema<
  typeof schemas.CreatePaymentInitiation.response['201']
>
export type CreatePaymentInitiationResponse400 = FromSchema<
  typeof schemas.CreatePaymentInitiation.response['400']
>
export type CreatePaymentInitiationResponse405 = FromSchema<
  typeof schemas.CreatePaymentInitiation.response['405']
>
export type CreatePaymentsBodyParam = FromSchema<typeof schemas.CreatePayments.body>
export type CreatePaymentsResponse400 = FromSchema<typeof schemas.CreatePayments.response['400']>
export type CreatePaymentsResponse405 = FromSchema<typeof schemas.CreatePayments.response['405']>
export type CreatePhysicalCardBodyParam = FromSchema<typeof schemas.CreatePhysicalCard.body>
export type CreatePhysicalCardMetadataParam = FromSchema<typeof schemas.CreatePhysicalCard.metadata>
export type CreatePhysicalCardResponse202 = FromSchema<
  typeof schemas.CreatePhysicalCard.response['202']
>
export type CreatePhysicalCardResponse400 = FromSchema<
  typeof schemas.CreatePhysicalCard.response['400']
>
export type CreatePhysicalCardResponse405 = FromSchema<
  typeof schemas.CreatePhysicalCard.response['405']
>
export type CreateRuleBodyParam = FromSchema<typeof schemas.CreateRule.body>
export type CreateRuleResponse201 = FromSchema<typeof schemas.CreateRule.response['201']>
export type CreateRuleResponse400 = FromSchema<typeof schemas.CreateRule.response['400']>
export type CreateRuleResponse405 = FromSchema<typeof schemas.CreateRule.response['405']>
export type CreateStandingOrderInitiationBodyParam = FromSchema<
  typeof schemas.CreateStandingOrderInitiation.body
>
export type CreateStandingOrderInitiationResponse201 = FromSchema<
  typeof schemas.CreateStandingOrderInitiation.response['201']
>
export type CreateStandingOrderInitiationResponse400 = FromSchema<
  typeof schemas.CreateStandingOrderInitiation.response['400']
>
export type CreateStandingOrderInitiationResponse405 = FromSchema<
  typeof schemas.CreateStandingOrderInitiation.response['405']
>
export type DeleteBeneficiariesMetadataParam = FromSchema<
  typeof schemas.DeleteBeneficiaries.metadata
>
export type DeleteBeneficiariesResponse200 = FromSchema<
  typeof schemas.DeleteBeneficiaries.response['200']
>
export type DeleteBeneficiariesResponse207 = FromSchema<
  typeof schemas.DeleteBeneficiaries.response['207']
>
export type DeleteBeneficiariesResponse400 = FromSchema<
  typeof schemas.DeleteBeneficiaries.response['400']
>
export type DeleteBeneficiariesResponse405 = FromSchema<
  typeof schemas.DeleteBeneficiaries.response['405']
>
export type EditAccountBodyParam = FromSchema<typeof schemas.EditAccount.body>
export type EditAccountMetadataParam = FromSchema<typeof schemas.EditAccount.metadata>
export type EditAccountResponse200 = FromSchema<typeof schemas.EditAccount.response['200']>
export type EditAccountResponse400 = FromSchema<typeof schemas.EditAccount.response['400']>
export type EditAccountResponse405 = FromSchema<typeof schemas.EditAccount.response['405']>
export type EditCustomerBodyParam = FromSchema<typeof schemas.EditCustomer.body>
export type EditCustomerMetadataParam = FromSchema<typeof schemas.EditCustomer.metadata>
export type EditCustomerNotificationBodyParam = FromSchema<
  typeof schemas.EditCustomerNotification.body
>
export type EditCustomerNotificationMetadataParam = FromSchema<
  typeof schemas.EditCustomerNotification.metadata
>
export type EditCustomerNotificationResponse200 = FromSchema<
  typeof schemas.EditCustomerNotification.response['200']
>
export type EditCustomerNotificationResponse400 = FromSchema<
  typeof schemas.EditCustomerNotification.response['400']
>
export type EditCustomerNotificationResponse404 = FromSchema<
  typeof schemas.EditCustomerNotification.response['404']
>
export type EditCustomerNotificationResponse405 = FromSchema<
  typeof schemas.EditCustomerNotification.response['405']
>
export type EditCustomerResponse200 = FromSchema<typeof schemas.EditCustomer.response['200']>
export type EditCustomerResponse400 = FromSchema<typeof schemas.EditCustomer.response['400']>
export type EditCustomerResponse405 = FromSchema<typeof schemas.EditCustomer.response['405']>
export type EditPartnerNotificationBodyParam = FromSchema<
  typeof schemas.EditPartnerNotification.body
>
export type EditPartnerNotificationMetadataParam = FromSchema<
  typeof schemas.EditPartnerNotification.metadata
>
export type EditPartnerNotificationResponse200 = FromSchema<
  typeof schemas.EditPartnerNotification.response['200']
>
export type EditPartnerNotificationResponse400 = FromSchema<
  typeof schemas.EditPartnerNotification.response['400']
>
export type EditPartnerNotificationResponse404 = FromSchema<
  typeof schemas.EditPartnerNotification.response['404']
>
export type EditPartnerNotificationResponse405 = FromSchema<
  typeof schemas.EditPartnerNotification.response['405']
>
export type ExpireAuthorisationMetadataParam = FromSchema<
  typeof schemas.ExpireAuthorisation.metadata
>
export type ExpireAuthorisationResponse400 = FromSchema<
  typeof schemas.ExpireAuthorisation.response['400']
>
export type ExpireAuthorisationResponse405 = FromSchema<
  typeof schemas.ExpireAuthorisation.response['405']
>
export type GenerateCardHolderTokenBodyParam = FromSchema<
  typeof schemas.GenerateCardHolderToken.body
>
export type GenerateCardHolderTokenMetadataParam = FromSchema<
  typeof schemas.GenerateCardHolderToken.metadata
>
export type GenerateCardHolderTokenResponse200 = FromSchema<
  typeof schemas.GenerateCardHolderToken.response['200']
>
export type GenerateCardHolderTokenResponse400 = FromSchema<
  typeof schemas.GenerateCardHolderToken.response['400']
>
export type GenerateCardHolderTokenResponse405 = FromSchema<
  typeof schemas.GenerateCardHolderToken.response['405']
>
export type GenerateCsvMetadataParam = FromSchema<typeof schemas.GenerateCsv.metadata>
export type GenerateCsvResponse400 = FromSchema<typeof schemas.GenerateCsv.response['400']>
export type GenerateCsvResponse405 = FromSchema<typeof schemas.GenerateCsv.response['405']>
export type GetAccessGroupMetadataParam = FromSchema<typeof schemas.GetAccessGroup.metadata>
export type GetAccessGroupResponse200 = FromSchema<typeof schemas.GetAccessGroup.response['200']>
export type GetAccessGroupResponse400 = FromSchema<typeof schemas.GetAccessGroup.response['400']>
export type GetAccessGroupResponse405 = FromSchema<typeof schemas.GetAccessGroup.response['405']>
export type GetAccessGroupsMetadataParam = FromSchema<typeof schemas.GetAccessGroups.metadata>
export type GetAccessGroupsResponse200 = FromSchema<typeof schemas.GetAccessGroups.response['200']>
export type GetAccessGroupsResponse400 = FromSchema<typeof schemas.GetAccessGroups.response['400']>
export type GetAccessGroupsResponse405 = FromSchema<typeof schemas.GetAccessGroups.response['405']>
export type GetAccountMetadataParam = FromSchema<typeof schemas.GetAccount.metadata>
export type GetAccountResponse200 = FromSchema<typeof schemas.GetAccount.response['200']>
export type GetAccountResponse400 = FromSchema<typeof schemas.GetAccount.response['400']>
export type GetAccountResponse405 = FromSchema<typeof schemas.GetAccount.response['405']>
export type GetAccountsByCustomerMetadataParam = FromSchema<
  typeof schemas.GetAccountsByCustomer.metadata
>
export type GetAccountsByCustomerResponse200 = FromSchema<
  typeof schemas.GetAccountsByCustomer.response['200']
>
export type GetAccountsByCustomerResponse400 = FromSchema<
  typeof schemas.GetAccountsByCustomer.response['400']
>
export type GetAccountsByCustomerResponse405 = FromSchema<
  typeof schemas.GetAccountsByCustomer.response['405']
>
export type GetAccountsMetadataParam = FromSchema<typeof schemas.GetAccounts.metadata>
export type GetAccountsResponse200 = FromSchema<typeof schemas.GetAccounts.response['200']>
export type GetAccountsResponse400 = FromSchema<typeof schemas.GetAccounts.response['400']>
export type GetAccountsResponse405 = FromSchema<typeof schemas.GetAccounts.response['405']>
export type GetAllCustomerNotificationsMetadataParam = FromSchema<
  typeof schemas.GetAllCustomerNotifications.metadata
>
export type GetAllCustomerNotificationsResponse200 = FromSchema<
  typeof schemas.GetAllCustomerNotifications.response['200']
>
export type GetAllCustomerNotificationsResponse400 = FromSchema<
  typeof schemas.GetAllCustomerNotifications.response['400']
>
export type GetAllCustomerNotificationsResponse404 = FromSchema<
  typeof schemas.GetAllCustomerNotifications.response['404']
>
export type GetAllCustomerNotificationsResponse405 = FromSchema<
  typeof schemas.GetAllCustomerNotifications.response['405']
>
export type GetAllPartnerNotificationsMetadataParam = FromSchema<
  typeof schemas.GetAllPartnerNotifications.metadata
>
export type GetAllPartnerNotificationsResponse200 = FromSchema<
  typeof schemas.GetAllPartnerNotifications.response['200']
>
export type GetAllPartnerNotificationsResponse400 = FromSchema<
  typeof schemas.GetAllPartnerNotifications.response['400']
>
export type GetAllPartnerNotificationsResponse404 = FromSchema<
  typeof schemas.GetAllPartnerNotifications.response['404']
>
export type GetAllPartnerNotificationsResponse405 = FromSchema<
  typeof schemas.GetAllPartnerNotifications.response['405']
>
export type GetAspsProvidersResponse200 = FromSchema<
  typeof schemas.GetAspsProviders.response['200']
>
export type GetAspsProvidersResponse400 = FromSchema<
  typeof schemas.GetAspsProviders.response['400']
>
export type GetAspsProvidersResponse405 = FromSchema<
  typeof schemas.GetAspsProviders.response['405']
>
export type GetAsyncTaskMetadataParam = FromSchema<typeof schemas.GetAsyncTask.metadata>
export type GetAsyncTaskResponse200 = FromSchema<typeof schemas.GetAsyncTask.response['200']>
export type GetAsyncTaskResponse400 = FromSchema<typeof schemas.GetAsyncTask.response['400']>
export type GetAsyncTaskResponse405 = FromSchema<typeof schemas.GetAsyncTask.response['405']>
export type GetAsyncTasksMetadataParam = FromSchema<typeof schemas.GetAsyncTasks.metadata>
export type GetAsyncTasksResponse200 = FromSchema<typeof schemas.GetAsyncTasks.response['200']>
export type GetAsyncTasksResponse400 = FromSchema<typeof schemas.GetAsyncTasks.response['400']>
export type GetAsyncTasksResponse405 = FromSchema<typeof schemas.GetAsyncTasks.response['405']>
export type GetBatchPaymentMetadataParam = FromSchema<typeof schemas.GetBatchPayment.metadata>
export type GetBatchPaymentResponse200 = FromSchema<typeof schemas.GetBatchPayment.response['200']>
export type GetBatchPaymentResponse400 = FromSchema<typeof schemas.GetBatchPayment.response['400']>
export type GetBatchPaymentResponse405 = FromSchema<typeof schemas.GetBatchPayment.response['405']>
export type GetBatchPaymentsMetadataParam = FromSchema<typeof schemas.GetBatchPayments.metadata>
export type GetBatchPaymentsResponse200 = FromSchema<
  typeof schemas.GetBatchPayments.response['200']
>
export type GetBatchPaymentsResponse400 = FromSchema<
  typeof schemas.GetBatchPayments.response['400']
>
export type GetBatchPaymentsResponse405 = FromSchema<
  typeof schemas.GetBatchPayments.response['405']
>
export type GetBeneficiariesMetadataParam = FromSchema<typeof schemas.GetBeneficiaries.metadata>
export type GetBeneficiariesResponse200 = FromSchema<
  typeof schemas.GetBeneficiaries.response['200']
>
export type GetBeneficiariesResponse400 = FromSchema<
  typeof schemas.GetBeneficiaries.response['400']
>
export type GetBeneficiariesResponse405 = FromSchema<
  typeof schemas.GetBeneficiaries.response['405']
>
export type GetCardActivitiesMetadataParam = FromSchema<typeof schemas.GetCardActivities.metadata>
export type GetCardActivitiesResponse200 = FromSchema<
  typeof schemas.GetCardActivities.response['200']
>
export type GetCardActivitiesResponse400 = FromSchema<
  typeof schemas.GetCardActivities.response['400']
>
export type GetCardActivitiesResponse405 = FromSchema<
  typeof schemas.GetCardActivities.response['405']
>
export type GetCardMetadataParam = FromSchema<typeof schemas.GetCard.metadata>
export type GetCardResponse200 = FromSchema<typeof schemas.GetCard.response['200']>
export type GetCardResponse400 = FromSchema<typeof schemas.GetCard.response['400']>
export type GetCardResponse405 = FromSchema<typeof schemas.GetCard.response['405']>
export type GetCardsByAccountMetadataParam = FromSchema<typeof schemas.GetCardsByAccount.metadata>
export type GetCardsByAccountResponse200 = FromSchema<
  typeof schemas.GetCardsByAccount.response['200']
>
export type GetCardsByAccountResponse400 = FromSchema<
  typeof schemas.GetCardsByAccount.response['400']
>
export type GetCardsByAccountResponse405 = FromSchema<
  typeof schemas.GetCardsByAccount.response['405']
>
export type GetCardsMetadataParam = FromSchema<typeof schemas.GetCards.metadata>
export type GetCardsResponse200 = FromSchema<typeof schemas.GetCards.response['200']>
export type GetCardsResponse400 = FromSchema<typeof schemas.GetCards.response['400']>
export type GetCardsResponse405 = FromSchema<typeof schemas.GetCards.response['405']>
export type GetCollectionSchedulesMetadataParam = FromSchema<
  typeof schemas.GetCollectionSchedules.metadata
>
export type GetCollectionSchedulesResponse200 = FromSchema<
  typeof schemas.GetCollectionSchedules.response['200']
>
export type GetCollectionSchedulesResponse400 = FromSchema<
  typeof schemas.GetCollectionSchedules.response['400']
>
export type GetCollectionSchedulesResponse404 = FromSchema<
  typeof schemas.GetCollectionSchedules.response['404']
>
export type GetCollectionSchedulesResponse405 = FromSchema<
  typeof schemas.GetCollectionSchedules.response['405']
>
export type GetCollectionsMetadataParam = FromSchema<typeof schemas.GetCollections.metadata>
export type GetCollectionsResponse200 = FromSchema<typeof schemas.GetCollections.response['200']>
export type GetCollectionsResponse400 = FromSchema<typeof schemas.GetCollections.response['400']>
export type GetCollectionsResponse404 = FromSchema<typeof schemas.GetCollections.response['404']>
export type GetCollectionsResponse405 = FromSchema<typeof schemas.GetCollections.response['405']>
export type GetCreatePhysicalCardAsyncTasksByAccountMetadataParam = FromSchema<
  typeof schemas.GetCreatePhysicalCardAsyncTasksByAccount.metadata
>
export type GetCreatePhysicalCardAsyncTasksByAccountResponse200 = FromSchema<
  typeof schemas.GetCreatePhysicalCardAsyncTasksByAccount.response['200']
>
export type GetCreatePhysicalCardAsyncTasksByAccountResponse400 = FromSchema<
  typeof schemas.GetCreatePhysicalCardAsyncTasksByAccount.response['400']
>
export type GetCreatePhysicalCardAsyncTasksByAccountResponse405 = FromSchema<
  typeof schemas.GetCreatePhysicalCardAsyncTasksByAccount.response['405']
>
export type GetCustomerMetadataParam = FromSchema<typeof schemas.GetCustomer.metadata>
export type GetCustomerNotificationMetadataParam = FromSchema<
  typeof schemas.GetCustomerNotification.metadata
>
export type GetCustomerNotificationResponse200 = FromSchema<
  typeof schemas.GetCustomerNotification.response['200']
>
export type GetCustomerNotificationResponse400 = FromSchema<
  typeof schemas.GetCustomerNotification.response['400']
>
export type GetCustomerNotificationResponse404 = FromSchema<
  typeof schemas.GetCustomerNotification.response['404']
>
export type GetCustomerNotificationResponse405 = FromSchema<
  typeof schemas.GetCustomerNotification.response['405']
>
export type GetCustomerResponse200 = FromSchema<typeof schemas.GetCustomer.response['200']>
export type GetCustomerResponse400 = FromSchema<typeof schemas.GetCustomer.response['400']>
export type GetCustomerResponse405 = FromSchema<typeof schemas.GetCustomer.response['405']>
export type GetCustomersMetadataParam = FromSchema<typeof schemas.GetCustomers.metadata>
export type GetCustomersResponse200 = FromSchema<typeof schemas.GetCustomers.response['200']>
export type GetCustomersResponse400 = FromSchema<typeof schemas.GetCustomers.response['400']>
export type GetCustomersResponse405 = FromSchema<typeof schemas.GetCustomers.response['405']>
export type GetFailedWebHooksMetadataParam = FromSchema<typeof schemas.GetFailedWebHooks.metadata>
export type GetFailedWebHooksResponse200 = FromSchema<
  typeof schemas.GetFailedWebHooks.response['200']
>
export type GetFailedWebHooksResponse400 = FromSchema<
  typeof schemas.GetFailedWebHooks.response['400']
>
export type GetFailedWebHooksResponse405 = FromSchema<
  typeof schemas.GetFailedWebHooks.response['405']
>
export type GetLocksMetadataParam = FromSchema<typeof schemas.GetLocks.metadata>
export type GetLocksResponse200 = FromSchema<typeof schemas.GetLocks.response['200']>
export type GetLocksResponse400 = FromSchema<typeof schemas.GetLocks.response['400']>
export type GetLocksResponse405 = FromSchema<typeof schemas.GetLocks.response['405']>
export type GetMandatesMetadataParam = FromSchema<typeof schemas.GetMandates.metadata>
export type GetMandatesResponse200 = FromSchema<typeof schemas.GetMandates.response['200']>
export type GetMandatesResponse400 = FromSchema<typeof schemas.GetMandates.response['400']>
export type GetMandatesResponse404 = FromSchema<typeof schemas.GetMandates.response['404']>
export type GetMandatesResponse405 = FromSchema<typeof schemas.GetMandates.response['405']>
export type GetPartnerNotificationMetadataParam = FromSchema<
  typeof schemas.GetPartnerNotification.metadata
>
export type GetPartnerNotificationResponse200 = FromSchema<
  typeof schemas.GetPartnerNotification.response['200']
>
export type GetPartnerNotificationResponse400 = FromSchema<
  typeof schemas.GetPartnerNotification.response['400']
>
export type GetPartnerNotificationResponse404 = FromSchema<
  typeof schemas.GetPartnerNotification.response['404']
>
export type GetPartnerNotificationResponse405 = FromSchema<
  typeof schemas.GetPartnerNotification.response['405']
>
export type GetPaymentInitiationMetadataParam = FromSchema<
  typeof schemas.GetPaymentInitiation.metadata
>
export type GetPaymentInitiationResponse200 = FromSchema<
  typeof schemas.GetPaymentInitiation.response['200']
>
export type GetPaymentInitiationResponse400 = FromSchema<
  typeof schemas.GetPaymentInitiation.response['400']
>
export type GetPaymentInitiationResponse404 = FromSchema<
  typeof schemas.GetPaymentInitiation.response['404']
>
export type GetPaymentInitiationResponse405 = FromSchema<
  typeof schemas.GetPaymentInitiation.response['405']
>
export type GetPaymentsMetadataParam = FromSchema<typeof schemas.GetPayments.metadata>
export type GetPaymentsResponse200 = FromSchema<typeof schemas.GetPayments.response['200']>
export type GetPaymentsResponse400 = FromSchema<typeof schemas.GetPayments.response['400']>
export type GetPaymentsResponse405 = FromSchema<typeof schemas.GetPayments.response['405']>
export type GetRuleMetadataParam = FromSchema<typeof schemas.GetRule.metadata>
export type GetRuleResponse200 = FromSchema<typeof schemas.GetRule.response['200']>
export type GetRuleResponse400 = FromSchema<typeof schemas.GetRule.response['400']>
export type GetRuleResponse405 = FromSchema<typeof schemas.GetRule.response['405']>
export type GetRulesMetadataParam = FromSchema<typeof schemas.GetRules.metadata>
export type GetRulesResponse200 = FromSchema<typeof schemas.GetRules.response['200']>
export type GetRulesResponse400 = FromSchema<typeof schemas.GetRules.response['400']>
export type GetRulesResponse405 = FromSchema<typeof schemas.GetRules.response['405']>
export type GetSecureCardDetailsResponse200 = FromSchema<
  typeof schemas.GetSecureCardDetails.response['200']
>
export type GetSecureCardDetailsResponse400 = FromSchema<
  typeof schemas.GetSecureCardDetails.response['400']
>
export type GetSecureCardDetailsResponse403 = FromSchema<
  typeof schemas.GetSecureCardDetails.response['403']
>
export type GetSecureCardDetailsResponse405 = FromSchema<
  typeof schemas.GetSecureCardDetails.response['405']
>
export type GetSrdAccountsMetadataParam = FromSchema<typeof schemas.GetSrdAccounts.metadata>
export type GetSrdAccountsResponse200 = FromSchema<typeof schemas.GetSrdAccounts.response['200']>
export type GetSrdAccountsResponse400 = FromSchema<typeof schemas.GetSrdAccounts.response['400']>
export type GetSrdAccountsResponse401 = FromSchema<typeof schemas.GetSrdAccounts.response['401']>
export type GetSrdAccountsResponse403 = FromSchema<typeof schemas.GetSrdAccounts.response['403']>
export type GetSrdAccountsResponse500 = FromSchema<typeof schemas.GetSrdAccounts.response['500']>
export type GetSrdAccountsResponse503 = FromSchema<typeof schemas.GetSrdAccounts.response['503']>
export type GetStandingOrderInitiationMetadataParam = FromSchema<
  typeof schemas.GetStandingOrderInitiation.metadata
>
export type GetStandingOrderInitiationResponse200 = FromSchema<
  typeof schemas.GetStandingOrderInitiation.response['200']
>
export type GetStandingOrderInitiationResponse400 = FromSchema<
  typeof schemas.GetStandingOrderInitiation.response['400']
>
export type GetStandingOrderInitiationResponse404 = FromSchema<
  typeof schemas.GetStandingOrderInitiation.response['404']
>
export type GetStandingOrderInitiationResponse405 = FromSchema<
  typeof schemas.GetStandingOrderInitiation.response['405']
>
export type GetTransactionsByAccountMetadataParam = FromSchema<
  typeof schemas.GetTransactionsByAccount.metadata
>
export type GetTransactionsByAccountResponse200 = FromSchema<
  typeof schemas.GetTransactionsByAccount.response['200']
>
export type GetTransactionsByAccountResponse400 = FromSchema<
  typeof schemas.GetTransactionsByAccount.response['400']
>
export type GetTransactionsByAccountResponse405 = FromSchema<
  typeof schemas.GetTransactionsByAccount.response['405']
>
export type MigrateMandateBodyParam = FromSchema<typeof schemas.MigrateMandate.body>
export type MigrateMandateMetadataParam = FromSchema<typeof schemas.MigrateMandate.metadata>
export type MigrateMandateResponse201 = FromSchema<typeof schemas.MigrateMandate.response['201']>
export type MigrateMandateResponse400 = FromSchema<typeof schemas.MigrateMandate.response['400']>
export type MigrateMandateResponse405 = FromSchema<typeof schemas.MigrateMandate.response['405']>
export type ModifyRuleBodyParam = FromSchema<typeof schemas.ModifyRule.body>
export type ModifyRuleMetadataParam = FromSchema<typeof schemas.ModifyRule.metadata>
export type ModifyRuleResponse200 = FromSchema<typeof schemas.ModifyRule.response['200']>
export type ModifyRuleResponse400 = FromSchema<typeof schemas.ModifyRule.response['400']>
export type ModifyRuleResponse405 = FromSchema<typeof schemas.ModifyRule.response['405']>
export type ProceedBodyParam = FromSchema<typeof schemas.Proceed.body>
export type ProceedMetadataParam = FromSchema<typeof schemas.Proceed.metadata>
export type ProceedResponse201 = FromSchema<typeof schemas.Proceed.response['201']>
export type ProceedResponse400 = FromSchema<typeof schemas.Proceed.response['400']>
export type ProceedResponse405 = FromSchema<typeof schemas.Proceed.response['405']>
export type ReinstateMandateBodyParam = FromSchema<typeof schemas.ReinstateMandate.body>
export type ReinstateMandateMetadataParam = FromSchema<typeof schemas.ReinstateMandate.metadata>
export type ReinstateMandateResponse400 = FromSchema<
  typeof schemas.ReinstateMandate.response['400']
>
export type ReinstateMandateResponse404 = FromSchema<
  typeof schemas.ReinstateMandate.response['404']
>
export type ReinstateMandateResponse405 = FromSchema<
  typeof schemas.ReinstateMandate.response['405']
>
export type RejectCollectionBodyParam = FromSchema<typeof schemas.RejectCollection.body>
export type RejectCollectionResponse400 = FromSchema<
  typeof schemas.RejectCollection.response['400']
>
export type RejectCollectionResponse405 = FromSchema<
  typeof schemas.RejectCollection.response['405']
>
export type RemoveRulesMetadataParam = FromSchema<typeof schemas.RemoveRules.metadata>
export type RemoveRulesResponse200 = FromSchema<typeof schemas.RemoveRules.response['200']>
export type RemoveRulesResponse207 = FromSchema<typeof schemas.RemoveRules.response['207']>
export type RemoveRulesResponse400 = FromSchema<typeof schemas.RemoveRules.response['400']>
export type RemoveRulesResponse405 = FromSchema<typeof schemas.RemoveRules.response['405']>
export type ReplaceCardBodyParam = FromSchema<typeof schemas.ReplaceCard.body>
export type ReplaceCardMetadataParam = FromSchema<typeof schemas.ReplaceCard.metadata>
export type ReplaceCardResponse201 = FromSchema<typeof schemas.ReplaceCard.response['201']>
export type ReplaceCardResponse400 = FromSchema<typeof schemas.ReplaceCard.response['400']>
export type ReplaceCardResponse405 = FromSchema<typeof schemas.ReplaceCard.response['405']>
export type ResetPinBodyParam = FromSchema<typeof schemas.ResetPin.body>
export type ResetPinMetadataParam = FromSchema<typeof schemas.ResetPin.metadata>
export type ResetPinResponse400 = FromSchema<typeof schemas.ResetPin.response['400']>
export type ResetPinResponse405 = FromSchema<typeof schemas.ResetPin.response['405']>
export type RetrieveMandatesMetadataParam = FromSchema<typeof schemas.RetrieveMandates.metadata>
export type RetrieveMandatesResponse200 = FromSchema<
  typeof schemas.RetrieveMandates.response['200']
>
export type RetrieveMandatesResponse400 = FromSchema<
  typeof schemas.RetrieveMandates.response['400']
>
export type RetrieveMandatesResponse405 = FromSchema<
  typeof schemas.RetrieveMandates.response['405']
>
export type RetrievePinMetadataParam = FromSchema<typeof schemas.RetrievePin.metadata>
export type RetrievePinResponse200 = FromSchema<typeof schemas.RetrievePin.response['200']>
export type RetrievePinResponse400 = FromSchema<typeof schemas.RetrievePin.response['400']>
export type RetrievePinResponse403 = FromSchema<typeof schemas.RetrievePin.response['403']>
export type RetrievePinResponse405 = FromSchema<typeof schemas.RetrievePin.response['405']>
export type ReverseAuthorisationMetadataParam = FromSchema<
  typeof schemas.ReverseAuthorisation.metadata
>
export type ReverseAuthorisationResponse400 = FromSchema<
  typeof schemas.ReverseAuthorisation.response['400']
>
export type ReverseAuthorisationResponse405 = FromSchema<
  typeof schemas.ReverseAuthorisation.response['405']
>
export type SecureResetPinBodyParam = FromSchema<typeof schemas.SecureResetPin.body>
export type SecureResetPinResponse400 = FromSchema<typeof schemas.SecureResetPin.response['400']>
export type SecureResetPinResponse405 = FromSchema<typeof schemas.SecureResetPin.response['405']>
export type SendPaymentBodyParam = FromSchema<typeof schemas.SendPayment.body>
export type SendPaymentResponse201 = FromSchema<typeof schemas.SendPayment.response['201']>
export type SendPaymentResponse400 = FromSchema<typeof schemas.SendPayment.response['400']>
export type SendPaymentResponse405 = FromSchema<typeof schemas.SendPayment.response['405']>
export type SettleAuthorisationMetadataParam = FromSchema<
  typeof schemas.SettleAuthorisation.metadata
>
export type SettleAuthorisationResponse400 = FromSchema<
  typeof schemas.SettleAuthorisation.response['400']
>
export type SettleAuthorisationResponse405 = FromSchema<
  typeof schemas.SettleAuthorisation.response['405']
>
export type StatusMetadataParam = FromSchema<typeof schemas.Status.metadata>
export type StatusResponse200 = FromSchema<typeof schemas.Status.response['200']>
export type StatusResponse400 = FromSchema<typeof schemas.Status.response['400']>
export type StatusResponse405 = FromSchema<typeof schemas.Status.response['405']>
export type SubmitBatchPaymentsBodyParam = FromSchema<typeof schemas.SubmitBatchPayments.body>
export type SubmitBatchPaymentsResponse201 = FromSchema<
  typeof schemas.SubmitBatchPayments.response['201']
>
export type SubmitBatchPaymentsResponse400 = FromSchema<
  typeof schemas.SubmitBatchPayments.response['400']
>
export type SubmitBatchPaymentsResponse405 = FromSchema<
  typeof schemas.SubmitBatchPayments.response['405']
>
export type SuspendCardMetadataParam = FromSchema<typeof schemas.SuspendCard.metadata>
export type SuspendCardResponse400 = FromSchema<typeof schemas.SuspendCard.response['400']>
export type SuspendCardResponse405 = FromSchema<typeof schemas.SuspendCard.response['405']>
export type SuspendMandateBodyParam = FromSchema<typeof schemas.SuspendMandate.body>
export type SuspendMandateMetadataParam = FromSchema<typeof schemas.SuspendMandate.metadata>
export type SuspendMandateResponse400 = FromSchema<typeof schemas.SuspendMandate.response['400']>
export type SuspendMandateResponse404 = FromSchema<typeof schemas.SuspendMandate.response['404']>
export type SuspendMandateResponse405 = FromSchema<typeof schemas.SuspendMandate.response['405']>
export type UnblockAccountMetadataParam = FromSchema<typeof schemas.UnblockAccount.metadata>
export type UnblockAccountResponse400 = FromSchema<typeof schemas.UnblockAccount.response['400']>
export type UnblockAccountResponse405 = FromSchema<typeof schemas.UnblockAccount.response['405']>
export type UnblockCardMetadataParam = FromSchema<typeof schemas.UnblockCard.metadata>
export type UnblockCardResponse400 = FromSchema<typeof schemas.UnblockCard.response['400']>
export type UnblockCardResponse405 = FromSchema<typeof schemas.UnblockCard.response['405']>
export type UnblockPinMetadataParam = FromSchema<typeof schemas.UnblockPin.metadata>
export type UnblockPinResponse400 = FromSchema<typeof schemas.UnblockPin.response['400']>
export type UnblockPinResponse405 = FromSchema<typeof schemas.UnblockPin.response['405']>
export type UnsuspendCardMetadataParam = FromSchema<typeof schemas.UnsuspendCard.metadata>
export type UnsuspendCardResponse400 = FromSchema<typeof schemas.UnsuspendCard.response['400']>
export type UnsuspendCardResponse405 = FromSchema<typeof schemas.UnsuspendCard.response['405']>
export type UpdateAccessGroupBodyParam = FromSchema<typeof schemas.UpdateAccessGroup.body>
export type UpdateAccessGroupMetadataParam = FromSchema<typeof schemas.UpdateAccessGroup.metadata>
export type UpdateAccessGroupResponse200 = FromSchema<
  typeof schemas.UpdateAccessGroup.response['200']
>
export type UpdateAccessGroupResponse400 = FromSchema<
  typeof schemas.UpdateAccessGroup.response['400']
>
export type UpdateAccessGroupResponse405 = FromSchema<
  typeof schemas.UpdateAccessGroup.response['405']
>
export type UpdateBodyParam = FromSchema<typeof schemas.Update.body>
export type UpdateCardAuthenticationBodyParam = FromSchema<
  typeof schemas.UpdateCardAuthentication.body
>
export type UpdateCardAuthenticationMetadataParam = FromSchema<
  typeof schemas.UpdateCardAuthentication.metadata
>
export type UpdateCardAuthenticationResponse400 = FromSchema<
  typeof schemas.UpdateCardAuthentication.response['400']
>
export type UpdateCardAuthenticationResponse405 = FromSchema<
  typeof schemas.UpdateCardAuthentication.response['405']
>
export type UpdateMetadataParam = FromSchema<typeof schemas.Update.metadata>
export type UpdateResponse400 = FromSchema<typeof schemas.Update.response['400']>
export type UpdateResponse405 = FromSchema<typeof schemas.Update.response['405']>
export type UpdateSecuredFundingLimitBodyParam = FromSchema<
  typeof schemas.UpdateSecuredFundingLimit.body
>
export type UpdateSecuredFundingLimitMetadataParam = FromSchema<
  typeof schemas.UpdateSecuredFundingLimit.metadata
>
export type UpdateSecuredFundingLimitResponse400 = FromSchema<
  typeof schemas.UpdateSecuredFundingLimit.response['400']
>
export type UpdateSecuredFundingLimitResponse405 = FromSchema<
  typeof schemas.UpdateSecuredFundingLimit.response['405']
>
export type UploadBodyParam = FromSchema<typeof schemas.Upload.body>
export type UploadPaymentFileBodyParam = FromSchema<typeof schemas.UploadPaymentFile.body>
export type UploadPaymentFileResponse200 = FromSchema<
  typeof schemas.UploadPaymentFile.response['200']
>
export type UploadPaymentFileResponse400 = FromSchema<
  typeof schemas.UploadPaymentFile.response['400']
>
export type UploadPaymentFileResponse405 = FromSchema<
  typeof schemas.UploadPaymentFile.response['405']
>
export type UploadPaymentFileResponse500 = FromSchema<
  typeof schemas.UploadPaymentFile.response['500']
>
export type UploadResponse201 = FromSchema<typeof schemas.Upload.response['201']>
export type UploadResponse400 = FromSchema<typeof schemas.Upload.response['400']>
export type UploadResponse405 = FromSchema<typeof schemas.Upload.response['405']>
