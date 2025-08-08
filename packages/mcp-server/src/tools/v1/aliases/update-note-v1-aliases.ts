// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hidemail-mcp/filtering';
import { Metadata, asTextContentResult } from 'hidemail-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hidemail from 'hidemail';

export const metadata: Metadata = {
  resource: 'v1.aliases',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v1/aliases',
  operationId: 'updateAnEmailAliasNote',
};

export const tool: Tool = {
  name: 'update_note_v1_aliases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to update the note for a specific email alias.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string'\n        },\n        email: {\n          type: 'string'\n        },\n        is_active: {\n          type: 'boolean'\n        },\n        note: {\n          type: 'string'\n        },\n        total_blocked: {\n          type: 'integer'\n        },\n        total_forwarded: {\n          type: 'integer'\n        },\n        updated_at: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'The email alias to update.',
      },
      note: {
        type: 'string',
        description: 'The new note for the alias. Max 255 characters.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email', 'note'],
  },
  annotations: {},
};

export const handler = async (client: Hidemail, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.aliases.updateNote(body)));
};

export default { metadata, tool, handler };
