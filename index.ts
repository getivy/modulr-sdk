import type * as types from "./types";
import type { ConfigOptions, FetchResponse } from "api/dist/core";
import Oas from "oas";
import APICore from "api/dist/core";
import * as definition from "./openapi.json";

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, "modulr/1.0 (api/6.1.0)");
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Retrieve a specific customer using a unique customer reference. This identifier can be
   * found in the response obtained after creating a new customer, it starts by C, e.g:
   * C0000000
   *
   * @summary Retrieve a specific customer using a unique customer reference
   * @throws FetchError<400, types.GetCustomerResponse400> Bad Request
   * @throws FetchError<405, types.GetCustomerResponse405> Method Not Allowed
   */
  getCustomer(
    metadata: types.GetCustomerMetadataParam
  ): Promise<FetchResponse<200, types.GetCustomerResponse200>> {
    return this.core.fetch("/customers/{customerId}", "get", metadata);
  }

  /**
   *   Currently editable fields:
   *   <ol>
   *     <li>For all customer types: <b>externalReference</b> can be edited</li>
   *     <li>For all customers not requiring manual or in-house KYC verification:
   * <b>industryCode</b>, <b>registeredAddress</b>, <b>tcsVersions</b> and <b>regNumber</b>
   * can additionally be edited. Of those:
   *       <ul>
   *         <li>For all other customer types: <b>name</b> and <b>tradingAddress</b> can
   * additionally be edited</li>
   *         <li>For all types other than PCM_BUSINESS: the <b>associate</b> can additionally
   * be edited</li>
   *       </ul>
   *     </li>
   *   </ol>
   *
   *
   * @summary Edit a specific customer using a unique customer reference
   * @throws FetchError<400, types.EditCustomerResponse400> Bad Request
   * @throws FetchError<405, types.EditCustomerResponse405> Method Not Allowed
   */
  editCustomer(
    body: types.EditCustomerBodyParam,
    metadata: types.EditCustomerMetadataParam
  ): Promise<FetchResponse<200, types.EditCustomerResponse200>> {
    return this.core.fetch("/customers/{customerId}", "put", body, metadata);
  }

  /**
   * Retrieve details of a particular account using its ID as a reference
   *
   * @summary Get an account
   * @throws FetchError<400, types.GetAccountResponse400> Bad Request
   * @throws FetchError<405, types.GetAccountResponse405> Method Not Allowed
   */
  getAccount(
    metadata: types.GetAccountMetadataParam
  ): Promise<FetchResponse<200, types.GetAccountResponse200>> {
    return this.core.fetch("/accounts/{id}", "get", metadata);
  }

  /**
   * Edit details of a particular account using its ID as a reference
   * Currently editable fields:
   *   1. for accounts of all customer types, externalReference can be edited
   *   2. for accounts of PCM_INDIVIDUAL & PCM_BUSINESS customer types, name can additionally
   * be edited
   *
   * @summary Edit an account
   * @throws FetchError<400, types.EditAccountResponse400> Validation errors
   * @throws FetchError<405, types.EditAccountResponse405> Method Not Allowed
   */
  editAccount(
    body: types.EditAccountBodyParam,
    metadata: types.EditAccountMetadataParam
  ): Promise<FetchResponse<200, types.EditAccountResponse200>> {
    return this.core.fetch("/accounts/{id}", "put", body, metadata);
  }

  /**
   * Set the secured funding limit for an account
   *
   * @throws FetchError<400, types.UpdateSecuredFundingLimitResponse400> Validation errors
   * @throws FetchError<405, types.UpdateSecuredFundingLimitResponse405> Method Not Allowed
   */
  updateSecuredFundingLimit(
    body: types.UpdateSecuredFundingLimitBodyParam,
    metadata: types.UpdateSecuredFundingLimitMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      "/accounts/{id}/secured-funding",
      "put",
      body,
      metadata
    );
  }

  /**
   * The ability to update an access group's name and add or remove an account
   *
   * @summary Update access group
   * @throws FetchError<400, types.UpdateAccessGroupResponse400> Validation errors
   * @throws FetchError<405, types.UpdateAccessGroupResponse405> Method Not Allowed
   */
  updateAccessGroup(
    body: types.UpdateAccessGroupBodyParam,
    metadata: types.UpdateAccessGroupMetadataParam
  ): Promise<FetchResponse<200, types.UpdateAccessGroupResponse200>> {
    return this.core.fetch(
      "/access-groups/{id}/content",
      "put",
      body,
      metadata
    );
  }

  /**
   * Either using unique references, such as customer ID, or filter parameters, such as
   * verification status, get details of any customers found.
   *
   * @summary Retrieve customers using filters
   * @throws FetchError<400, types.GetCustomersResponse400> Bad Request
   * @throws FetchError<405, types.GetCustomersResponse405> Method Not Allowed
   */
  getCustomers(
    metadata: types.GetCustomersMetadataParam
  ): Promise<FetchResponse<200, types.GetCustomersResponse200>> {
    return this.core.fetch("/customers", "get", metadata);
  }

  /**
   * This endpoint allows you to create a new customer. Creating a customer is a complex
   * process with several dependencies, e.g: Directors, type of customer, legal
   * specifications. For further information, please visit 'Creating a customer and account'
   * entry on our API documentation
   *
   * @summary Create a new customer
   * @throws FetchError<400, types.CreateCustomerResponse400> Validation errors
   * @throws FetchError<405, types.CreateCustomerResponse405> Method Not Allowed
   */
  createCustomer(
    body: types.CreateCustomerBodyParam
  ): Promise<FetchResponse<201, types.CreateCustomerResponse201>> {
    return this.core.fetch("/customers", "post", body);
  }

  /**
   * The ability to create a new beneficiary for a customer, using their customer ID as a
   * reference.
   *
   * @summary Create a new beneficiary for a specified customer
   * @throws FetchError<400, types.CreateBeneficiaryResponse400> Validation errors
   * @throws FetchError<405, types.CreateBeneficiaryResponse405> Method Not Allowed
   */
  createBeneficiary(
    body: types.CreateBeneficiaryBodyParam,
    metadata: types.CreateBeneficiaryMetadataParam
  ): Promise<FetchResponse<201, types.CreateBeneficiaryResponse201>> {
    return this.core.fetch(
      "/customers/{customerId}/beneficiaries",
      "post",
      body,
      metadata
    );
  }

  /**
   * Get details of accounts belonging to a particular customer using the customer’s ID as a
   * reference
   *
   * @summary Get accounts by customer
   * @throws FetchError<400, types.GetAccountsByCustomerResponse400> Bad Request
   * @throws FetchError<405, types.GetAccountsByCustomerResponse405> Method Not Allowed
   */
  getAccountsByCustomer(
    metadata: types.GetAccountsByCustomerMetadataParam
  ): Promise<FetchResponse<200, types.GetAccountsByCustomerResponse200>> {
    return this.core.fetch("/customers/{customerId}/accounts", "get", metadata);
  }

  /**
   * Creates an account for a particular customer using the customer’s ID as a reference
   *
   * @summary Create account by customer
   * @throws FetchError<400, types.CreateAccountResponse400> Validation errors
   * @throws FetchError<405, types.CreateAccountResponse405> Method Not Allowed
   */
  createAccount(
    body: types.CreateAccountBodyParam,
    metadata: types.CreateAccountMetadataParam
  ): Promise<FetchResponse<201, types.CreateAccountResponse201>> {
    return this.core.fetch(
      "/customers/{customerId}/accounts",
      "post",
      body,
      metadata
    );
  }

  /**
   * Using a unique reference (account ID) you can unblock an account
   *
   * @summary Unblock a specific account
   * @throws FetchError<400, types.UnblockAccountResponse400> Validation errors
   * @throws FetchError<405, types.UnblockAccountResponse405> Method Not Allowed
   */
  unblockAccount(
    metadata: types.UnblockAccountMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/accounts/{id}/unblock", "post", metadata);
  }

  /**
   * When you no longer want or need an account you are able to close using the account ID as
   * a unique reference
   *
   * @summary Close an account
   * @throws FetchError<400, types.CloseAccountResponse400> Bad Request
   * @throws FetchError<405, types.CloseAccountResponse405> Method Not Allowed
   */
  closeAccount(
    metadata: types.CloseAccountMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/accounts/{id}/close", "post", metadata);
  }

  /**
   * Using a unique reference (account ID) you can block an account
   *
   * @summary Block a specific account
   * @throws FetchError<400, types.BlockAccountResponse400> Validation errors
   * @throws FetchError<405, types.BlockAccountResponse405> Method Not Allowed
   */
  blockAccount(
    metadata: types.BlockAccountMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/accounts/{id}/block", "post", metadata);
  }

  /**
   * The ability to list all access groups for the customer
   *
   * @summary Get a list of access groups
   * @throws FetchError<400, types.GetAccessGroupsResponse400> Bad Request
   * @throws FetchError<405, types.GetAccessGroupsResponse405> Method Not Allowed
   */
  getAccessGroups(
    metadata?: types.GetAccessGroupsMetadataParam
  ): Promise<FetchResponse<200, types.GetAccessGroupsResponse200>> {
    return this.core.fetch("/access-groups", "get", metadata);
  }

  /**
   * The ability to create a new access group
   *
   * @summary Create access group
   * @throws FetchError<400, types.CreateAccessGroupResponse400> Validation errors
   * @throws FetchError<405, types.CreateAccessGroupResponse405> Method Not Allowed
   */
  createAccessGroup(
    body: types.CreateAccessGroupBodyParam
  ): Promise<FetchResponse<201, types.CreateAccessGroupResponse201>> {
    return this.core.fetch("/access-groups", "post", body);
  }

  /**
   * The ability to get the details of beneficiaries using various pieces of information,
   * e.g. using customer ID, retrieve all beneficiaries created by that customer. Can get
   * details of one particular beneficiary based on the unique beneficiary reference number.
   *
   * @summary Retrieve beneficiaries
   * @throws FetchError<400, types.GetBeneficiariesResponse400> Bad Request
   * @throws FetchError<405, types.GetBeneficiariesResponse405> Method Not Allowed
   */
  getBeneficiaries(
    metadata: types.GetBeneficiariesMetadataParam
  ): Promise<FetchResponse<200, types.GetBeneficiariesResponse200>> {
    return this.core.fetch("/beneficiaries", "get", metadata);
  }

  /**
   * @throws FetchError<400, types.GetLocksResponse400> Bad Request
   * @throws FetchError<405, types.GetLocksResponse405> Method Not Allowed
   */
  getLocks(
    metadata: types.GetLocksMetadataParam
  ): Promise<FetchResponse<200, types.GetLocksResponse200>> {
    return this.core.fetch(
      "/beneficiaries/{beneficiaryId}/locks",
      "get",
      metadata
    );
  }

  /**
   * Gives the ability to find accounts and get their details using filters
   *
   * @summary Get accounts using filter
   * @throws FetchError<400, types.GetAccountsResponse400> Bad Request
   * @throws FetchError<405, types.GetAccountsResponse405> Method Not Allowed
   */
  getAccounts(
    metadata: types.GetAccountsMetadataParam
  ): Promise<FetchResponse<200, types.GetAccountsResponse200>> {
    return this.core.fetch("/accounts", "get", metadata);
  }

  /**
   * Retrieves the last 6 months of transactions (successful payments in & out) of an
   * account, specified by a unique account reference.
   *
   * @summary Get transactions for a specific Account
   * @throws FetchError<400, types.GetTransactionsByAccountResponse400> Bad Request
   * @throws FetchError<405, types.GetTransactionsByAccountResponse405> Method Not Allowed
   */
  getTransactionsByAccount(
    metadata: types.GetTransactionsByAccountMetadataParam
  ): Promise<FetchResponse<200, types.GetTransactionsByAccountResponse200>> {
    return this.core.fetch(
      "/accounts/{accountId}/transactions",
      "get",
      metadata
    );
  }

  /**
   * The ability to retrieve an access group by ID
   *
   * @summary Get access group
   * @throws FetchError<400, types.GetAccessGroupResponse400> Bad Request
   * @throws FetchError<405, types.GetAccessGroupResponse405> Method Not Allowed
   */
  getAccessGroup(
    metadata: types.GetAccessGroupMetadataParam
  ): Promise<FetchResponse<200, types.GetAccessGroupResponse200>> {
    return this.core.fetch("/access-groups/{id}", "get", metadata);
  }

  /**
   * deleting beneficiaries for a customer, using their customer ID
   *
   * @summary Delete beneficiaries for a specified customer
   * @throws FetchError<400, types.DeleteBeneficiariesResponse400> Bad Request
   * @throws FetchError<405, types.DeleteBeneficiariesResponse405> Method Not Allowed
   */
  deleteBeneficiaries(
    metadata: types.DeleteBeneficiariesMetadataParam
  ): Promise<
    | FetchResponse<200, types.DeleteBeneficiariesResponse200>
    | FetchResponse<207, types.DeleteBeneficiariesResponse207>
  > {
    return this.core.fetch(
      "/customers/{cid}/beneficiaries",
      "delete",
      metadata
    );
  }

  /**
   * Activity report in csv format
   *
   * @summary Csv activity report
   * @throws FetchError<400, types.GenerateCsvResponse400> Bad Request
   * @throws FetchError<405, types.GenerateCsvResponse405> Method Not Allowed
   */
  generateCsv(
    metadata?: types.GenerateCsvMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/activity-report", "get", metadata);
  }

  /**
   * The ability to get the details of payments using various pieces of information, e.g.
   * using Account ID, retrieve all payments in that account. Can get details of one
   * particular payment based on the unique payment reference number.
   *
   * @summary Retrieve payments
   * @throws FetchError<400, types.GetPaymentsResponse400> Bad Request
   * @throws FetchError<405, types.GetPaymentsResponse405> Method Not Allowed
   */
  getPayments(
    metadata?: types.GetPaymentsMetadataParam
  ): Promise<FetchResponse<200, types.GetPaymentsResponse200>> {
    return this.core.fetch("/payments", "get", metadata);
  }

  /**
   * Supports both Payments to external bank accounts via Faster Payments and transfers to
   * other Modulr accounts. Requests to Payments are asynchronous.
   *
   * @summary Create a payment
   * @throws FetchError<400, types.SendPaymentResponse400> Validation errors
   * @throws FetchError<405, types.SendPaymentResponse405> Method Not Allowed
   */
  sendPayment(
    body: types.SendPaymentBodyParam
  ): Promise<FetchResponse<201, types.SendPaymentResponse201>> {
    return this.core.fetch("/payments", "post", body);
  }

  /**
   * This endpoint allows for a user who has submitted multiple batch to use some criteria to
   * get the batch payments.
   *
   * @summary Get batch payments by a given set of parameters
   * @throws FetchError<400, types.GetBatchPaymentsResponse400> Validation errors
   * @throws FetchError<405, types.GetBatchPaymentsResponse405> Method Not Allowed
   */
  getBatchPayments(
    metadata?: types.GetBatchPaymentsMetadataParam
  ): Promise<FetchResponse<200, types.GetBatchPaymentsResponse200>> {
    return this.core.fetch("/batchpayments", "get", metadata);
  }

  /**
   * As well as supporting individual payment requests, the Modulr payment platform can also
   * handle multiple payment objects in the same request. This endpoint allows you to make a
   * new batch payment.
   *
   * @summary Make a batch payment
   * @throws FetchError<400, types.SubmitBatchPaymentsResponse400> Validation errors
   * @throws FetchError<405, types.SubmitBatchPaymentsResponse405> Method Not Allowed
   */
  submitBatchPayments(
    body: types.SubmitBatchPaymentsBodyParam
  ): Promise<FetchResponse<201, types.SubmitBatchPaymentsResponse201>> {
    return this.core.fetch("/batchpayments", "post", body);
  }

  /**
   * Cancels a batch payment request if it is not already processed
   *
   * @summary Cancel the batch payment
   * @throws FetchError<400, types.CancelBatchPaymentsResponse400> Validation errors
   * @throws FetchError<405, types.CancelBatchPaymentsResponse405> Method Not Allowed
   */
  cancelBatchPayments(
    metadata: types.CancelBatchPaymentsMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      "/batchpayments/{batchPaymentId}/cancel",
      "post",
      metadata
    );
  }

  /**
   * As well as supporting individual payment requests, the Modulr payment platform can also
   * handle multiple payment objects in the same request. This endpoint is to get the details
   * of a batch payment that has already been created, via the unique reference that was in
   * the response to the original batch payment request.
   *
   * @summary Retrieve details of a batch payment
   * @throws FetchError<400, types.GetBatchPaymentResponse400> Bad Request
   * @throws FetchError<405, types.GetBatchPaymentResponse405> Method Not Allowed
   */
  getBatchPayment(
    metadata: types.GetBatchPaymentMetadataParam
  ): Promise<FetchResponse<200, types.GetBatchPaymentResponse200>> {
    return this.core.fetch("/batchpayments/{id}", "get", metadata);
  }

  /**
   * The ability to modify the details of a specific rule based on the rule's unique
   * reference.
   *
   * @summary Edit a specific Rule
   * @throws FetchError<400, types.ModifyRuleResponse400> Validation errors
   * @throws FetchError<405, types.ModifyRuleResponse405> Method Not Allowed
   */
  modifyRule(
    body: types.ModifyRuleBodyParam,
    metadata: types.ModifyRuleMetadataParam
  ): Promise<FetchResponse<200, types.ModifyRuleResponse200>> {
    return this.core.fetch("/rules/{ruleId}", "put", body, metadata);
  }

  /**
   * When you want a new rule on an account you can create one with this endpoint. Note that
   * Rules are linked to an Account and each Account can only have one instance of a Rule
   * type
   *
   * @summary Create a Rule
   * @throws FetchError<400, types.CreateRuleResponse400> Validation errors
   * @throws FetchError<405, types.CreateRuleResponse405> Method Not Allowed
   */
  createRule(
    body: types.CreateRuleBodyParam
  ): Promise<FetchResponse<201, types.CreateRuleResponse201>> {
    return this.core.fetch("/rules", "post", body);
  }

  /**
   * When you no longer want a rule on an account you can do it with this endpoint. You can
   * delete more than one rule in the same request.
   *
   * @summary Delete a Rule
   * @throws FetchError<400, types.RemoveRulesResponse400> Bad Request
   * @throws FetchError<405, types.RemoveRulesResponse405> Method Not Allowed
   */
  removeRules(
    metadata: types.RemoveRulesMetadataParam
  ): Promise<
    | FetchResponse<200, types.RemoveRulesResponse200>
    | FetchResponse<207, types.RemoveRulesResponse207>
  > {
    return this.core.fetch("/rules", "delete", metadata);
  }

  /**
   * The ability to get the details of all rules associated with the specified account using
   * the Account ID as a reference. Can filter by a specific type using the type parameter.
   *
   * @summary Get all Rules for a specific Account
   * @throws FetchError<400, types.GetRulesResponse400> Bad Request
   * @throws FetchError<405, types.GetRulesResponse405> Method Not Allowed
   */
  getRules(
    metadata: types.GetRulesMetadataParam
  ): Promise<FetchResponse<200, types.GetRulesResponse200>> {
    return this.core.fetch("/accounts/{accountId}/rules", "get", metadata);
  }

  /**
   * You need to know the unique reference of the account and the rule type you want to get
   * to information on.
   *
   * @summary Retrieve a Rule by rule type on a specific account
   * @throws FetchError<400, types.GetRuleResponse400> Bad Request
   * @throws FetchError<405, types.GetRuleResponse405> Method Not Allowed
   */
  getRule(
    metadata: types.GetRuleMetadataParam
  ): Promise<FetchResponse<200, types.GetRuleResponse200>> {
    return this.core.fetch(
      "/accounts/{accountId}/rules/{rtype}",
      "get",
      metadata
    );
  }

  /**
   * This allows you to see the settings for a particular notification that has been set up,
   * for example if you want to check if it is active or the emails the notification is being
   * sent to. It would be best practice to call this before updating a notification.
   *
   * @summary Retrieve a specific notification by unique reference for a specific partner
   * @throws FetchError<400, types.GetPartnerNotificationResponse400> Bad Request
   * @throws FetchError<404, types.GetPartnerNotificationResponse404> Not found
   * @throws FetchError<405, types.GetPartnerNotificationResponse405> Method Not Allowed
   */
  getPartnerNotification(
    metadata: types.GetPartnerNotificationMetadataParam
  ): Promise<FetchResponse<200, types.GetPartnerNotificationResponse200>> {
    return this.core.fetch(
      "/partners/{partnerId}/notifications/{notificationId}",
      "get",
      metadata
    );
  }

  /**
   * If you need to change anything about a particular notification, for example add an email
   * address or make it inactive, then this is the endpoint to use. You need to put all of
   * the information into this request for the notification even if it isn't changing, so
   * either you will need to record this somewhere when you create the notification, or call
   * the 'GET' request first.
   *
   * @summary Update a specific notification by unique reference for a specific partner
   * @throws FetchError<400, types.EditPartnerNotificationResponse400> Bad Request
   * @throws FetchError<404, types.EditPartnerNotificationResponse404> Not found
   * @throws FetchError<405, types.EditPartnerNotificationResponse405> Method Not Allowed
   */
  editPartnerNotification(
    body: types.EditPartnerNotificationBodyParam,
    metadata: types.EditPartnerNotificationMetadataParam
  ): Promise<FetchResponse<200, types.EditPartnerNotificationResponse200>> {
    return this.core.fetch(
      "/partners/{partnerId}/notifications/{notificationId}",
      "put",
      body,
      metadata
    );
  }

  /**
   * This allows you to see the settings for a particular notification that has been set up,
   * for example if you want to check if it is active or the emails the notification is being
   * sent to. It would be best practice to call this before updating a notification.
   *
   * @summary Retrieve a specific notification by unique reference for a specific customer
   * @throws FetchError<400, types.GetCustomerNotificationResponse400> Bad Request
   * @throws FetchError<404, types.GetCustomerNotificationResponse404> Not found
   * @throws FetchError<405, types.GetCustomerNotificationResponse405> Method Not Allowed
   */
  getCustomerNotification(
    metadata: types.GetCustomerNotificationMetadataParam
  ): Promise<FetchResponse<200, types.GetCustomerNotificationResponse200>> {
    return this.core.fetch(
      "/customers/{customerId}/notifications/{notificationId}",
      "get",
      metadata
    );
  }

  /**
   * If you need to change anything about a particular notification, for example add an email
   * address or make it inactive, then this is the endpoint to use. You need to put all of
   * the information into this request for the notification even if it isn't changing, so
   * either you will need to record this somewhere when you create the notification, or call
   * the 'GET' request first.
   *
   * @summary Update a specific notification by unique reference for a specific customer
   * @throws FetchError<400, types.EditCustomerNotificationResponse400> Bad Request
   * @throws FetchError<404, types.EditCustomerNotificationResponse404> Not found
   * @throws FetchError<405, types.EditCustomerNotificationResponse405> Method Not Allowed
   */
  editCustomerNotification(
    body: types.EditCustomerNotificationBodyParam,
    metadata: types.EditCustomerNotificationMetadataParam
  ): Promise<FetchResponse<200, types.EditCustomerNotificationResponse200>> {
    return this.core.fetch(
      "/customers/{customerId}/notifications/{notificationId}",
      "put",
      body,
      metadata
    );
  }

  /**
   * Retrieve details of all notifications set up for a partner using the partner's ID as a
   * reference
   *
   * @summary Get all Notifications linked directly to a Partner
   * @throws FetchError<400, types.GetAllPartnerNotificationsResponse400> Bad Request
   * @throws FetchError<404, types.GetAllPartnerNotificationsResponse404> Not found
   * @throws FetchError<405, types.GetAllPartnerNotificationsResponse405> Method Not Allowed
   */
  getAllPartnerNotifications(
    metadata: types.GetAllPartnerNotificationsMetadataParam
  ): Promise<FetchResponse<200, types.GetAllPartnerNotificationsResponse200>> {
    return this.core.fetch(
      "/partners/{partnerId}/notifications",
      "get",
      metadata
    );
  }

  /**
   * Sets up a new notification for a partner using the partner's ID as a reference. Returns
   * a notification ID that should be saved if the notification needs to be amended in the
   * future
   *
   * @summary Set up a Notification for a Partner
   * @throws FetchError<400, types.AddPartnerNotificationResponse400> Bad request
   * @throws FetchError<405, types.AddPartnerNotificationResponse405> Method Not Allowed
   */
  addPartnerNotification(
    body: types.AddPartnerNotificationBodyParam,
    metadata: types.AddPartnerNotificationMetadataParam
  ): Promise<FetchResponse<201, types.AddPartnerNotificationResponse201>> {
    return this.core.fetch(
      "/partners/{partnerId}/notifications",
      "post",
      body,
      metadata
    );
  }

  /**
   * Retrieve details of all notifications set up for a customer using the customer's ID as a
   * reference
   *
   * @summary Get all Notifications for a Customer
   * @throws FetchError<400, types.GetAllCustomerNotificationsResponse400> Bad Request
   * @throws FetchError<404, types.GetAllCustomerNotificationsResponse404> Not found
   * @throws FetchError<405, types.GetAllCustomerNotificationsResponse405> Method Not Allowed
   */
  getAllCustomerNotifications(
    metadata: types.GetAllCustomerNotificationsMetadataParam
  ): Promise<FetchResponse<200, types.GetAllCustomerNotificationsResponse200>> {
    return this.core.fetch(
      "/customers/{customerId}/notifications",
      "get",
      metadata
    );
  }

  /**
   * Sets up a new notification for a customer using the customer's ID as a reference.
   * Returns a notification ID that should be saved if the notification needs to be amended
   * in the future
   *
   * @summary Set up a Notification for a Customer
   * @throws FetchError<400, types.AddCustomerNotificationResponse400> Bad request
   * @throws FetchError<405, types.AddCustomerNotificationResponse405> Method Not Allowed
   */
  addCustomerNotification(
    body: types.AddCustomerNotificationBodyParam,
    metadata: types.AddCustomerNotificationMetadataParam
  ): Promise<FetchResponse<201, types.AddCustomerNotificationResponse201>> {
    return this.core.fetch(
      "/customers/{customerId}/notifications",
      "post",
      body,
      metadata
    );
  }

  /**
   * Only supports webhook notifications and as such uses the webhook endpoint. Request a
   * specific notification ID and specify you want to see failures. (Max 50)
   *
   * @summary Check if a particular webhook has failed
   * @throws FetchError<400, types.GetFailedWebHooksResponse400> Bad Request
   * @throws FetchError<405, types.GetFailedWebHooksResponse405> Method Not Allowed
   */
  getFailedWebHooks(
    metadata: types.GetFailedWebHooksMetadataParam
  ): Promise<FetchResponse<200, types.GetFailedWebHooksResponse200>> {
    return this.core.fetch("/webhooks/{webhookId}/failures", "get", metadata);
  }

  /**
   * Inbound payments - mock (Sandbox only)
   *
   * @summary Endpoint to mock the credit of an account
   * @throws FetchError<400, types.CreatePaymentsResponse400> Bad Request
   * @throws FetchError<405, types.CreatePaymentsResponse405> Method Not Allowed
   */
  createPayments(
    body: types.CreatePaymentsBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/credit", "post", body);
  }

  /**
   * You can suspend a mandate, which means nothing can be done to it (added or amended).
   * There is also the option to cancel all scheduled payments at the same time. There is a
   * call to re-instate the mandate if needed.
   *
   * @summary Suspend Mandate for given mandate-id.
   * @throws FetchError<400, types.SuspendMandateResponse400> Validation errors.
   * @throws FetchError<404, types.SuspendMandateResponse404> Not Found
   * @throws FetchError<405, types.SuspendMandateResponse405> Method Not Allowed
   */
  suspendMandate(
    body: types.SuspendMandateBodyParam,
    metadata: types.SuspendMandateMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/mandates/{id}/suspend", "post", body, metadata);
  }

  /**
   * Reinstate Mandate for given mandate-id.
   *
   * @summary Reinstate Mandate for given mandate-id.
   * @throws FetchError<400, types.ReinstateMandateResponse400> Validation errors.
   * @throws FetchError<404, types.ReinstateMandateResponse404> Not Found
   * @throws FetchError<405, types.ReinstateMandateResponse405> Method Not Allowed
   */
  reinstateMandate(
    body: types.ReinstateMandateBodyParam,
    metadata: types.ReinstateMandateMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/mandates/{id}/reinstate", "post", body, metadata);
  }

  /**
   * Creates a Direct Debit collection schedule; the agreed to framework for the collections
   * for the given mandate-id. This could be a single collection or multiple and includes the
   * frequency and amounts of the planned payments.
   *
   * @summary Create the collection schedule for the given mandate-id.
   * @throws FetchError<400, types.CreateCollectionScheduleResponse400> Validation errors
   * @throws FetchError<404, types.CreateCollectionScheduleResponse404> Not Found
   * @throws FetchError<405, types.CreateCollectionScheduleResponse405> Method Not Allowed
   */
  createCollectionSchedule(
    body: types.CreateCollectionScheduleBodyParam,
    metadata: types.CreateCollectionScheduleMetadataParam
  ): Promise<FetchResponse<200, types.CreateCollectionScheduleResponse200>> {
    return this.core.fetch(
      "/mandates/{id}/collectionschedules",
      "post",
      body,
      metadata
    );
  }

  /**
   * Cancel Mandate for given mandate-id.
   *
   * @summary Cancel Mandate for given mandate-id.
   * @throws FetchError<400, types.CancelMandateResponse400> Validation errors.
   * @throws FetchError<404, types.CancelMandateResponse404> Not Found
   * @throws FetchError<405, types.CancelMandateResponse405> Method Not Allowed
   */
  cancelMandate(
    body: types.CancelMandateBodyParam,
    metadata: types.CancelMandateMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/mandates/{id}/cancel", "post", body, metadata);
  }

  /**
   * Cancel a Direct Debit collection schedule for the given collection-id.
   *
   * @throws FetchError<400, types.CancelCollectionScheduleResponse400> Validation errors
   * @throws FetchError<404, types.CancelCollectionScheduleResponse404> Not Found
   * @throws FetchError<405, types.CancelCollectionScheduleResponse405> Method Not Allowed
   */
  cancelCollectionSchedule(
    metadata: types.CancelCollectionScheduleMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      "/collectionschedules/{id}/cancel",
      "post",
      metadata
    );
  }

  /**
   * Cancel a Direct Debit collection for the given collection-id.
   *
   * @throws FetchError<400, types.CancelCollectionResponse400> Validation errors
   * @throws FetchError<404, types.CancelCollectionResponse404> Not Found
   * @throws FetchError<405, types.CancelCollectionResponse405> Method Not Allowed
   */
  cancelCollection(
    metadata: types.CancelCollectionMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/collections/{id}/cancel", "post", metadata);
  }

  /**
   * Setting up a Mandate is the first step in creating a Direct Debit. You can only set up
   * scheduled payments ('collections') after there is a Mandate created with the details of
   * the payee.
   *
   * @summary Create a Direct Debit mandate for the given account-id.
   * @throws FetchError<400, types.CreateMandateResponse400> Validation errors
   * @throws FetchError<404, types.CreateMandateResponse404> Not Found
   * @throws FetchError<405, types.CreateMandateResponse405> Method Not Allowed
   */
  createMandate(
    body: types.CreateMandateBodyParam,
    metadata: types.CreateMandateMetadataParam
  ): Promise<FetchResponse<200, types.CreateMandateResponse200>> {
    return this.core.fetch("/accounts/{id}/mandates", "post", body, metadata);
  }

  /**
   * If trying to find one or several particular mandates, then you can narrow down your
   * search by using the filters available here. These include the mandate id, either the
   * submitted or created date range, the account name on the mandate, etc...
   *
   * @summary Get Mandates based on search criteria.
   * @throws FetchError<400, types.GetMandatesResponse400> Bad Request
   * @throws FetchError<404, types.GetMandatesResponse404> Not Found
   * @throws FetchError<405, types.GetMandatesResponse405> Method Not Allowed
   */
  getMandates(
    metadata?: types.GetMandatesMetadataParam
  ): Promise<FetchResponse<200, types.GetMandatesResponse200>> {
    return this.core.fetch("/mandates", "get", metadata);
  }

  /**
   * By supplying the mandate id you can view all information regarding the collection
   * schedules linked to that mandate.
   *
   * @summary Get all collectionschedules for a mandate
   * @throws FetchError<400, types.GetCollectionSchedulesResponse400> Bad Request
   * @throws FetchError<404, types.GetCollectionSchedulesResponse404> Not Found
   * @throws FetchError<405, types.GetCollectionSchedulesResponse405> Method Not Allowed
   */
  getCollectionSchedules(
    metadata: types.GetCollectionSchedulesMetadataParam
  ): Promise<FetchResponse<200, types.GetCollectionSchedulesResponse200>> {
    return this.core.fetch("/collectionschedules", "get", metadata);
  }

  /**
   * Once a collection schedule has been set up any collections that have happened
   * (successful or not) can be viewed. There is no pagination (although the enclosing
   * response structure indicates pagination); 'page' value will always be zero.
   *
   * @summary Get all collection activities of an account
   * @throws FetchError<400, types.GetCollectionsResponse400> Bad Request
   * @throws FetchError<404, types.GetCollectionsResponse404> Not Found
   * @throws FetchError<405, types.GetCollectionsResponse405> Method Not Allowed
   */
  getCollections(
    metadata: types.GetCollectionsMetadataParam
  ): Promise<FetchResponse<200, types.GetCollectionsResponse200>> {
    return this.core.fetch("/collections", "get", metadata);
  }

  /**
   * Support knowledge based authentication (KBA)
   *
   * @summary Update card authentication
   * @throws FetchError<400, types.UpdateCardAuthenticationResponse400> Invalid request
   * @throws FetchError<405, types.UpdateCardAuthenticationResponse405> Method Not Allowed
   */
  updateCardAuthentication(
    body: types.UpdateCardAuthenticationBodyParam,
    metadata: types.UpdateCardAuthenticationMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/authentication", "put", body, metadata);
  }

  /**
   * View the details of an existing card
   *
   * @throws FetchError<400, types.GetCardResponse400> Invalid request
   * @throws FetchError<405, types.GetCardResponse405> Method Not Allowed
   */
  getCard(
    metadata: types.GetCardMetadataParam
  ): Promise<FetchResponse<200, types.GetCardResponse200>> {
    return this.core.fetch("/cards/{id}", "get", metadata);
  }

  /**
   * Update card and cardholder details
   *
   * @summary Update a card
   * @throws FetchError<400, types.UpdateResponse400> Invalid request
   * @throws FetchError<405, types.UpdateResponse405> Method Not Allowed
   */
  update(
    body: types.UpdateBodyParam,
    metadata: types.UpdateMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}", "post", body, metadata);
  }

  /**
   * Restores a previously suspended card to the status it was in prior to being suspended as
   * applied by the issuer or program manager.
   * Use of this endpoint is `Restricted`, depending on access being granted through
   * contractual setup with Modulr.
   *
   * @summary [Restricted] Unsuspend a card
   * @throws FetchError<400, types.UnsuspendCardResponse400> Invalid request
   * @throws FetchError<405, types.UnsuspendCardResponse405> Method Not Allowed
   */
  unsuspendCard(
    metadata: types.UnsuspendCardMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/unsuspend", "post", metadata);
  }

  /**
   * Unblocking a card re-enables normal authorisation processing.
   *
   * @summary Unblock an existing card
   * @throws FetchError<400, types.UnblockCardResponse400> Invalid request
   * @throws FetchError<405, types.UnblockCardResponse405> Method Not Allowed
   */
  unblockCard(
    metadata: types.UnblockCardMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/unblock", "post", metadata);
  }

  /**
   * Suspends a card to temporarily prevent any new authorisations as applied by the issuer
   * or the program manager (i.e. not cardholder elective). This means that all new
   * authorisations will be immediately declined. Outstanding authorisations are unaffected
   * and settlement, chargebacks, refunds, etc will continue to function as normal.
   * Use of this endpoint is `Restricted`, depending on access being granted through
   * contractual setup with Modulr.
   *
   * @summary [Restricted] Suspend an existing card
   * @throws FetchError<400, types.SuspendCardResponse400> Invalid request
   * @throws FetchError<405, types.SuspendCardResponse405> Method Not Allowed
   */
  suspendCard(
    metadata: types.SuspendCardMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/suspend", "post", metadata);
  }

  /**
   * Create a token that is used as a parameter to retrieve secure card details (PAN, CVV,
   * and PIN) or to perform PIN alterations. This token is to be retrieved by the partner and
   * pushed to the cardholder device where the call is made. The token will be valid for 60
   * seconds.
   *
   * @summary Create secure card details token
   * @throws FetchError<400, types.GenerateCardHolderTokenResponse400> Invalid request
   * @throws FetchError<405, types.GenerateCardHolderTokenResponse405> Method Not Allowed
   */
  generateCardHolderToken(
    body: types.GenerateCardHolderTokenBodyParam,
    metadata: types.GenerateCardHolderTokenMetadataParam
  ): Promise<FetchResponse<200, types.GenerateCardHolderTokenResponse200>>;
  generateCardHolderToken(
    metadata: types.GenerateCardHolderTokenMetadataParam
  ): Promise<FetchResponse<200, types.GenerateCardHolderTokenResponse200>>;
  generateCardHolderToken(
    body?:
      | types.GenerateCardHolderTokenBodyParam
      | types.GenerateCardHolderTokenMetadataParam,
    metadata?: types.GenerateCardHolderTokenMetadataParam
  ): Promise<FetchResponse<200, types.GenerateCardHolderTokenResponse200>> {
    return this.core.fetch(
      "/cards/{id}/secure-details-token",
      "post",
      body,
      metadata
    );
  }

  /**
   * Replace a card, with a reason STOLEN, DAMAGED, LOST, RENEW.
   *
   * @summary Replace a card
   * @throws FetchError<400, types.ReplaceCardResponse400> Invalid request
   * @throws FetchError<405, types.ReplaceCardResponse405> Method Not Allowed
   */
  replaceCard(
    body: types.ReplaceCardBodyParam,
    metadata: types.ReplaceCardMetadataParam
  ): Promise<FetchResponse<201, types.ReplaceCardResponse201>> {
    return this.core.fetch("/cards/{id}/replace", "post", body, metadata);
  }

  /**
   * Retrieves the PIN for a card, as a reminder for the cardholder
   *
   * @summary Retrieve PIN
   * @throws FetchError<400, types.RetrievePinResponse400> Invalid request
   * @throws FetchError<403, types.RetrievePinResponse403> Forbidden. `Card Management Token` may be missing or invalid
   * @throws FetchError<405, types.RetrievePinResponse405> Method Not Allowed
   */
  retrievePIN(
    metadata: types.RetrievePinMetadataParam
  ): Promise<FetchResponse<200, types.RetrievePinResponse200>> {
    return this.core.fetch("/cards/{id}/pin", "get", metadata);
  }

  /**
   * Reset the card's PIN for a specific card
   *
   * @summary Reset card PIN
   * @throws FetchError<400, types.ResetPinResponse400> Invalid request
   * @throws FetchError<405, types.ResetPinResponse405> Method Not Allowed
   */
  resetPin(
    body: types.ResetPinBodyParam,
    metadata: types.ResetPinMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/pin", "post", body, metadata);
  }

  /**
   * Unblock the card's PIN so that it can be used by the cardholder. CVC2 will also be
   * unblocked, where required.
   *
   * @summary Unblock PIN
   * @throws FetchError<400, types.UnblockPinResponse400> Invalid request
   * @throws FetchError<405, types.UnblockPinResponse405> Method Not Allowed
   */
  unblockPin(
    metadata: types.UnblockPinMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/pin/unblock", "post", metadata);
  }

  /**
   * Cancelling a card _**permanently**_ disables authorisation processing & _**destroys**_
   * the card from the card scheme perspective. This means that all _new_ authorisations will
   * be immediately declined and this cannot be reversed. Outstanding authorisations are
   * unaffected and settlement, chargebacks, refunds, etc will continue to function as
   * normal.
   *
   * @summary Cancel an existing card
   * @throws FetchError<400, types.CancelCardResponse400> Invalid request
   * @throws FetchError<405, types.CancelCardResponse405> Method Not Allowed
   */
  cancelCard(
    body: types.CancelCardBodyParam,
    metadata: types.CancelCardMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  cancelCard(
    metadata: types.CancelCardMetadataParam
  ): Promise<FetchResponse<number, unknown>>;
  cancelCard(
    body?: types.CancelCardBodyParam | types.CancelCardMetadataParam,
    metadata?: types.CancelCardMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/cancel", "post", body, metadata);
  }

  /**
   * Blocking a card temporarily disables authorisation processing. This means that all _new_
   * authorisations will be immediately declined. Outstanding authorisations are unaffected
   * and settlement, chargebacks, refunds, etc will continue to function as normal.
   *
   * @summary Block an existing card
   * @throws FetchError<400, types.BlockCardResponse400> Invalid request
   * @throws FetchError<405, types.BlockCardResponse405> Method Not Allowed
   */
  blockCard(
    metadata: types.BlockCardMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/block", "post", metadata);
  }

  /**
   * Physical cards issued by Modulr will be mailed out to cardholders in an inactive state.
   * A cardholder will need to have their card activated before it can be used. Cards can
   * only be activated whilst they have a status of `CREATED`.
   *
   * @summary Activate a physical card
   * @throws FetchError<400, types.ActivateCardResponse400> Invalid request
   * @throws FetchError<405, types.ActivateCardResponse405> Method Not Allowed
   */
  activateCard(
    metadata: types.ActivateCardMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/{id}/activate", "post", metadata);
  }

  /**
   * Reset the PIN for a card using a client access token. This should be done from the
   * card-holder device and not directly by the partner
   *
   * @summary Reset card PIN
   * @throws FetchError<400, types.SecureResetPinResponse400> Invalid request
   * @throws FetchError<405, types.SecureResetPinResponse405> Method Not Allowed
   */
  secureResetPin(
    body: types.SecureResetPinBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/cards/secure-pin-reset", "post", body);
  }

  /**
   * Retrieve card details by PAN
   *
   * @summary Card enquiry
   * @throws FetchError<400, types.CardEnquiryResponse400> Invalid request
   * @throws FetchError<405, types.CardEnquiryResponse405> Method Not Allowed
   */
  cardEnquiry(
    body: types.CardEnquiryBodyParam
  ): Promise<FetchResponse<200, types.CardEnquiryResponse200>> {
    return this.core.fetch("/cards/enquiry", "post", body);
  }

  /**
   * [Restricted] Expire an existing authorisation
   *
   * @summary [Restricted] Expire an existing authorisation
   * @throws FetchError<400, types.ExpireAuthorisationResponse400> Bad Request
   * @throws FetchError<405, types.ExpireAuthorisationResponse405> Method Not Allowed
   */
  expireAuthorisation(
    metadata: types.ExpireAuthorisationMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/authorisations/{authId}/expire", "post", metadata);
  }

  /**
   * Asynchronously create a physical card. The response will include a resource to allow the
   * client to check the status of the request.
   *
   * @summary Create a new physical card
   * @throws FetchError<400, types.CreatePhysicalCardResponse400> Invalid request
   * @throws FetchError<405, types.CreatePhysicalCardResponse405> Method Not Allowed
   */
  createPhysicalCard(
    body: types.CreatePhysicalCardBodyParam,
    metadata: types.CreatePhysicalCardMetadataParam
  ): Promise<FetchResponse<202, types.CreatePhysicalCardResponse202>> {
    return this.core.fetch(
      "/accounts/{aid}/physical-cards",
      "post",
      body,
      metadata
    );
  }

  /**
   * View the details of existing cards by account
   *
   * @throws FetchError<400, types.GetCardsByAccountResponse400> Invalid request
   * @throws FetchError<405, types.GetCardsByAccountResponse405> Method Not Allowed
   */
  getCardsByAccount(
    metadata: types.GetCardsByAccountMetadataParam
  ): Promise<FetchResponse<200, types.GetCardsByAccountResponse200>> {
    return this.core.fetch("/accounts/{aid}/cards", "get", metadata);
  }

  /**
   * Create a new virtual card
   *
   * @throws FetchError<400, types.CreateCardResponse400> Invalid request
   * @throws FetchError<405, types.CreateCardResponse405> Method Not Allowed
   */
  createCard(
    body: types.CreateCardBodyParam,
    metadata: types.CreateCardMetadataParam
  ): Promise<FetchResponse<201, types.CreateCardResponse201>> {
    return this.core.fetch("/accounts/{aid}/cards", "post", body, metadata);
  }

  /**
   * View the details of existing cards
   *
   * @throws FetchError<400, types.GetCardsResponse400> Invalid request
   * @throws FetchError<405, types.GetCardsResponse405> Method Not Allowed
   */
  getCards(
    metadata?: types.GetCardsMetadataParam
  ): Promise<FetchResponse<200, types.GetCardsResponse200>> {
    return this.core.fetch("/cards", "get", metadata);
  }

  /**
   * Receives the secure card details token as a parameter. This call is meant to be done
   * from the cardholder device and not directly by the partner
   *
   * @summary Retrieve secure card details (PAN + CVV + PIN)
   * @throws FetchError<400, types.GetSecureCardDetailsResponse400> Invalid request
   * @throws FetchError<403, types.GetSecureCardDetailsResponse403> Forbidden. Token may be missing or invalid
   * @throws FetchError<405, types.GetSecureCardDetailsResponse405> Method Not Allowed
   */
  getSecureCardDetails(): Promise<
    FetchResponse<200, types.GetSecureCardDetailsResponse200>
  > {
    return this.core.fetch("/cards/secure-details", "get");
  }

  /**
   * View the details of card tasks.  Ordered by createdDate, with the newest entries
   * appearing first
   *
   * @summary Get tasks
   * @throws FetchError<400, types.GetAsyncTasksResponse400> Invalid request
   * @throws FetchError<405, types.GetAsyncTasksResponse405> Method Not Allowed
   */
  getAsyncTasks(
    metadata?: types.GetAsyncTasksMetadataParam
  ): Promise<FetchResponse<200, types.GetAsyncTasksResponse200>> {
    return this.core.fetch("/card-tasks", "get", metadata);
  }

  /**
   * Retrieve the card task. If the task is complete, the resource URL will be provided to
   * allow client to fetch the completed resource.
   *
   * @summary Get a card task
   * @throws FetchError<400, types.GetAsyncTaskResponse400> Invalid request
   * @throws FetchError<405, types.GetAsyncTaskResponse405> Method Not Allowed
   */
  getAsyncTask(
    metadata: types.GetAsyncTaskMetadataParam
  ): Promise<FetchResponse<200, types.GetAsyncTaskResponse200>> {
    return this.core.fetch("/card-tasks/{id}", "get", metadata);
  }

  /**
   * View activities for a specified list of cards and a given time frame. View activities
   * for all cards belonging to a specified list of accounts and a given time frame. View all
   * activities for a single card when a single card ID is specified, time frame is optional.
   *
   * @summary View activities for specific cards or over a date range
   * @throws FetchError<400, types.GetCardActivitiesResponse400> Invalid request
   * @throws FetchError<405, types.GetCardActivitiesResponse405> Method Not Allowed
   */
  getCardActivities(
    metadata?: types.GetCardActivitiesMetadataParam
  ): Promise<FetchResponse<200, types.GetCardActivitiesResponse200>> {
    return this.core.fetch("/activities", "get", metadata);
  }

  /**
   * View the details of create physical card tasks by account.  Ordered by createdDate, with
   * the newest entries appearing first
   *
   * @summary Get physical card create tasks by account
   * @throws FetchError<400, types.GetCreatePhysicalCardAsyncTasksByAccountResponse400> Invalid request
   * @throws FetchError<405, types.GetCreatePhysicalCardAsyncTasksByAccountResponse405> Method Not Allowed
   */
  getCreatePhysicalCardAsyncTasksByAccount(
    metadata: types.GetCreatePhysicalCardAsyncTasksByAccountMetadataParam
  ): Promise<
    FetchResponse<
      200,
      types.GetCreatePhysicalCardAsyncTasksByAccountResponse200
    >
  > {
    return this.core.fetch(
      "/accounts/{aid}/physical-card-request-tasks",
      "get",
      metadata
    );
  }

  /**
   * Reject Collection
   *
   * @summary Reject Collection
   * @throws FetchError<400, types.RejectCollectionResponse400> Collection has not been rejected
   * @throws FetchError<405, types.RejectCollectionResponse405> Method Not Allowed
   */
  rejectCollection(
    body: types.RejectCollectionBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/directdebits/reject", "post", body);
  }

  /**
   * Used to request the cancellation of a Mandate.
   *
   * @summary Cancel a specific Mandate
   * @throws FetchError<400, types.CancelDdosMandateResponse400> Bad Request
   * @throws FetchError<405, types.CancelDdosMandateResponse405> Method Not Allowed
   */
  cancelDdosMandate(
    body: types.CancelDdosMandateBodyParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/directdebits/cancel", "post", body);
  }

  /**
   * Used for creation of mandates, that are migrated from other provider to Modulr.
   *
   * @summary Migrate a mandate
   * @throws FetchError<400, types.MigrateMandateResponse400> Mandate migration was rejected
   * @throws FetchError<405, types.MigrateMandateResponse405> Method Not Allowed
   */
  migrateMandate(
    body: types.MigrateMandateBodyParam,
    metadata: types.MigrateMandateMetadataParam
  ): Promise<FetchResponse<201, types.MigrateMandateResponse201>> {
    return this.core.fetch(
      "/directdebits/accounts/{id}/mandates",
      "post",
      body,
      metadata
    );
  }

  /**
   * Used to get all the Mandates for a specific account.
   *
   * @summary Retrieve all Mandates for an account
   * @throws FetchError<400, types.RetrieveMandatesResponse400> Bad Request
   * @throws FetchError<405, types.RetrieveMandatesResponse405> Method Not Allowed
   */
  retrieveMandates(
    metadata: types.RetrieveMandatesMetadataParam
  ): Promise<FetchResponse<200, types.RetrieveMandatesResponse200>> {
    return this.core.fetch(
      "/directdebits/enquire/{accountId}",
      "get",
      metadata
    );
  }

  /**
   * Uploads the payment file and store the valid files extracted payments for later creating
   * payments
   *
   * @summary Upload payment file and store valid payments
   * @throws FetchError<400, types.UploadPaymentFileResponse400> Bad Request
   * @throws FetchError<405, types.UploadPaymentFileResponse405> Method Not Allowed
   * @throws FetchError<500, types.UploadPaymentFileResponse500> 500 error code is issued when problem occurred during decoding and decompressing file
   * content
   */
  uploadPaymentFile(
    body: types.UploadPaymentFileBodyParam
  ): Promise<FetchResponse<200, types.UploadPaymentFileResponse200>> {
    return this.core.fetch("/payment-files", "post", body);
  }

  /**
   * Create a batch payment request from a valid upload file and send for processing to the
   * payment service
   *
   * @summary Create payments from an uploaded file
   * @throws FetchError<400, types.ProceedResponse400> Invalid payment file
   * @throws FetchError<405, types.ProceedResponse405> Method Not Allowed
   */
  proceed(
    body: types.ProceedBodyParam,
    metadata: types.ProceedMetadataParam
  ): Promise<FetchResponse<201, types.ProceedResponse201>> {
    return this.core.fetch(
      "/payment-files/{fileId}/proceed",
      "post",
      body,
      metadata
    );
  }

  /**
   * Get latest status of an uploaded payment file
   *
   * @summary Get an upload file latest status
   * @throws FetchError<400, types.StatusResponse400> Invalid Payment file
   * @throws FetchError<405, types.StatusResponse405> Method Not Allowed
   */
  status(
    metadata: types.StatusMetadataParam
  ): Promise<FetchResponse<200, types.StatusResponse200>> {
    return this.core.fetch("/payment-files/{fileId}", "get", metadata);
  }

  /**
   * This endpoint allows you to check the account details of a payee with their bank before
   * you create a beneficiary or payment. If the account details are confirmed, you will have
   * greater assurance that a payment you create will reach the correct bank account.
   * This endpoint does not support idempotent requests. Any requests containing an
   * x-mod-nonce header used by a previous request will return the response <code>403:
   * Forbidden ("Unique/allowed nonce header not found")</code>
   *
   * @summary Create an account name check
   * @throws FetchError<400, types.CreateOutboundCopResponse400> Validation Errors
   * @throws FetchError<404, types.CreateOutboundCopResponse404> Not Found
   * @throws FetchError<429, types.CreateOutboundCopResponse429> Too Many Requests
   * @throws FetchError<500, types.CreateOutboundCopResponse500> Internal Server Error
   * @throws FetchError<503, types.CreateOutboundCopResponse503> Service Unavailable
   */
  createOutboundCop(
    body: types.CreateOutboundCopBodyParam
  ): Promise<FetchResponse<201, types.CreateOutboundCopResponse201>> {
    return this.core.fetch("/account-name-check", "post", body);
  }

  /**
   * Returns a list of all sort codes and account numbers for which Secondary Reference Data
   * must be provided with all account name check requests.
   *
   * @summary Get SRD Accounts
   * @throws FetchError<400, types.GetSrdAccountsResponse400> Invalid query params provided
   * @throws FetchError<401, types.GetSrdAccountsResponse401> Invalid credentials
   * @throws FetchError<403, types.GetSrdAccountsResponse403> CoP Access denied
   * @throws FetchError<500, types.GetSrdAccountsResponse500> Unexpected error occurred
   * @throws FetchError<503, types.GetSrdAccountsResponse503> Service outage
   */
  getSrdAccounts(
    metadata?: types.GetSrdAccountsMetadataParam
  ): Promise<FetchResponse<200, types.GetSrdAccountsResponse200>> {
    return this.core.fetch("/account-name-check/srd-accounts", "get", metadata);
  }

  /**
   * Create an authorisation for a card
   *
   * @summary Create a card authorisation
   * @throws FetchError<400, types.CreateAuthorisationResponse400> Validation errors
   * @throws FetchError<405, types.CreateAuthorisationResponse405> Method Not Allowed
   */
  createAuthorisation(
    body: types.CreateAuthorisationBodyParam,
    metadata: types.CreateAuthorisationMetadataParam
  ): Promise<FetchResponse<201, types.CreateAuthorisationResponse201>> {
    return this.core.fetch(
      "/cards/{cardId}/authorisations",
      "post",
      body,
      metadata
    );
  }

  /**
   * Settle the card authorisation
   *
   * @summary Settle the card authorisation
   * @throws FetchError<400, types.SettleAuthorisationResponse400> Validation errors
   * @throws FetchError<405, types.SettleAuthorisationResponse405> Method Not Allowed
   */
  settleAuthorisation(
    metadata: types.SettleAuthorisationMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch("/authorisations/{authId}/settle", "post", metadata);
  }

  /**
   * Simulate a reversal of an authorization for a card
   *
   * @summary Reverse the card authorisation
   * @throws FetchError<400, types.ReverseAuthorisationResponse400> Validation errors
   * @throws FetchError<405, types.ReverseAuthorisationResponse405> Method Not Allowed
   */
  reverseAuthorisation(
    metadata: types.ReverseAuthorisationMetadataParam
  ): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch(
      "/authorisations/{authId}/reverse",
      "post",
      metadata
    );
  }

  /**
   * Initiate a new standing order to the specified destination account from an account held
   * at an ASPSP.
   *
   * @summary Initiate standing order from ASPSP
   * @throws FetchError<400, types.CreateStandingOrderInitiationResponse400> Bad Request
   * @throws FetchError<405, types.CreateStandingOrderInitiationResponse405> Method Not Allowed
   */
  createStandingOrderInitiation(
    body: types.CreateStandingOrderInitiationBodyParam
  ): Promise<
    FetchResponse<201, types.CreateStandingOrderInitiationResponse201>
  > {
    return this.core.fetch("/standing-order-initiations", "post", body);
  }

  /**
   * Initiate a payment to the specified destination account from an account held at an
   * ASPSP.
   *
   * @summary Initiate payment from ASPSP
   * @throws FetchError<400, types.CreatePaymentInitiationResponse400> Bad Request
   * @throws FetchError<405, types.CreatePaymentInitiationResponse405> Method Not Allowed
   */
  createPaymentInitiation(
    body: types.CreatePaymentInitiationBodyParam
  ): Promise<FetchResponse<201, types.CreatePaymentInitiationResponse201>> {
    return this.core.fetch("/payment-initiations", "post", body);
  }

  /**
   * Retrieve the details of a specific standing order initiation request.
   *
   * @summary Get standing order initiation request details
   * @throws FetchError<400, types.GetStandingOrderInitiationResponse400> Bad Request
   * @throws FetchError<404, types.GetStandingOrderInitiationResponse404> Standing order initiation not found
   * @throws FetchError<405, types.GetStandingOrderInitiationResponse405> Method Not Allowed
   */
  getStandingOrderInitiation(
    metadata: types.GetStandingOrderInitiationMetadataParam
  ): Promise<FetchResponse<200, types.GetStandingOrderInitiationResponse200>> {
    return this.core.fetch(
      "/standing-order-initiations/{standingOrderInitiationId}",
      "get",
      metadata
    );
  }

  /**
   * Retrieve the details of a specific payment initiation request.
   *
   * @summary Get payment initiation request details
   * @throws FetchError<400, types.GetPaymentInitiationResponse400> Bad Request
   * @throws FetchError<404, types.GetPaymentInitiationResponse404> Payment initiation not found
   * @throws FetchError<405, types.GetPaymentInitiationResponse405> Method Not Allowed
   */
  getPaymentInitiation(
    metadata: types.GetPaymentInitiationMetadataParam
  ): Promise<FetchResponse<200, types.GetPaymentInitiationResponse200>> {
    return this.core.fetch(
      "/payment-initiations/{paymentInitiationId}",
      "get",
      metadata
    );
  }

  /**
   * Gets a list of all supported Account Servicing Payment Service Providers (ASPSPs).
   *
   * @summary Get supported ASPSPs
   * @throws FetchError<400, types.GetAspsProvidersResponse400> Bad Request
   * @throws FetchError<405, types.GetAspsProvidersResponse405> Method Not Allowed
   */
  getAspsProviders(): Promise<
    FetchResponse<200, types.GetAspsProvidersResponse200>
  > {
    return this.core.fetch("/aspsps", "get");
  }

  /**
   * Uploads and stores document in a repository. Gives back Url encoded document path in the
   * repository
   *
   * @summary Uploads and stores document
   * @throws FetchError<400, types.UploadResponse400> Validation errors
   * @throws FetchError<405, types.UploadResponse405> Method Not Allowed
   */
  upload(
    body: types.UploadBodyParam
  ): Promise<FetchResponse<201, types.UploadResponse201>> {
    return this.core.fetch("/documents", "post", body);
  }
}

