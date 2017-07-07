import { renderAttribute, renderClass } from './utils'
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
  /**
   * set class name
   *
   * @param {String} className - class name
   */
  setClass(className = '') {
    this.className = className
    return this
  }
  _renderClass() {
    const {
      row,
      col,
      className
    } = this

    let classNames = []

    if (row > 1) {
      classNames.push(`row-${row}`)
    }
    if (col > 1) {
      classNames.push(`col-${col}`)
    }
    className && classNames.push(className)

    const renderClass = classNames.join(' ')

    return renderClass ? renderClass : ''
  }
  _renderAttribute() {
    const {
      row,
      col,
    } = this

    return renderAttribute({
      rowspan: row > 1 ? row : '',
      colspan: col > 1 ? col : '',
      class: this._renderClass()
    })
  }
  /**
   * render `td` element str
   *
   * @return {String}
   */
  render() {
    return `<td ${this._renderAttribute()}>${this.content}</td>`
  }
}

export default Cell