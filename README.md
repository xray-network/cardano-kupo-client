<a href="https://discord.gg/WhZmm46APN"><img alt="Discord" src="https://img.shields.io/discord/852538978946383893?style=for-the-badge&logo=discord&label=Discord&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://www.npmjs.com/package/cardano-kupo-client"><img alt="NPM" src="https://img.shields.io/npm/v/cardano-kupo-client/latest?style=for-the-badge&logo=npm&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://github.com/xray-network/cardano-kupo-client/actions"><img alt="CODEQL" src="https://img.shields.io/github/actions/workflow/status/xray-network/cardano-kupo-client/codeql.yml?label=CodeQL&logo=github&style=for-the-badge&labelColor=%231940ED&color=%233FCB9B"></a>
  
# TypeScript Client for Kupo blockchain indexer

Automatically generated Openapi-fetch client for Kupo.

## Installation

To install the client with Yarn, run:

```TypeScript
yarn add cardano-kupo-client
```

To install the client with NPM, run:

```TypeScript
npm i cardano-kupo-client
```

## Usage

```TypeScript
import KupoClient from "cardano-kupo-client"

const client = KupoClient("https://graph.xray.app/output/services/kupo/mainnet/api/v1")

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

## Advanced Usage

<details>
<summary>Headers</summary>
  
``` TypeScript
import KupoClient from "cardano-kupo-client"

const baseUrl = "https://graph.xray.app/output/services/kupo/mainnet/api/v1"
const headers = {} // rest headers
const client = KupoClient(baseUrl, headers)

const app = async () => {
  const health = await client.GET("/health", {
    headers: { "Content-Type": "application/json" }, // one shot headers
  })

  console.log(health.data)
}

app()
```

</details>

<details>
<summary>Request Cancellation (AbortSignal)</summary>

```TypeScript
import KupoClient from "cardano-kupo-client"

const client = KupoClient("https://graph.xray.app/output/services/kupo/mainnet/api/v1")

const app = async () => {
  const abortController = new AbortController()

  setTimeout(() => {
    abortController.abort() // cancel request
    console.log('Aborted!')
  }, 200)

  const assets = await client.GET("/health", {
    signal: abortController.signal,
  })
}

app()
```

</details>

<details>
<summary>Updating Schema</summary>

Run schema update:
```console
yarn schema
```

</details>

## Playground

* XRAY/Graph Kupo — https://graph.xray.app/output/services/kupo/mainnet/api/v1/


## API URLs

Managed by XRAY/Network (XRAY/Graph, Cloudflare WAF & Load Balancer), requires paid subscription

```
https://graph.xray.app/output/services/kupo/mainnet/api/v1
```

```
https://graph.xray.app/output/services/kupo/preprod/api/v1
```

```
https://graph.xray.app/output/services/kupo/preview/api/v1
```
