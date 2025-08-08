// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import activate_alias_v1 from './v1/activate-alias-v1';
import deactivate_alias_v1 from './v1/deactivate-alias-v1';
import delete_token_v1 from './v1/delete-token-v1';
import get_domain_options_v1 from './v1/get-domain-options-v1';
import remove_webhook_v1 from './v1/remove-webhook-v1';
import set_webhook_v1 from './v1/set-webhook-v1';
import create_token_v1_sanctum from './v1/sanctum/create-token-v1-sanctum';
import create_v1_email from './v1/email/create-v1-email';
import create_v1_aliases from './v1/aliases/create-v1-aliases';
import list_v1_aliases from './v1/aliases/list-v1-aliases';
import update_note_v1_aliases from './v1/aliases/update-note-v1-aliases';
import retrieve_user from './user/retrieve-user';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(activate_alias_v1);
addEndpoint(deactivate_alias_v1);
addEndpoint(delete_token_v1);
addEndpoint(get_domain_options_v1);
addEndpoint(remove_webhook_v1);
addEndpoint(set_webhook_v1);
addEndpoint(create_token_v1_sanctum);
addEndpoint(create_v1_email);
addEndpoint(create_v1_aliases);
addEndpoint(list_v1_aliases);
addEndpoint(update_note_v1_aliases);
addEndpoint(retrieve_user);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
