let request = require('request')

request("https://quotesondesign.com/john-maeda-2/", function(err,response,body){
    let bodyJson = JSON.parse(body);
    let randomquote = bodyJson[0]["content"];
    document.getElementById("quote").innerHTML = randomquote;
})
