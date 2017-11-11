const http=require('http');  
const querystring=require('querystring');  
//发送 http Post 请求  
module.exports = (mail) => {
    const postData=querystring.stringify(mail)
    var options={  
       hostname:'kenyee.cc',  
       port:80,  
       path:'/cmdchat/email',  
       method:'POST',  
       headers:{  
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',  
        'Content-Length':Buffer.byteLength(postData)  
       }  
    }  
    var req=http.request(options, function(res) {  
        res.setEncoding('utf-8')
    })
    req.write(postData)
    req.end()
}
