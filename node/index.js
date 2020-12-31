// 批量修改文件名

const fs = require('fs')
const path = require('path')


function walk (path, ck) {
  const files = fs.readdirSync(path)

  files.forEach(function (file, index) {
    if (fs.statSync(`${path}/${file}`).isFile()) {
      ck(path, file, index)
    }
  })
}


function rename (oldpath, newPath) {
  fs.rename(oldpath, newPath, function (err) {
    if (err) {
      throw err
    }
  })
}

// 运行
walk(path.resolve(__dirname, './Logo-1'), function (path, fileName, index) {
  console.log("🚀 ~ file: index.js ~ line 26 ~ fileName", fileName)
  var oldPath = path + '/' + fileName // 源文件路径
  console.log("🚀 ~ file: index.js ~ line 27 ~ oldPath", oldPath)
  newPath = path + '/' + fileName.replace(/^.*\./, `footer-img-${index}.`) // 新路径
  console.log("🚀 ~ file: index.js ~ line 28 ~ newPath", newPath)
  rename(oldPath, newPath)
})