const createSDK = (() => {
  return new SDK();
})();
export default createSDK;

export type {
  ActivateCardMetadataParam,
  ActivateCardResponse400,
  ActivateCardResponse405,
  AddCustomerNotificationBodyParam,
  AddCustomerNotificationMetadataParam,
  AddCustomerNotificationResponse201,
  AddCustomerNotificationResponse400,
  AddCustomerNotificationResponse405,
  AddPartnerNotificationBodyParam,
  AddPartnerNotificationMetadataParam,
  AddPartnerNotificationResponse201,
  AddPartnerNotificationResponse400,
  AddPartnerNotificationResponse405,
  BlockAccountMetadataParam,
  BlockAccountResponse400,
  BlockAccountResponse405,
  BlockCardMetadataParam,
  BlockCardResponse400,
  BlockCardResponse405,
  CancelBatchPaymentsMetadataParam,
  CancelBatchPaymentsResponse400,
  CancelBatchPaymentsResponse405,
  CancelCardBodyParam,
  CancelCardMetadataParam,
  CancelCardResponse400,
  CancelCardResponse405,
  CancelCollectionMetadataParam,
  CancelCollectionResponse400,
  CancelCollectionResponse404,
  CancelCollectionResponse405,
  CancelCollectionScheduleMetadataParam,
  CancelCollectionScheduleResponse400,
  CancelCollectionScheduleResponse404,
  CancelCollectionScheduleResponse405,
  CancelDdosMandateBodyParam,
  CancelDdosMandateResponse400,
  CancelDdosMandateResponse405,
  CancelMandateBodyParam,
  CancelMandateMetadataParam,
  CancelMandateResponse400,
  CancelMandateResponse404,
  CancelMandateResponse405,
  CardEnquiryBodyParam,
  CardEnquiryResponse200,
  CardEnquiryResponse400,
  CardEnquiryResponse405,
  CloseAccountMetadataParam,
  CloseAccountResponse400,
  CloseAccountResponse405,
  CreateAccessGroupBodyParam,
  CreateAccessGroupResponse201,
  CreateAccessGroupResponse400,
  CreateAccessGroupResponse405,
  CreateAccountBodyParam,
  CreateAccountMetadataParam,
  CreateAccountResponse201,
  CreateAccountResponse400,
  CreateAccountResponse405,
  CreateAuthorisationBodyParam,
  CreateAuthorisationMetadataParam,
  CreateAuthorisationResponse201,
  CreateAuthorisationResponse400,
  CreateAuthorisationResponse405,
  CreateBeneficiaryBodyParam,
  CreateBeneficiaryMetadataParam,
  CreateBeneficiaryResponse201,
  CreateBeneficiaryResponse400,
  CreateBeneficiaryResponse405,
  CreateCardBodyParam,
  CreateCardMetadataParam,
  CreateCardResponse201,
  CreateCardResponse400,
  CreateCardResponse405,
  CreateCollectionScheduleBodyParam,
  CreateCollectionScheduleMetadataParam,
  CreateCollectionScheduleResponse200,
  CreateCollectionScheduleResponse400,
  CreateCollectionScheduleResponse404,
  CreateCollectionScheduleResponse405,
  CreateCustomerBodyParam,
  CreateCustomerResponse201,
  CreateCustomerResponse400,
  CreateCustomerResponse405,
  CreateMandateBodyParam,
  CreateMandateMetadataParam,
  CreateMandateResponse200,
  CreateMandateResponse400,
  CreateMandateResponse404,
  CreateMandateResponse405,
  CreateOutboundCopBodyParam,
  CreateOutboundCopResponse201,
  CreateOutboundCopResponse400,
  CreateOutboundCopResponse404,
  CreateOutboundCopResponse429,
  CreateOutboundCopResponse500,
  CreateOutboundCopResponse503,
  CreatePaymentInitiationBodyParam,
  CreatePaymentInitiationResponse201,
  CreatePaymentInitiationResponse400,
  CreatePaymentInitiationResponse405,
  CreatePaymentsBodyParam,
  CreatePaymentsResponse400,
  CreatePaymentsResponse405,
  CreatePhysicalCardBodyParam,
  CreatePhysicalCardMetadataParam,
  CreatePhysicalCardResponse202,
  CreatePhysicalCardResponse400,
  CreatePhysicalCardResponse405,
  CreateRuleBodyParam,
  CreateRuleResponse201,
  CreateRuleResponse400,
  CreateRuleResponse405,
  CreateStandingOrderInitiationBodyParam,
  CreateStandingOrderInitiationResponse201,
  CreateStandingOrderInitiationResponse400,
  CreateStandingOrderInitiationResponse405,
  DeleteBeneficiariesMetadataParam,
  DeleteBeneficiariesResponse200,
  DeleteBeneficiariesResponse207,
  DeleteBeneficiariesResponse400,
  DeleteBeneficiariesResponse405,
  EditAccountBodyParam,
  EditAccountMetadataParam,
  EditAccountResponse200,
  EditAccountResponse400,
  EditAccountResponse405,
  EditCustomerBodyParam,
  EditCustomerMetadataParam,
  EditCustomerNotificationBodyParam,
  EditCustomerNotificationMetadataParam,
  EditCustomerNotificationResponse200,
  EditCustomerNotificationResponse400,
  EditCustomerNotificationResponse404,
  EditCustomerNotificationResponse405,
  EditCustomerResponse200,
  EditCustomerResponse400,
  EditCustomerResponse405,
  EditPartnerNotificationBodyParam,
  EditPartnerNotificationMetadataParam,
  EditPartnerNotificationResponse200,
  EditPartnerNotificationResponse400,
  EditPartnerNotificationResponse404,
  EditPartnerNotificationResponse405,
  ExpireAuthorisationMetadataParam,
  ExpireAuthorisationResponse400,
  ExpireAuthorisationResponse405,
  GenerateCardHolderTokenBodyParam,
  GenerateCardHolderTokenMetadataParam,
  GenerateCardHolderTokenResponse200,
  GenerateCardHolderTokenResponse400,
  GenerateCardHolderTokenResponse405,
  GenerateCsvMetadataParam,
  GenerateCsvResponse400,
  GenerateCsvResponse405,
  GetAccessGroupMetadataParam,
  GetAccessGroupResponse200,
  GetAccessGroupResponse400,
  GetAccessGroupResponse405,
  GetAccessGroupsMetadataParam,
  GetAccessGroupsResponse200,
  GetAccessGroupsResponse400,
  GetAccessGroupsResponse405,
  GetAccountMetadataParam,
  GetAccountResponse200,
  GetAccountResponse400,
  GetAccountResponse405,
  GetAccountsByCustomerMetadataParam,
  GetAccountsByCustomerResponse200,
  GetAccountsByCustomerResponse400,
  GetAccountsByCustomerResponse405,
  GetAccountsMetadataParam,
  GetAccountsResponse200,
  GetAccountsResponse400,
  GetAccountsResponse405,
  GetAllCustomerNotificationsMetadataParam,
  GetAllCustomerNotificationsResponse200,
  GetAllCustomerNotificationsResponse400,
  GetAllCustomerNotificationsResponse404,
  GetAllCustomerNotificationsResponse405,
  GetAllPartnerNotificationsMetadataParam,
  GetAllPartnerNotificationsResponse200,
  GetAllPartnerNotificationsResponse400,
  GetAllPartnerNotificationsResponse404,
  GetAllPartnerNotificationsResponse405,
  GetAspsProvidersResponse200,
  GetAspsProvidersResponse400,
  GetAspsProvidersResponse405,
  GetAsyncTaskMetadataParam,
  GetAsyncTaskResponse200,
  GetAsyncTaskResponse400,
  GetAsyncTaskResponse405,
  GetAsyncTasksMetadataParam,
  GetAsyncTasksResponse200,
  GetAsyncTasksResponse400,
  GetAsyncTasksResponse405,
  GetBatchPaymentMetadataParam,
  GetBatchPaymentResponse200,
  GetBatchPaymentResponse400,
  GetBatchPaymentResponse405,
  GetBatchPaymentsMetadataParam,
  GetBatchPaymentsResponse200,
  GetBatchPaymentsResponse400,
  GetBatchPaymentsResponse405,
  GetBeneficiariesMetadataParam,
  GetBeneficiariesResponse200,
  GetBeneficiariesResponse400,
  GetBeneficiariesResponse405,
  GetCardActivitiesMetadataParam,
  GetCardActivitiesResponse200,
  GetCardActivitiesResponse400,
  GetCardActivitiesResponse405,
  GetCardMetadataParam,
  GetCardResponse200,
  GetCardResponse400,
  GetCardResponse405,
  GetCardsByAccountMetadataParam,
  GetCardsByAccountResponse200,
  GetCardsByAccountResponse400,
  GetCardsByAccountResponse405,
  GetCardsMetadataParam,
  GetCardsResponse200,
  GetCardsResponse400,
  GetCardsResponse405,
  GetCollectionSchedulesMetadataParam,
  GetCollectionSchedulesResponse200,
  GetCollectionSchedulesResponse400,
  GetCollectionSchedulesResponse404,
  GetCollectionSchedulesResponse405,
  GetCollectionsMetadataParam,
  GetCollectionsResponse200,
  GetCollectionsResponse400,
  GetCollectionsResponse404,
  GetCollectionsResponse405,
  GetCreatePhysicalCardAsyncTasksByAccountMetadataParam,
  GetCreatePhysicalCardAsyncTasksByAccountResponse200,
  GetCreatePhysicalCardAsyncTasksByAccountResponse400,
  GetCreatePhysicalCardAsyncTasksByAccountResponse405,
  GetCustomerMetadataParam,
  GetCustomerNotificationMetadataParam,
  GetCustomerNotificationResponse200,
  GetCustomerNotificationResponse400,
  GetCustomerNotificationResponse404,
  GetCustomerNotificationResponse405,
  GetCustomerResponse200,
  GetCustomerResponse400,
  GetCustomerResponse405,
  GetCustomersMetadataParam,
  GetCustomersResponse200,
  GetCustomersResponse400,
  GetCustomersResponse405,
  GetFailedWebHooksMetadataParam,
  GetFailedWebHooksResponse200,
  GetFailedWebHooksResponse400,
  GetFailedWebHooksResponse405,
  GetLocksMetadataParam,
  GetLocksResponse200,
  GetLocksResponse400,
  GetLocksResponse405,
  GetMandatesMetadataParam,
  GetMandatesResponse200,
  GetMandatesResponse400,
  GetMandatesResponse404,
  GetMandatesResponse405,
  GetPartnerNotificationMetadataParam,
  GetPartnerNotificationResponse200,
  GetPartnerNotificationResponse400,
  GetPartnerNotificationResponse404,
  GetPartnerNotificationResponse405,
  GetPaymentInitiationMetadataParam,
  GetPaymentInitiationResponse200,
  GetPaymentInitiationResponse400,
  GetPaymentInitiationResponse404,
  GetPaymentInitiationResponse405,
  GetPaymentsMetadataParam,
  GetPaymentsResponse200,
  GetPaymentsResponse400,
  GetPaymentsResponse405,
  GetRuleMetadataParam,
  GetRuleResponse200,
  GetRuleResponse400,
  GetRuleResponse405,
  GetRulesMetadataParam,
  GetRulesResponse200,
  GetRulesResponse400,
  GetRulesResponse405,
  GetSecureCardDetailsResponse200,
  GetSecureCardDetailsResponse400,
  GetSecureCardDetailsResponse403,
  GetSecureCardDetailsResponse405,
  GetSrdAccountsMetadataParam,
  GetSrdAccountsResponse200,
  GetSrdAccountsResponse400,
  GetSrdAccountsResponse401,
  GetSrdAccountsResponse403,
  GetSrdAccountsResponse500,
  GetSrdAccountsResponse503,
  GetStandingOrderInitiationMetadataParam,
  GetStandingOrderInitiationResponse200,
  GetStandingOrderInitiationResponse400,
  GetStandingOrderInitiationResponse404,
  GetStandingOrderInitiationResponse405,
  GetTransactionsByAccountMetadataParam,
  GetTransactionsByAccountResponse200,
  GetTransactionsByAccountResponse400,
  GetTransactionsByAccountResponse405,
  MigrateMandateBodyParam,
  MigrateMandateMetadataParam,
  MigrateMandateResponse201,
  MigrateMandateResponse400,
  MigrateMandateResponse405,
  ModifyRuleBodyParam,
  ModifyRuleMetadataParam,
  ModifyRuleResponse200,
  ModifyRuleResponse400,
  ModifyRuleResponse405,
  ProceedBodyParam,
  ProceedMetadataParam,
  ProceedResponse201,
  ProceedResponse400,
  ProceedResponse405,
  ReinstateMandateBodyParam,
  ReinstateMandateMetadataParam,
  ReinstateMandateResponse400,
  ReinstateMandateResponse404,
  ReinstateMandateResponse405,
  RejectCollectionBodyParam,
  RejectCollectionResponse400,
  RejectCollectionResponse405,
  RemoveRulesMetadataParam,
  RemoveRulesResponse200,
  RemoveRulesResponse207,
  RemoveRulesResponse400,
  RemoveRulesResponse405,
  ReplaceCardBodyParam,
  ReplaceCardMetadataParam,
  ReplaceCardResponse201,
  ReplaceCardResponse400,
  ReplaceCardResponse405,
  ResetPinBodyParam,
  ResetPinMetadataParam,
  ResetPinResponse400,
  ResetPinResponse405,
  RetrieveMandatesMetadataParam,
  RetrieveMandatesResponse200,
  RetrieveMandatesResponse400,
  RetrieveMandatesResponse405,
  RetrievePinMetadataParam,
  RetrievePinResponse200,
  RetrievePinResponse400,
  RetrievePinResponse403,
  RetrievePinResponse405,
  ReverseAuthorisationMetadataParam,
  ReverseAuthorisationResponse400,
  ReverseAuthorisationResponse405,
  SecureResetPinBodyParam,
  SecureResetPinResponse400,
  SecureResetPinResponse405,
  SendPaymentBodyParam,
  SendPaymentResponse201,
  SendPaymentResponse400,
  SendPaymentResponse405,
  SettleAuthorisationMetadataParam,
  SettleAuthorisationResponse400,
  SettleAuthorisationResponse405,
  StatusMetadataParam,
  StatusResponse200,
  StatusResponse400,
  StatusResponse405,
  SubmitBatchPaymentsBodyParam,
  SubmitBatchPaymentsResponse201,
  SubmitBatchPaymentsResponse400,
  SubmitBatchPaymentsResponse405,
  SuspendCardMetadataParam,
  SuspendCardResponse400,
  SuspendCardResponse405,
  SuspendMandateBodyParam,
  SuspendMandateMetadataParam,
  SuspendMandateResponse400,
  SuspendMandateResponse404,
  SuspendMandateResponse405,
  UnblockAccountMetadataParam,
  UnblockAccountResponse400,
  UnblockAccountResponse405,
  UnblockCardMetadataParam,
  UnblockCardResponse400,
  UnblockCardResponse405,
  UnblockPinMetadataParam,
  UnblockPinResponse400,
  UnblockPinResponse405,
  UnsuspendCardMetadataParam,
  UnsuspendCardResponse400,
  UnsuspendCardResponse405,
  UpdateAccessGroupBodyParam,
  UpdateAccessGroupMetadataParam,
  UpdateAccessGroupResponse200,
  UpdateAccessGroupResponse400,
  UpdateAccessGroupResponse405,
  UpdateBodyParam,
  UpdateCardAuthenticationBodyParam,
  UpdateCardAuthenticationMetadataParam,
  UpdateCardAuthenticationResponse400,
  UpdateCardAuthenticationResponse405,
  UpdateMetadataParam,
  UpdateResponse400,
  UpdateResponse405,
  UpdateSecuredFundingLimitBodyParam,
  UpdateSecuredFundingLimitMetadataParam,
  UpdateSecuredFundingLimitResponse400,
  UpdateSecuredFundingLimitResponse405,
  UploadBodyParam,
  UploadPaymentFileBodyParam,
  UploadPaymentFileResponse200,
  UploadPaymentFileResponse400,
  UploadPaymentFileResponse405,
  UploadPaymentFileResponse500,
  UploadResponse201,
  UploadResponse400,
  UploadResponse405,
} from "./types";
