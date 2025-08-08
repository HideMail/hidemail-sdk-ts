// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Aliases extends APIResource {
  /**
   * This endpoint lets you create a new alias.
   *
   * @example
   * ```ts
   * const alias = await client.v1.aliases.create();
   * ```
   */
  create(
    body: AliasCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AliasCreateResponse> {
    return this._client.post('/api/v1/aliases', { body, ...options });
  }

  /**
   * This endpoint lets you get all your aliases.
   *
   * @example
   * ```ts
   * const aliases = await client.v1.aliases.list();
   * ```
   */
  list(query?: AliasListParams | null | undefined, options?: RequestOptions): APIPromise<AliasListResponse> {
    return this._client.get('/api/v1/aliases', options);
  }

  /**
   * This endpoint allows you to update the note for a specific email alias.
   *
   * @example
   * ```ts
   * const response = await client.v1.aliases.updateNote({
   *   email: 'alias@hidemail.app',
   *   note: '"My shopping account"',
   * });
   * ```
   */
  updateNote(body: AliasUpdateNoteParams, options?: RequestOptions): APIPromise<AliasUpdateNoteResponse> {
    return this._client.patch('/api/v1/aliases', { body, ...options });
  }
}

export interface AliasCreateResponse {
  data?: AliasCreateResponse.Data;
}

export namespace AliasCreateResponse {
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

export interface AliasListResponse {
  data?: Array<AliasListResponse.Data>;
}

export namespace AliasListResponse {
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

export interface AliasUpdateNoteResponse {
  data?: AliasUpdateNoteResponse.Data;
}

export namespace AliasUpdateNoteResponse {
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

export interface AliasCreateParams {
  /**
   * Note.
   */
  description?: string;
}

export interface AliasListParams {}

export interface AliasUpdateNoteParams {
  /**
   * The email alias to update.
   */
  email: string;

  /**
   * The new note for the alias. Max 255 characters.
   */
  note: string;
}

export declare namespace Aliases {
  export {
    type AliasCreateResponse as AliasCreateResponse,
    type AliasListResponse as AliasListResponse,
    type AliasUpdateNoteResponse as AliasUpdateNoteResponse,
    type AliasCreateParams as AliasCreateParams,
    type AliasListParams as AliasListParams,
    type AliasUpdateNoteParams as AliasUpdateNoteParams,
  };
}
