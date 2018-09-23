const checkArray = (arg) => {
  return (typeof arg !== 'undefined') && Array.isArray(arg) && arg.length > 0
}

const checkInt = (arg) => {
  return (typeof arg !== 'undefined') && (typeof arg === 'number') && Math.floor(arg)
}

const checkStr = (arg) => {
  return (typeof arg !== 'undefined') && (typeof arg === 'string') && arg.length > 0
}

const checkJSON = (arg, size) => {
  return (typeof arg !== 'undefined') && (typeof arg === 'object') && Object.keys(arg).length == size
}

module.exports = {checkArray, checkInt, checkStr, checkJSON}
