module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置按需加载element-ui
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
