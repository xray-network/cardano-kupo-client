<a href="https://discord.gg/WhZmm46APN"><img alt="Discord" src="https://img.shields.io/discord/852538978946383893?style=for-the-badge&logo=discord&label=Discord&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://www.npmjs.com/package/cardano-kupo-client"><img alt="NPM" src="https://img.shields.io/npm/v/cardano-kupo-client/latest?style=for-the-badge&logo=npm&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://github.com/xray-network/cardano-kupo-client/actions"><img alt="CODEQL" src="https://img.shields.io/github/actions/workflow/status/xray-network/cardano-kupo-client/codeql.yml?label=CodeQL&logo=github&style=for-the-badge&labelColor=%231940ED&color=%233FCB9B"></a>
  
# TypeScript Client for Kupo blockchain indexer

Automatically generated Openapi-fetch client for [Kupo](https://cardanosolutions.github.io/kupo/) based on [schema.yaml](https://cardanosolutions.github.io/kupo/api/nightly.yaml) OpenAPI schema.

## Installation

To install the client with Yarn, run:

```TypeScript
yarn install cardano-kupo-client
```

To install the client with NPM, run:

```TypeScript
npm i cardano-kupo-client
```

## Usage

```TypeScript
import KupoClient from "cardano-kupo-client"

const client = KupoClient("https://graph.xray.app/output/kupo/mainnet/api/v1")

const app = async () => {
  const health = await client.GET("/health")

  if (health.data) {
    console.log(health.data)
  }
  if (health.error) {
    console.error(health.error)
  }
}

app()
```

## Endpoints

* Check OpenAPI fetch documentations for available endpoint parameters: https://openapi-ts.pages.dev/openapi-fetch/
* The client uses OpenAPI definitions from the Kupo configuration: [nightly.yaml](https://cardanosolutions.github.io/kupo/api/nightly.yaml)
* A complete list of endpoints can be found here (RapiDoc): https://cardanosolutions.github.io/kupo


## API URLs

Managed by XRAY/Network (XRAY/Graph, Cloudflare WAF & Load Balancer), requires paid subscription

```
https://graph.xray.app/output/kupo/mainnet/api/v1
```

```
https://graph.xray.app/output/kupo/preprod/api/v1
```

```
https://graph.xray.app/output/kupo/preview/api/v1
```
