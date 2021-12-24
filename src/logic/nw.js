export default function calculate(data) {
  let table = []

  let firstString = '-' + data.firstString
  let secondString = '-' + data.secondString

  table = initialize(table, firstString, secondString, data.gapWeight)

  table = fill(table, firstString, secondString, data)

  table = traceback(table, firstString, secondString)

  return table
}

function initialize(table, firstString, secondString, gapWeight) {
  // initialization
  table[0] = [
    {
      value: 0,
      isPath: true,
    },
  ]

  // first row
  for (let i = 1; i < secondString.length; i++) {
    let value = gapWeight + table[0][i - 1].value
    table[0].push({
      value: value,
      left: true,
    })
  }

  // first column
  for (let i = 1; i < firstString.length; i++) {
    table[i] = []
    let value = gapWeight + table[i - 1][0].value
    table[i].push({
      value: value,
      top: true,
    })
  }

  return table
}

function fill(table, firstString, secondString, data) {
  // filling with values
  for (let i = 1; i < firstString.length; i++) {
    for (let j = 1; j < secondString.length; j++) {
      let left = data.gapWeight + table[i][j - 1].value
      let top = data.gapWeight + table[i - 1][j].value
      let diag = 0
      if (firstString[i] === secondString[j]) {
        diag = data.matchWeight + table[i - 1][j - 1].value
      } else {
        diag = data.mismatchWeight + table[i - 1][j - 1].value
      }

      let max = left
      if (top > max) {
        max = top
      }
      if (diag > max) {
        max = diag
      }

      table[i].push({
        value: max,
        left: max === left,
        top: max === top,
        diag: max === diag,
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