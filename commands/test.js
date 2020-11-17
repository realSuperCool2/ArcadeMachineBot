module.exports = {
  name: 'test',
  description: 'Test',
  execute(message,args) {
    if(!message.author.id === '696024510025170965') return
    if(args[0] === '') return
    message.reply(args[0])}}