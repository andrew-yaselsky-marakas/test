# Shopify project template

Starter template for Shopify projects. Uses `Dawn` theme as a base.

## Setup

1. Create env file `cp .env.example .env`.
2. If you don't have access token, you should create one [here](/-/profile/personal_access_tokens?name=Unilime+Read+Registry&scopes=api,read_registry). Token should have the following scopes: `api`, `read_registry.`
    1. Add the record to npm config using the following command: \
`npm config set -- //git.qix.sx/api/v4/packages/npm/:_authToken={your_access_token_here}`
3. Update env variables (See the [list of env variables](https://git.qix.sx/unilime/shopify/dev/shopify-theme-dev#env-variables)).
4. Install dependencies `npm install`.
5. Run `npm run watch` to start development.
