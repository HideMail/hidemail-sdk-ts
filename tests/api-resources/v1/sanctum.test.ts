// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hidemail from 'hidemail';

const client = new Hidemail({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sanctum', () => {
  // Prism tests are disabled
  test.skip('createToken: only required params', async () => {
    const responsePromise = client.v1.sanctum.createToken({
      device_name: 'Raycast',
      email: 'hi@example.com',
      password: 'password',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createToken: required and optional params', async () => {
    const response = await client.v1.sanctum.createToken({
      device_name: 'Raycast',
      email: 'hi@example.com',
      password: 'password',
    });
  });
});
