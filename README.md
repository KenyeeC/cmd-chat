# cmd-chat

## 介绍
 
 　cmd-chat是可以在命令窗下发送邮件的工具，TA默认发送邮件到作者本人，也可以指定发送邮件到你指定的邮箱中（使用 chat --to命令）
 
 　cmd-chat需要运行在安装有nodeJs V8.9.0版本以上环境的系统当中
 
 　这个工具当然不及微信、QQ等方便，但是你不觉得在命令窗中发邮件很酷吗？？？

## 安装


- #### 下载并安装v8.9.0或以上版本的nodejs
    
　以下三种下载方式任选一种：
    
　　1.直接下载（推荐，下载快）:
  

　　　[适合window 64位系统](https://npm.taobao.org/mirrors/node/v8.9.0/node-v8.9.0-x64.msi )
   
  
　　　[适合window 32位系统](https://npm.taobao.org/mirrors/node/v8.9.0/node-v8.9.0-x86.msi )
  
　　2.国内镜像（下载快）： http://nodejs.cn/download/

　　3.官网下载： https://nodejs.org/en/download/
    

- #### 打开命令窗（敲黑板！方便更快捷的使用cmd-chat）
　　打开命令窗有以下方法，任选其一：

　　1. 在桌面或文件夹内按住键盘shift键，同时单击鼠标右键，在出现的菜单栏选择“在此处打开命令窗口”，即可打开命令窗
    
　　　![image](http://kenyee.cc/images/tutorial_1.png)
    
  　2. 同时按住键盘 win + R键，在弹出窗口输入cmd，按回车键即可打开 
    
　　　![image](http://kenyee.cc/images/tutorial_2.png)
　　　![image](http://kenyee.cc/images/tutorial_3.png)

- #### 安装cmd-chat
　　在命令窗中输入 
　　>npm i cmd-chat -g

　　按回车即可完成安装！
    
　　![image](http://kenyee.cc/images/tutorial_3.gif)
    
    
    
## 使用
- #### 在命令窗中输入chat，即可发送信息
　　![image](http://kenyee.cc/images/tutorial_4.gif)
    
　　- 输入 chat --name 或 chat -n，可修改你的名称
  
　　- 输入 chat --to 或 chat -t，即可发送给你指定的人（通过电子邮件）


## 帮助
- #### 在命令窗中输入chat --help 或 chat -h 即可查看帮助
　　![image](http://kenyee.cc/images/tutorial_5.gif)
