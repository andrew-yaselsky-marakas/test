# Shopify project template

Starter template for Shopify projects. Uses `Dawn` theme as a base.

## Setup

1. Create env file `cp .env.example .env`.
2. (Optional) If you have a staging site, you need to create an alternative env file `cp .env.develop.example .env.develop`
3. If you don't have access token, you should create one [here](https://git.qix.sx/-/profile/personal_access_tokens?name=Unilime+Read+Registry&scopes=api,read_registry). Token should have the following scopes: `api`, `read_registry.`
    1. Add the record to npm config using the following command: \
`npm config set -- //git.qix.sx/api/v4/packages/npm/:_authToken={your_access_token_here}`
4. Update env variables (See the [list of env variables](https://git.qix.sx/unilime/shopify/dev/shopify-theme-dev#env-variables)).
5. Install dependencies `npm install`.
6. Run `npm run watch` to start development.

## Troubleshooting

### **Command theme serve {dir} not found. Did you mean theme language-server**

Usually, this error occurs if `SHOPIFY_CLI_BUNDLED_THEME_CLI` environment variable is set to 1. Setting it to 0 should solve this issue. This variable was required because the older versions of Shopify CLI would not run properly without it.
