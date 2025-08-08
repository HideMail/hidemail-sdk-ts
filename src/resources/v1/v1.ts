// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AliasesAPI from './aliases';
import {
  AliasCreateParams,
  AliasCreateResponse,
  AliasListParams,
  AliasListResponse,
  AliasUpdateNoteParams,
  AliasUpdateNoteResponse,
  Aliases,
} from './aliases';
import * as EmailAPI from './email';
import { Email } from './email';
import * as SanctumAPI from './sanctum';
import { Sanctum, SanctumCreateTokenParams } from './sanctum';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  sanctum: SanctumAPI.Sanctum = new SanctumAPI.Sanctum(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  aliases: AliasesAPI.Aliases = new AliasesAPI.Aliases(this._client);

  /**
   * This endpoint lets you update the status of an alias to active.
   *
   * @example
   * ```ts
   * const response = await client.v1.activateAlias({
   *   email: 'dborer@example.net',
   * });
   * ```
   */
  activateAlias(body: V1ActivateAliasParams, options?: RequestOptions): APIPromise<V1ActivateAliasResponse> {
    return this._client.post('/api/v1/active-aliases', { body, ...options });
  }

  /**
   * This endpoint lets you update the status of an alias to in active.
   *
   * @example
   * ```ts
   * const response = await client.v1.deactivateAlias({
   *   email: 'gerard.robel@example.com',
   * });
   * ```
   */
  deactivateAlias(
    body: V1DeactivateAliasParams,
    options?: RequestOptions,
  ): APIPromise<V1DeactivateAliasResponse> {
    return this._client.delete('/api/v1/delete-aliases', { body, ...options });
  }

  /**
   * This endpoint lets you remove a webhook URL.
   *
   * @example
   * ```ts
   * await client.v1.deleteToken();
   * ```
   */
  deleteToken(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/api/v1/delete-token', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.v1.getDomainOptions();
   * ```
   */
  getDomainOptions(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/domain-options', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint lets you remove a webhook URL.
   *
   * @example
   * ```ts
   * await client.v1.removeWebhook();
   * ```
   */
  removeWebhook(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/api/v1/unsubscribe', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint lets you create a webhook URL. After you get email on any of your
   * aliases we will send all data to this URL. You can do automation with this data
   * and create your own integrations.
   *
   * @example
   * ```ts
   * await client.v1.setWebhook({
   *   hookUrl:
   *     'http://schuppe.com/labore-ut-asperiores-maxime-dicta',
   * });
   * ```
   */
  setWebhook(body: V1SetWebhookParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/subscribe', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface V1ActivateAliasResponse {
  data?: V1ActivateAliasResponse.Data;
}

export namespace V1ActivateAliasResponse {
  export interface Data {
    created_at?: string;

    email?: string;

    is_active?: boolean;

    note?: string;

    total_blocked?: number;

    total_forwarded?: number;

    updated_at?: string;
  }
}

export interface V1DeactivateAliasResponse {
  data?: V1DeactivateAliasResponse.Data;
}

export namespace V1DeactivateAliasResponse {
  export interface Data {
    created_at?: string;

    email?: string;

    is_active?: boolean;

    note?: string;

    total_blocked?: number;

    total_forwarded?: number;

    updated_at?: string;
  }
}

export interface V1ActivateAliasParams {
  /**
   * The email you want to activate
   */
  email: string;
}

export interface V1DeactivateAliasParams {
  /**
   * The email you want to deactivate
   */
  email: string;
}

export interface V1SetWebhookParams {
  /**
   * Must not be greater than 255 characters.
   */
  hookUrl: string;
}

V1.Sanctum = Sanctum;
V1.Email = Email;
V1.Aliases = Aliases;

export declare namespace V1 {
  export {
    type V1ActivateAliasResponse as V1ActivateAliasResponse,
    type V1DeactivateAliasResponse as V1DeactivateAliasResponse,
    type V1ActivateAliasParams as V1ActivateAliasParams,
    type V1DeactivateAliasParams as V1DeactivateAliasParams,
    type V1SetWebhookParams as V1SetWebhookParams,
  };

  export { Sanctum as Sanctum, type SanctumCreateTokenParams as SanctumCreateTokenParams };

  export { Email as Email };

  export {
    Aliases as Aliases,
    type AliasCreateResponse as AliasCreateResponse,
    type AliasListResponse as AliasListResponse,
    type AliasUpdateNoteResponse as AliasUpdateNoteResponse,
    type AliasCreateParams as AliasCreateParams,
    type AliasListParams as AliasListParams,
    type AliasUpdateNoteParams as AliasUpdateNoteParams,
  };
}
