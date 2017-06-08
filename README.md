# Angular1.x_webapp
## 技术栈

![](http://i1.piimg.com/567571/d959e86b0e7758eb.png)

1. Angular 1.6
2. Less 预编译css
3. Gulp 前端自动化构建工具
4. bower 包管理工具
5. [flexible](https://github.com/amfe/lib-flexible)手淘移动端自适应布局方案
6. ui-router进行路由配置
7. angular-cookie、angular-validation等第三方插件的使用
8. 数据完全依靠json数据，还要装饰器(`decorator`)对post请求进行拦截并修改为get请求

## 使用

### 安装依赖

确保电脑已安装Node，建议使用国内镜像CNpm
``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
然后执行
```
npm install
```
安装bower，下载项目中用到的插件
```
bower install
```
### 启动服务器
```
gulp
```
在控制台输入`gulp`命令会自动对`src`目录下的文件进行编译，合并和压缩，并开启服务器打开浏览器。
