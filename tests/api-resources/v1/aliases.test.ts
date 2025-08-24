// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hidemail from 'hidemail';

const client = new Hidemail({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aliases', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.v1.aliases.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.aliases.create({ description: 'My new alias' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hidemail.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.aliases.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.aliases.list({}, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Hidemail.NotFoundError,
    );
  });

  // Prism tests are disabled
  test.skip('updateNote: only required params', async () => {
    const responsePromise = client.v1.aliases.updateNote({
      email: 'alias@hidemail.app',
      note: '"My shopping account"',
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
  test.skip('updateNote: required and optional params', async () => {
    const response = await client.v1.aliases.updateNote({
      email: 'alias@hidemail.app',
      note: '"My shopping account"',
    });
  });
});
