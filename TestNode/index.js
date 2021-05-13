const fs = require('fs')
content = '11111'
// fs.appendFile
fs.appendFile('D:/文件/git项目/UnblockNeteaseMusic/history_songs.csv' , content, error => {
    if(error){
        console.log('error')
    }
})
