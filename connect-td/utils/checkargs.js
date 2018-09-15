const checkInt = (arg) => {
  return arg && (typeof arg === 'number') && Math.floor(arg)
}

const checkStr = (arg) => {
  return arg && (typeof arg === 'string') && arg.length > 0
}

const checkJSON = (arg, size) => {
  return arg && (typeof arg === 'object') && Object.keys(arg).length == size
}

module.exports = {checkInt, checkStr, checkJSON}
