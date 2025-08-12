// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hidemail from 'hidemail';

const client = new Hidemail({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('activateAlias: only required params', async () => {
    const responsePromise = client.v1.activateAlias({ email: 'dborer@example.net' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('activateAlias: required and optional params', async () => {
    const response = await client.v1.activateAlias({ email: 'dborer@example.net' });
  });

  // Prism tests are disabled
  test.skip('deactivateAlias: only required params', async () => {
    const responsePromise = client.v1.deactivateAlias({ email: 'gerard.robel@example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deactivateAlias: required and optional params', async () => {
    const response = await client.v1.deactivateAlias({ email: 'gerard.robel@example.com' });
  });

  // Prism tests are disabled
  test.skip('deleteToken', async () => {
    const responsePromise = client.v1.deleteToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getDomainOptions', async () => {
    const responsePromise = client.v1.getDomainOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('removeWebhook', async () => {
    const responsePromise = client.v1.removeWebhook();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('setWebhook: only required params', async () => {
    const responsePromise = client.v1.setWebhook({
      hookUrl: 'http://schuppe.com/labore-ut-asperiores-maxime-dicta',
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
  test.skip('setWebhook: required and optional params', async () => {
    const response = await client.v1.setWebhook({
      hookUrl: 'http://schuppe.com/labore-ut-asperiores-maxime-dicta',
    });
  });
});
