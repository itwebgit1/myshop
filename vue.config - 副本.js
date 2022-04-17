module.exports = {
	// configureWebpack表示要配置的对象
	configureWebpack: {
		resolve: {
			// 配置extensions，以后文件的后缀名可以省略不写，但是这些在创建项目时默认已经配置了
			// extensions: [],
			alias: {
				// '@': 'src'这个别名项目创建时已经默认配置好了，所以我们可以不配置
				// '@': 'src'
				// 在脚手架2项目中准备给assets目录配置别名不可以使用：'assets': '@/assets',可以使用：'assets': 'src/assets'
				// 脚手架3可以使用：'assets': '@/assets'
				// router、store只在main.js中引入了，其他文件中没有所以不配置router、store。
				// 在所有的组件中都可通过this.$router、this.$store拿到store和router对象，所以不需要配置这两个目录别名
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		}
	}
}
