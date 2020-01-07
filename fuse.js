const { FuseBox, WebIndexPlugin, CSSPlugin, SVGPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es5",
  output: "dist/$name.js",
  useTypescriptCompiler: true,
  plugins: [
    CSSPlugin(),
    SVGPlugin(),
    WebIndexPlugin({
      template: "src/index.html"
    })
  ]
});

fuse.dev({
  fallback: "index.html"
});

fuse
  .bundle("app")
  .instructions(`> index.tsx`)
  .hmr()
  .watch();

fuse.run();
