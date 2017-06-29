/**
 * Cell: Table Cell (td)
 */
class Cell {
  /**
   * create a Cell instance
   *
   * @param  {String} content  - content to display
   * @param  {Number} row      - rowspan value
   * @param  {Number} col      - colspan value
   */
  constructor(content = '', row = 1, col = 1) {
    this.content = content
    this.row = row
    this.col = col
    return this
  }
  /**
   * set rowspan and colspan
   *
   * @param {Number} row  - rowspan value
   * @param {Number} col  - colspan value
   */
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
  /**
   * render `td` element str
   *
   * @return {String}
   */
  render() {
    return `<td ${this.renderAttribute()}>${this.content}</td>`
  }
}

export default Cell