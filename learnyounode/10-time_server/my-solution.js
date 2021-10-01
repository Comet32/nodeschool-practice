const net = require('net')

const [, , port] = process.argv

const server = net.createServer(function (socket) {
  socket.end(getFormateDate() + '\n')
})

server.listen(port)

function getFormateDate() {
  const date = new Date()
  const dateComponent = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
  }

  const { year, month, day, hours, minutes } = dateComponent

  return `${year}-${padZero(month + 1)}-${padZero(day)} ${padZero(hours)}:${padZero(minutes)}`
}

function padZero(num) {
  return num.toString().padStart(2, '0')
}
