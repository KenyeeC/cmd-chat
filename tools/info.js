const fs = require('fs')
const userinfo = './userinfo.txt'

let infoCache = {}

module.exports = {

    getInfo: () => {
        try{
            let info = infoCache.name ? infoCache : module.exports.readFile()
            info = info || {}
            if(typeof info === 'string') info = JSON.parse(info)
            infoCache = info
            return info
        }catch(e){
            console.log('getInfo error:', e.stack)
            return {}
        }
        
    },

    setInfo: (data) => {
        try{
            let info = infoCache.name ? infoCache : module.exports.readFile()
            info = info || {}
            if(data.name) info.name = data.name
            info = JSON.stringify(info)
            fs.writeFileSync(userinfo, info)
        }catch(e){
            console.log('setInfo error:', e.stack)
            return {}
        }
    },

    readFile: () => {
        try{
            const file = fs.readFileSync(userinfo, 'utf8')
            const result = JSON.parse(file)
            return result
        }catch(e){
            console.log('ReadFile error:', e.stack)
            return
        }
    }
}