import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import adapter from "@sveltejs/adapter-static";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            // Everything that was inside `kit: {}` in his svelte.config.js
            // goes here, as options to sveltekit()

            compilerOptions: {
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes("node_modules") ? undefined : true
            },

            adapter: adapter({
                pages: "build",
                assets: "build",
                fallback: "index.html",
                precompress: false,
                strict: false,
            }),

            paths: {
                base: "",
                relative: false,
            },

            csp: {
                mode: "hash",
                directives: {
                    "default-src": ["self"],
                    "script-src": ["self"],
                    "style-src": ["self", "unsafe-inline"],
                    "img-src": ["self", "data:", "blob:", "https:", "http:"],
                    "font-src": ["self"],
                    "connect-src": ["self"],
                    "base-uri": ["self"],
                    "frame-src": ["https://www.youtube-nocookie.com", "https://www.facebook.com"],
                    "object-src": ["none"],
                },
            },

            // `typescript: { config: ... }` is not a valid option on the
            // sveltekit() plugin in SvelteKit 3 — omit it. TypeScript is
            // configured via tsconfig.json instead.
        })
    ]
});