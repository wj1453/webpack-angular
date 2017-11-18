
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path =require('path')
module.exports = {
   entry: __dirname +'/app.js',//入口文件
   output: {//输出文件
       path: __dirname + '/build',
	   filename: './bundle.js'
	},
	
	devServer: {
       contentBase: path.join(__dirname, "./"),
       port:3000
  },
	
	/*devServer: {
	 historyApiFallback: true,
	 hot: true,
	 inline: true,
	 progress: true,
	 port: 8080,
	 host: '120.26.101.166',
	 proxy: {
		 '/exchange/*': {
		 target: 'http://127.0.0.1:8020/',
		 changeOrigin: true,
		 secure: false
		 }
	 }
	},*/
   module: {
     loaders: [//加载器
      {test: /\.css$/, loader: 'style-loader!css-loader'},      
      {test: /\.(png|jpg|ttf|woff|svg|eot|woff2)$/, loader: 'url-loader?limit=8192'}
     ]
  },
  plugins:[
     
         new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
            /* favicon:'./src/img/favicon.ico',*/
             filename:'index.html',    //生成的html存放路径，相对于 path
            template:'./index.html',    //html模板路径
             inject:true,    //允许插件修改哪些内容，包括head与body
             hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                 removeComments:true,    //移除HTML中的注释
                 collapseWhitespace:false    //删除空白符与换行符
             }
        })
     ]
   
   
   
 };