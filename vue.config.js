module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/resume-template-vue/" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.yaml$/, // 匹配 .yaml 后缀的文件
          use: 'yaml-loader', // 使用 yaml-loader 处理
        },
      ],
    },
  },
};


