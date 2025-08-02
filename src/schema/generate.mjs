import fs from "fs"
import openapiTS, { astToString } from "openapi-typescript"

const run = async () => {
  const schema = (await openapiTS(
    new URL(
      "https://graph.xray.app/output/services/kupo/mainnet/api/v1/openapi.json",
    ),
    {
      exportType: true,
    }
  ))
  fs.writeFileSync("./src/schema/schema.ts", astToString(schema)
    .replaceAll('{datum-hash}', "{datum_hash}")
    .replaceAll('{script-hash}', "{script_hash}")
    .replaceAll('{slot-no}', "{slot_no}")
  )
}

run()
