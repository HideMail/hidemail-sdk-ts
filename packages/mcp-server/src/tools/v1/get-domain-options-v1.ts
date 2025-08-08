// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hidemail-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hidemail from 'hidemail';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/domain-options',
  operationId: 'getApiV1DomainOptions',
};

export const tool: Tool = {
  name: 'get_domain_options_v1',
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
  const response = await client.v1.getDomainOptions().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
