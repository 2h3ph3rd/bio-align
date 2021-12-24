import utils from './utils'

export default function calculate(data) {
  let table = []

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  table = utils.initialize(table, firstString, secondString, 1)
  table[0][0].isPath = true

  table = fill(table, firstString, secondString, data)

  table = traceback(table, firstString, secondString)

  return table
}

function fill(table, firstString, secondString, data) {
  // filling with values
  for (let i = 1; i < firstString.length; i++) {
    for (let j = 1; j < secondString.length; j++) {
      let left = table[i][j - 1].value + 1
      let top = table[i - 1][j].value + 1
      let diag = 0
      if (firstString[i] === secondString[j]) {
        diag = table[i - 1][j - 1].value
      } else {
        diag = table[i - 1][j - 1].value + 1
      }

      let min = left
      if (top < min) {
        min = top
      }
      if (diag < min) {
        min = diag
      }

      table[i].push({
        value: min,
        left: left === min,
        top: top === min,
        diag: diag === min,
      })
    }
  }

  return table
}

function traceback(table, firstString, secondString) {
  // traceback
  let i = firstString.length - 1
  let j = secondString.length - 1
  while (i !== 0 || j !== 0) {
    table[i][j].isPath = true
    if (table[i][j].diag) {
      i--
      j--
    } else if (table[i][j].left) {
      j--
    } else {
      i--
    }
  }

  return table
}
