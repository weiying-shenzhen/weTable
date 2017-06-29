export default class Cell {
  constructor(content = '', row = 1, col = 1) {
    this.content = content
    this.row = row
    this.col = col
    return this
  }
  setSpan(row = 1, col = 1) {
    this.row = row
    this.col = col
    return this
  }
  renderAttribute() {
    const {
      row,
      col
    } = this
    if (row === 1 && col === 1) return ""

    let classNames = []
    let rowspan = ''
    let colspan = ''

    if (row > 1) {
      classNames.push(`row-${row}`)
      rowspan = `rowspan="${row}" `
    }
    if (col > 1) {
      classNames.push(`col-${col}`)
      colspan = `colspan="${col}" `
    }
    const className = classNames.join(' ')

    return `${rowspan}${colspan}${className ? `class="${className}"` : ''}`
  }
  render() {
    return `<td ${this.renderAttribute()}>${this.content}</td>`
  }
}