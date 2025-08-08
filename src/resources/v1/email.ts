// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Email extends APIResource {
  /**
   * @example
   * ```ts
   * await client.v1.email.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/email/create', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
