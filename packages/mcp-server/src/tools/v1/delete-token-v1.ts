// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hidemail-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hidemail from 'hidemail';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v1/delete-token',
  operationId: 'deleteApiToken',
};

export const tool: Tool = {
  name: 'delete_token_v1',
  description: 'This endpoint lets you remove a webhook URL.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Hidemail, args: Record<string, unknown> | undefined) => {
  const response = await client.v1.deleteToken().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
