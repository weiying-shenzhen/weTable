import { renderClass } from './utils'
/**
 * Row: Table Row (tr)
 */
class Row {
  /**
   * create a Row instance
   *
   * @param {Array|Object} cells   - cell instance
   */
  constructor(cells = []) {
    this.cells = []
    this.addCell(cells)
  }
  /**
   * append cell(s) in the back of cells stack (push)
   *
   * @param {Array|Object} cells   - cell instance
   */
  addCell(cells) {
    if (Array.isArray(cells)) {
      this.cells = this.cells.concat(cells)
    } else {
      this.cells.push(cells)
    }
    return this
  }
  /**
   *  insert cell(s) in the front of cells stack (unshift)
   *
   * @param {Array|Object} cells   - cell instance
   */
  unshiftCell(cells) {
    if (Array.isArray(cells)) {
      this.cells = cells.concat(this.cells)
    } else {
      this.cells.unshift(cells)
    }
    return this
  }
  /**
   * graft row cells in the back of cells stack
   *
   * @param  {Row} row  - row instance
   */
  appendRow(row) {
    if (!(row instanceof Row)) {
      console.error("row must instanceof Row")
    }
    this.addCell(row.cells)
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
  /**
   *
   * render `tr` element str
   *
   * @return {String}
   */
  render() {
    const cells = this.cells.map(cell => cell.render())

    return `<tr ${renderClass(this.className)}>${cells.join('')}</tr>`
  }
}

export default Row