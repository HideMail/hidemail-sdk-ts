# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">V1ActivateAliasResponse</a></code>
- <code><a href="./src/resources/v1/v1.ts">V1DeactivateAliasResponse</a></code>

Methods:

- <code title="post /api/v1/active-aliases">client.v1.<a href="./src/resources/v1/v1.ts">activateAlias</a>({ ...params }) -> V1ActivateAliasResponse</code>
- <code title="delete /api/v1/delete-aliases">client.v1.<a href="./src/resources/v1/v1.ts">deactivateAlias</a>({ ...params }) -> V1DeactivateAliasResponse</code>
- <code title="delete /api/v1/delete-token">client.v1.<a href="./src/resources/v1/v1.ts">deleteToken</a>() -> void</code>
- <code title="get /api/v1/domain-options">client.v1.<a href="./src/resources/v1/v1.ts">getDomainOptions</a>() -> void</code>
- <code title="delete /api/v1/unsubscribe">client.v1.<a href="./src/resources/v1/v1.ts">removeWebhook</a>() -> void</code>
- <code title="post /api/v1/subscribe">client.v1.<a href="./src/resources/v1/v1.ts">setWebhook</a>({ ...params }) -> void</code>

## Sanctum

Methods:

- <code title="post /api/v1/sanctum/token">client.v1.sanctum.<a href="./src/resources/v1/sanctum.ts">createToken</a>({ ...params }) -> void</code>

## Email

Methods:

- <code title="post /api/v1/email/create">client.v1.email.<a href="./src/resources/v1/email.ts">create</a>() -> void</code>

## Aliases

Types:

- <code><a href="./src/resources/v1/aliases.ts">AliasCreateResponse</a></code>
- <code><a href="./src/resources/v1/aliases.ts">AliasListResponse</a></code>
- <code><a href="./src/resources/v1/aliases.ts">AliasUpdateNoteResponse</a></code>

Methods:

- <code title="post /api/v1/aliases">client.v1.aliases.<a href="./src/resources/v1/aliases.ts">create</a>({ ...params }) -> AliasCreateResponse</code>
- <code title="get /api/v1/aliases">client.v1.aliases.<a href="./src/resources/v1/aliases.ts">list</a>() -> AliasListResponse</code>
- <code title="patch /api/v1/aliases">client.v1.aliases.<a href="./src/resources/v1/aliases.ts">updateNote</a>({ ...params }) -> AliasUpdateNoteResponse</code>

# User

Methods:

- <code title="get /api/user">client.user.<a href="./src/resources/user.ts">retrieve</a>() -> void</code>
