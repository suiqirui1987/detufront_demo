
fis.config.set('roadmap.path', [
			{
                reg : /^\/page\/(.*)$/i,
                useCache : false,
                release : '$1'
            },
			{
                //modules目录下的其他文件
                reg : /^\/modules\/(app)\/app\.js$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
				requires : [
					"modules/bootstrap/dist/css/bootstrap.css"
				],
                //id是去掉modules和.js后缀中间的部分
                id : '$1',
                release : '${statics}/$&'
            },
            {
                //一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
                //直接引用为var $ = require('jquery');
                reg : /^\/modules\/([^\/]+)\/\1\.(js)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //id为文件夹名
                id : '$1',
                release : '${statics}/$&'
            },
            {
                //modules目录下的其他文件
                reg : /^\/modules\/(.*)\.(js)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //id是去掉modules和.js后缀中间的部分
                id : '$1',
                release : '${statics}/$&'
            },
            {
                //less的mixin文件无需发布
                reg : /^(.*)mixin\.less$/i,
                release : false
            },
            {
                //其他css文件
                reg : /^(.*)\.(css|less)$/i,
                //css文件会做csssprite处理
                useSprite : true,
                release : '${statics}/$&'
            },
            {
                //前端模板
                reg : '**.tmpl',
                //当做类js文件处理，可以识别__inline, __uri等资源定位标识
                isJsLike : true,
                //只是内嵌，不用发布
                release : false
            },
            {
                reg : /.*\.(html|jsp|tpl|vm|htm|asp|aspx)/,
                useCache : false,
                release : '$&'
            },
            {
                reg : "README.md",
                release : false
            },
            {
                reg : "**",
                release : '${statics}/$&'
            }
        
   
]);


