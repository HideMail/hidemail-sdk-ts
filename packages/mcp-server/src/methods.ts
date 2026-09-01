// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.v1.activateAlias',
    fullyQualifiedName: 'v1.activateAlias',
    httpMethod: 'post',
    httpPath: '/api/v1/active-aliases',
  },
  {
    clientCallName: 'client.v1.deactivateAlias',
    fullyQualifiedName: 'v1.deactivateAlias',
    httpMethod: 'delete',
    httpPath: '/api/v1/delete-aliases',
  },
  {
    clientCallName: 'client.v1.deleteToken',
    fullyQualifiedName: 'v1.deleteToken',
    httpMethod: 'delete',
    httpPath: '/api/v1/delete-token',
  },
  {
    clientCallName: 'client.v1.getDomainOptions',
    fullyQualifiedName: 'v1.getDomainOptions',
    httpMethod: 'get',
    httpPath: '/api/v1/domain-options',
  },
  {
    clientCallName: 'client.v1.removeWebhook',
    fullyQualifiedName: 'v1.removeWebhook',
    httpMethod: 'delete',
    httpPath: '/api/v1/unsubscribe',
  },
  {
    clientCallName: 'client.v1.setWebhook',
    fullyQualifiedName: 'v1.setWebhook',
    httpMethod: 'post',
    httpPath: '/api/v1/subscribe',
  },
  {
    clientCallName: 'client.v1.sanctum.createToken',
    fullyQualifiedName: 'v1.sanctum.createToken',
    httpMethod: 'post',
    httpPath: '/api/v1/sanctum/token',
  },
  {
    clientCallName: 'client.v1.email.create',
    fullyQualifiedName: 'v1.email.create',
    httpMethod: 'post',
    httpPath: '/api/v1/email/create',
  },
  {
    clientCallName: 'client.v1.aliases.create',
    fullyQualifiedName: 'v1.aliases.create',
    httpMethod: 'post',
    httpPath: '/api/v1/aliases',
  },
  {
    clientCallName: 'client.v1.aliases.list',
    fullyQualifiedName: 'v1.aliases.list',
    httpMethod: 'get',
    httpPath: '/api/v1/aliases',
  },
  {
    clientCallName: 'client.v1.aliases.updateNote',
    fullyQualifiedName: 'v1.aliases.updateNote',
    httpMethod: 'patch',
    httpPath: '/api/v1/aliases',
  },
  {
    clientCallName: 'client.user.retrieve',
    fullyQualifiedName: 'user.retrieve',
    httpMethod: 'get',
    httpPath: '/api/user',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
