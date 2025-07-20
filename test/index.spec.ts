import { expect, test, vi } from "vitest"
import KupoClient from "../src"

const baseUrl = "https://graph.xray.app/output/services/kupo/mainnet/api/v1"
const headers = {
  // "Authorization": "Bearer YOUR_API_KEY", // XRAY/Graph API Key (paid subscription)
  "Accept": "application/json",
}
const client = KupoClient(baseUrl, headers)

test("/health", async () => {
  const health = await client.GET("/health")
  expect(health.data).haveOwnProperty("most_recent_checkpoint")
})

test("/scripts", async () => {
  const scripts = await client.GET("/scripts/{script_hash}", {
    params: { path: { script_hash: "bd2119ee2bfb8c8d7c427e8af3c35d537534281e09e23013bca5b138" } }
  })
  expect(scripts.data).haveOwnProperty("script")
})