import {defineConfig} from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    extensionApi: 'chrome',
    modules: ['@wxt-dev/module-react'],
    manifest: {
        "permissions": [
            "geolocation"
        ],
        icons: {
            16: "icon.png",
            48: "icon.png",
            128: "icon.png",
        },
    }
});
