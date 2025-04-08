import {defineConfig} from 'vite'

import {viteAssetPackPlugin} from "vite-plugin-assetpack";


export default defineConfig({
    plugins: [
        viteAssetPackPlugin({}),
    ]
})