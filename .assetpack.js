import {json} from "@assetpack/core/json";

import {pixiManifest} from "@assetpack/core/manifest";

export default {
    entry: './raw-assets',
    output: './public/assets',
    pipes: [
        json(),
        pixiManifest({
            output: './src/manifest.json',
            nameStyle: "relative"
        }),
    ],
};