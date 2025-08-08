// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hidemail-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hidemail from 'hidemail';

export const metadata: Metadata = {
  resource: 'v1.email',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/email/create',
  operationId: 'postApiV1EmailCreate',
};

export const tool: Tool = {
  name: 'create_v1_email',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Hidemail, args: Record<string, unknown> | undefined) => {
  const response = await client.v1.email.create().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
