const fs = require('fs')
const fontCarrier = require('./font-carrier')

const font = fontCarrier.create()

//创建空白字体，使用svg生成字体
const transFont = fontCarrier.transfer(__dirname + '/source.ttf')
const list = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "的一二三四五六七八九拾百千是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美总从无情己面最女但现前些所同日手又行意动期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被已亲其进此话常与活正感王李张刘陈杨黄赵吴周徐孙马朱胡郭何高林郑谢罗梁宋唐许韩冯邓曹彭曾萧田董袁潘蒋蔡余杜叶程苏魏吕丁任沈姚卢姜崔钟谭陆汪范金石廖贾夏韦付方白邹孟熊秦邱江尹薛闫段雷侯龙史陶黎贺顾毛郝龚邵万钱严覃武戴莫孔向汤"
]
const l = list.reduce((arr, item) => {
  return arr.concat(shuffle(item))
}, [])
const map = {}
const path = __dirname + '/newFont/font'

//测试对象set
list.join('').split('').map((item, index) => {
  console.log(`${item} ==> ${l[index]}`)
  const gs = transFont.getGlyph(item)
  font.setGlyph(l[index], gs)
  map[item] = l[index]
})

font.output({ path })
fs.writeFileSync(`${path}.json`, JSON.stringify(map, null, 4))

function shuffle (str) {
  const len = str.length
  const clone = Array.from(str).slice()

  for (let i = 1; i < len; i++) {
    clone.splice(Math.round(Math.random() * i), 0, clone.splice(i, 1)[0])
  }
  return clone
}

// str.filter((item, index) => {
//   return str.indexOf(item) != index
// })
