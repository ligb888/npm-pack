const path = require('path')
const fs = require('fs')

const root = path.resolve("./")
let ignore_data = fs.readFileSync("./ignore.txt",'utf8')
let list = []

//处理一下，避免末尾没有换行
ignore_data += "\n"

function travel(dir,callback){
  fs.readdirSync(dir).forEach((file)=>{
    let pathname=path.join(dir,file)
    let isDirectory = fs.statSync(pathname).isDirectory()
    if(!isDirectory){
      return
    }
    if(file.indexOf("@") == 0){
      travel(pathname,callback)
    }else{
      try{
        let data = fs.readFileSync(pathname+'\\package.json','utf8')
        data = JSON.parse(data)
        callback(data["name"]+"@"+data["version"])
      }catch (e) {
      }
      if(fs.existsSync(pathname+'\\node_modules')){
        travel(pathname+'\\node_modules',callback)
      }
    }
  })
}

travel(root+"/node_modules", function (file) {
  if(ignore_data.indexOf(file+"\n") == -1 && ignore_data.indexOf(file+"\r\n") == -1){
    list.push(file)
  }
})

list = Array.from(new Set(list))
let file = fs.createWriteStream('./list.txt')
list.forEach(function(v) {
  file.write(v + '\n')
})
file.end()




