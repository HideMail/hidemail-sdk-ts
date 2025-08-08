// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Sanctum extends APIResource {
  /**
   * This endpoint lets you create a permanent token.
   *
   * @example
   * ```ts
   * await client.v1.sanctum.createToken({
   *   device_name: 'Raycast',
   *   email: 'hi@example.com',
   *   password: 'password',
   * });
   * ```
   */
  createToken(body: SanctumCreateTokenParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/sanctum/token', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SanctumCreateTokenParams {
  /**
   * Device Name.
   */
  device_name: string;

  /**
   * Email.
   */
  email: string;

  /**
   * Password.
   */
  password: string;
}

export declare namespace Sanctum {
  export { type SanctumCreateTokenParams as SanctumCreateTokenParams };
}
