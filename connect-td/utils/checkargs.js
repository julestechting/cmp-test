const checkInt = (arg) => {
  return (typeof arg === 'number') && Math.floor(arg)
}

const checkStr = (arg) => {
  return (typeof arg === 'string') && arg.length > 0
}

const checkJSON = (arg, size) => {
  return (typeof arg === 'object') && Object.keys(arg).length == size
}

module.exports = {checkInt, checkStr, checkJSON}
