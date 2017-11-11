#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const info = require('../tools/info')
const request = require('../tools/request')
require('../tools/color')

const argvs = process.argv
let infoCache = ''

let mail = {
    name: 'unknow user',
    target: 'me@kenyee.cc',
    content: '',
}

rl.on('line', (input) => {
    mail.content += `<p>${input}</p>`
    const lowcaseInput = String.prototype.toLowerCase.call(input)
    if(lowcaseInput.includes('!send') || lowcaseInput.includes('！send')){
        let vaildContent = mail.content.replace(/<.*?p>/g, '')
        if(vaildContent === '!send' || vaildContent === '！send') return console.log('说点什么吧~')
        mail.content = mail.content.replace('!send', '')
        mail.content = mail.content.replace('！send', '')
        request(mail)
        console.log('信息已发送, 对方1分钟内会收到信息'.green())
        rl.close()
    }
})

const argvFunc = {
    chat: () => {
        let userInfo = info.getInfo()
        if(!userInfo.name) return argvFunc.name()
        mail.name = userInfo.name
        console.log('你好，'+ userInfo.name.green())
        console.log('现在输入你想说的事情吧  ( '+'Enter'.yellow()+' : 换行、  '+'!send'.yellow()+' : 发送、  '+'Ctrl + C'.yellow()+' : 退出 )')
    },
    name: () => {
        rl.question('应该怎么称呼你?  ', (name) => {
            info.setInfo({name: name})
            argvFunc.chat()
        })
    },
    to: async () => {
        let runTime = 3
        let vaild = void(0)
        while(!vaild && runTime > 0){
            runTime -- 
            if(vaild === false) console.log('* 输入的邮箱地址格式不对，请重新输入'.red())
            vaild = await new Promise( resolve => {
                rl.question('请输入对方的电子邮箱地址： ', (email) => {
                    resolve(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))
                })
            })
        }
        if(!vaild) console.log('* 搞事情吧你...算了发给我吧'.red())
        argvFunc.chat()
    },
    help : () => {
        console.log('使用方法：'.blue())
        console.log('  chat'.yellow(), '<命令>'.green())
        console.log('')
        console.log('功能命令：'.blue())
        console.log('  chat'.yellow(), '                开始输入发送内容')
        console.log('  chat'.yellow(), '--name'.green(), '或', '-n'.green(), '   定义你的名称')
        console.log('  chat'.yellow(), '--to'.green(), '或', '-t'.green(), '     指定收件人，cmd-chat会通过电子邮件发送内容到你所指定的收件人，目前只接受输入电子邮件地址')
        console.log('  chat'.yellow(), '--help'.green(), '或', '-h'.green(), '   查看帮助')
        console.log('')
        console.log('快捷命令：'.blue())
        console.log('  chat'.yellow(), ' missyou'.green(), '      快速告诉我你想我了，我会尽快回复')
        console.log('')
    },
    missyou : () => {
        let userInfo = info.getInfo()
        mail.name = userInfo.name || 'unkonw user'
        rl.question('告诉我怎么联系你? ', (contact) => {
            console.log('收到!'.green())
            mail.content = 'i miss you, contact me: '
            mail.content += contact
            request(mail)
            rl.close()
        })
    }
 
}

const argvMap = {
    '--name': argvFunc.name,
    '-n': argvFunc.name,
    '--to': argvFunc.to,
    '-t': argvFunc.to,
    '--help': argvFunc.help,
    '-h': argvFunc.help,
    'missyou': argvFunc.missyou
}

for(let argv of argvs){
    for(let i in argvMap){
        if( argv === i) return argvMap[i]()
    }
}

argvFunc.chat()