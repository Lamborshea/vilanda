var path = require("path");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var CompressionWebpackPlugin = require("compression-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HappyPack = require("happypack");
var os = require("os");
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
console.log("NODE_ENV: " + process.env.NODE_ENV);
var debug = process.env.NODE_ENV !== "production";
var target = process.env.npm_lifecycle_event;
var API_URL = process.env.VUE_APP_API_URL;
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true,
  pages: undefined,
  filenameHashing: true,
  runtimeCompiler: true,
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 4002,
    https: false,
    hotOnly: true
  },
  css: {
    loaderOptions: {
      postcss: {
        exclude: "node_modules",
        "postcss-pxtorem": {
          rootValue: 75,
          unitPrecision: 5,
          propList: ["*", "!font-size", "!line-height"],
          selectorBlackList: [],
          minPixelValue: 12
        }
      }
    }
  },
  configureWebpack: function(config) {
    const externals = {
      vue: "Vue",
      vant: "vant",
      "ant-design-vue": "antd",
      // "vue-router": "VueRouter",
      // vuex: "Vuex",
      // axios: "axios",
      // echarts: "echarts",
      moment: "moment"
      // iview: "iview",
      // "vue2-editor": "vue2-editor",
      // mock: "mockjs",
      // AMap: "AMap"
    };
    var happyPack = new HappyPack({
      id: "babel",
      loaders: ["babel-loader?cacheDirectory=true", "vue-loader"],
      threadPool: happyThreadPool,
      verboseWhenProfiling: true
    });
    var copyWebpackPlugin = new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./src/assets"),
        to: path.resolve(__dirname, `${config.output.path}/static`),
        ignore: [".*"]
      }
    ]);
    var plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        },
        sourceMap: false,
        parallel: true
      }),
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        cache: true,
        algorithm: "gzip",
        test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      })
    ];
    if (process.env.NODE_ENV !== "development") {
      config.plugins = [...config.plugins, ...plugins];
      config.externals = externals;
    } else {
      config.plugins.push(happyPack);
      config.plugins.push(copyWebpackPlugin);
    }
  },
  chainWebpack: function(config) {
    // console.log(config.module);
    config.resolve.alias
      .set("layout", resolve("src/layout"))
      .set("assets", resolve("src/assets"))
      .set("views", resolve("src/views"))
      .set("style", resolve("src/style"));
    config.plugin("html").tap(args => {
      const cdn = {
        // 开发环境
        dev: {
          css: [
            // "//unpkg.com/iview/dist/styles/iview.css"
          ],
          js: [
            // "https://cdn.bootcss.com/echarts/4.2.0-rc.1/echarts.min.js",
            // "https://webapi.amap.com/maps?v=1.4.12&key=116ddd9ab4ec63dc4f3fcdaf9503feec"
          ]
        },
        // 生产环境
        build: {
          css: [
            "//cdn.jsdelivr.net/npm/vant@1.5/lib/index.css",
            "//cdn.jsdelivr.net/npm/ant-design-vue@1.3.2/dist/antd.min.css"
            // "//unpkg.com/iview/dist/styles/iview.css"
          ],
          js: [
            "//cdn.bootcss.com/vue/2.5.17/vue.min.js",
            "//cdn.jsdelivr.net/npm/vant@1.5/lib/vant.min.js",
            "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
            "//cdn.jsdelivr.net/npm/ant-design-vue@1.3.2/dist/antd.min.js"
            // "https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js",
            // "https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js",
            // "https://cdn.bootcss.com/axios/0.18.0/axios.min.js",
            // "//unpkg.com/iview/dist/iview.min.js",
            // "https://cdn.jsdelivr.net/npm/vue2-editor@2.6.6/dist/vue2-editor.min.js",
            // // "http://mockjs.com/dist/mock.js",
            // "https://cdn.bootcss.com/Mock.js/1.0.1-beta3/mock-min.js",
            // "https://cdn.bootcss.com/echarts/4.2.0-rc.1/echarts.min.js",
            // "https://webapi.amap.com/maps?v=1.4.12&key=116ddd9ab4ec63dc4f3fcdaf9503feec"
          ]
        }
      };
      if (process.env.NODE_ENV === "production") {
        args[0].cdn = cdn.build;
      }
      if (process.env.NODE_ENV === "development") {
        args[0].cdn = cdn.dev;
      }
      return args;
    });
  }
};
