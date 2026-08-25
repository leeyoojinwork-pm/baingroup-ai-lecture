import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

mkdirSync("dist/server", { recursive: true });

for (const path of ["1", "2", "3", "404.html"]) {
  if (existsSync(path)) {
    cpSync(path, `dist/${path}`, { recursive: true });
  }
}

const pages = {
  "/": readFileSync("dist/index.html", "utf8"),
  "/index.html": readFileSync("dist/index.html", "utf8"),
  "/1": readFileSync("dist/1/index.html", "utf8"),
  "/1/": readFileSync("dist/1/index.html", "utf8"),
  "/1/index.html": readFileSync("dist/1/index.html", "utf8"),
  "/2": readFileSync("dist/2/index.html", "utf8"),
  "/2/": readFileSync("dist/2/index.html", "utf8"),
  "/2/index.html": readFileSync("dist/2/index.html", "utf8"),
  "/3": readFileSync("dist/3/index.html", "utf8"),
  "/3/": readFileSync("dist/3/index.html", "utf8"),
  "/3/index.html": readFileSync("dist/3/index.html", "utf8"),
};

const images = {};
if (existsSync("dist/3/images/instructor_yujin.jpg")) {
  images["/3/images/instructor_yujin.jpg"] = readFileSync("dist/3/images/instructor_yujin.jpg").toString("base64");
}

writeFileSync(
  "dist/server/index.js",
  `const pages = ${JSON.stringify(pages)};
const images = ${JSON.stringify(images)};

function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (Object.prototype.hasOwnProperty.call(pages, pathname)) {
      return new Response(pages[pathname], {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

    if (Object.prototype.hasOwnProperty.call(images, pathname)) {
      return new Response(base64ToBytes(images[pathname]), {
        headers: { "content-type": "image/jpeg", "cache-control": "public, max-age=31536000" },
      });
    }

    if (env.ASSETS) {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) return assetResponse;
    }

    return new Response("", { status: 404 });
  }
};
`,
);
