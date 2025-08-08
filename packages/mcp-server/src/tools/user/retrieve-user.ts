// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hidemail-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hidemail from 'hidemail';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/user',
  operationId: 'getApiUser',
};

export const tool: Tool = {
  name: 'retrieve_user',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hidemail, args: Record<string, unknown> | undefined) => {
  const response = await client.user.retrieve().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
