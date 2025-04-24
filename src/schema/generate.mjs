import fs from "fs"
import openapiTS, { astToString } from "openapi-typescript"

const run = async () => {
  const schema = (await openapiTS(
    new URL(
      "https://cardanosolutions.github.io/kupo/api/nightly.yaml"
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
