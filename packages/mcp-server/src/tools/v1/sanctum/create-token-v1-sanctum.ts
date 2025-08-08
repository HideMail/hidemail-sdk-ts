// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hidemail-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hidemail from 'hidemail';

export const metadata: Metadata = {
  resource: 'v1.sanctum',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sanctum/token',
  operationId: 'createAToken',
};

export const tool: Tool = {
  name: 'create_token_v1_sanctum',
  description: 'This endpoint lets you create a permanent token.',
  inputSchema: {
    type: 'object',
    properties: {
      device_name: {
        type: 'string',
        description: 'Device Name.',
      },
      email: {
        type: 'string',
        description: 'Email.',
      },
      password: {
        type: 'string',
        description: 'Password.',
      },
    },
    required: ['device_name', 'email', 'password'],
  },
  annotations: {},
};

export const handler = async (client: Hidemail, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.sanctum.createToken(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
