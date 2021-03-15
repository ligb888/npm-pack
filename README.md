## npm打包

将项目中引用的npm包分开打包，上传到仓库。 主要用于搭建npm仓库，特别是内网环境

## 生成包的列表

将需要打包的npm包放入package.json中，里面已存在两个包用于测试：
```
"dependencies": {
    "ws": "^7.4.2",
    "request": "^2.88.0"
}
```

运行`npm i`安装项目

安装完成后，运行下面的脚本，将在list.txt中生成包的明细列表
```
npm run pack
```

## 打包成tgz

windows中运行build.bat，linux中运行build.sh。包比较多的话，可能比较久才能完成。

完成后将会在当前目录中生成tgz文件夹，里面包含了list中所有的包。这个命令不会清除之前已经打包的文件，如果不要之前打的要手动清除一下

## 上传包到仓库

windows中运行upload.bat，修改脚本中的仓库地址，上传包到仓库中。这里是nexus3仓库，linux脚本和其它仓库脚本还没写

## 其它

使用ignore.txt文件来忽略不需要的包（比如已经传过的），格式和list.txt中的保持一致即可，设置后重新执行`npm run pack`

有些包会在安装的时候在线下载，可以将这种包使用npm-pack-all来进行打包，将所有依赖打进去。