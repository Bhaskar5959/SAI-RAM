const fs = require('fs')
const path = require('path')

btncreate = document.getElementById('btncreate')
btnread = document.getElementById('btnread')
btndelete = document.getElementById('btndelete')
filename = document.getElementById('filename')
filecontents = document.getElementById('filecontents')

let pathname = path.join(__dirname, 'Files')

btncreate.addEventListener('click', function () {
    let file = path.join(pathname, filename.value)
    let contents = filecontents.value
    fs.writeFile(file, contents, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("the file was created")
    })
})
btnread.addEventListener('click', function () {
    let file = path.join(pathname, filename.value)
    fs.readFile(file, function (err, data) {
        if (err) {
            return console.log(err)
        }
        filecontents.value = data
        console.log("the file was read!");
    })
})
btndelete.addEventListener('click', function () {
    let file = path.join(pathname, filename.value)
    fs.unlink(file, function (err) {
        if (err) {
            return console.log(err)
        }
        filename.value = ""
        filecontents.value = ""
        console.log("the file was deleted!");
    })
})