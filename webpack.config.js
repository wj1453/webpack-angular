module.exports = {
   entry: './index.js',//入口文件
   output: {//输出文件
       path: __dirname + '/build',
	   filename: './bundle.js'
	},
	
	devServer: {
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
	},
   module: {
     loaders: [//加载器
      {test: /\.css$/, loader: 'style-loader!css-loader'},      
      {test: /\.(png|jpg|ttf|woff|svg|eot|woff2)$/, loader: 'url-loader?limit=8192'}
     ]
  }
   
   
   
 };