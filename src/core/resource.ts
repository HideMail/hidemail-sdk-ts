// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Hidemail } from '../client';

export abstract class APIResource {
  protected _client: Hidemail;

  constructor(client: Hidemail) {
    this._client = client;
  }
}
