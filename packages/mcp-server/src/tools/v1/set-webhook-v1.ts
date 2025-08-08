// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hidemail-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hidemail from 'hidemail';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/subscribe',
  operationId: 'setAWebhookURL',
};

export const tool: Tool = {
  name: 'set_webhook_v1',
  description:
    'This endpoint lets you create a webhook URL. After you get email on any of your aliases we will send all data to this URL. You can do automation with this data and create your own integrations.',
  inputSchema: {
    type: 'object',
    properties: {
      hookUrl: {
        type: 'string',
        description: 'Must not be greater than 255 characters.',
      },
    },
    required: ['hookUrl'],
  },
  annotations: {},
};

export const handler = async (client: Hidemail, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.setWebhook(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
