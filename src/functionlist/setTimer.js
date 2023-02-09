module.exports.end = `
function timer(event) {
  TIMERS[event.id](event)
}

var TIMERS = []
function setTimer(timers, id, ticks, repeat, func) {
  timers.start(id, ticks, repeat)
  TIMERS[id] = func
}
`
