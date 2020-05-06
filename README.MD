
build webapp with vue and vant
---
howto
---
1. cd project-name 
2. pip install -r requirements.txt
3. npm start 或者 npm run build
4. 后台服务参考：https://github.com/wanwenqq/flask_ori   目前做了登录接口可以测试

-------
解决的问题:
1. 解决image本地图片显示问题,在url-loader中增加  options {esModule: false}
2. badge在tabbar中隐藏问题:this.tabbars[index].badge = ''

---

创建步骤：
1. mkdir vue-vant
    cd vue-vant
    npm init -y

2. npm install webpack webpack-cli --save-dev

3. 创建webpack.config.js 新增entry,output,新增build脚本 根据entry创建'./src/index.js'

4. npm install --save-dev html-webpack-plugin clean-webpack-plugin webpack.config.js新增 html-webpack-plugin 和 clean-webpack-plugin 的plugin说明 并注意clean-webpack-plugin声明需要{}

5. npm install --save-dev webpack-dev-server 并在webpack.config.js中新增devServer,在webpack.json中新增 start 脚本,在根目录下创建index.html

6. vue处理

    npm i vue vue-router vuex //生产环境 

    npm i vue-template-compiler vue-loader vue-style-loader -D //开发依赖

    在webpack.confi.gj中新增VueLoaderPlugin plugin和module

7. css处理:

    npm i style-loader css-loader less less-loader postcss-loader autoprefixer -D

    npm i mini-css-extract-plugin optimize-css-assets-webpack-plugin  -D

    npm install --save-dev file-loader

    npm install --save-dev sass-loader node-sass

8. 处理js

    npm i @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime -D

    npm i babel-core babel-loader babel-preset-env babel-preset-stage-3 --save-dev

9. npm i @babel/polyfill --save-dev

10. TODO css,js文件分离

11. npm install vant -S 

    npm i babel-plugin-import -D

12. axios封装: npm install axios  -S

13. 开始vue工作