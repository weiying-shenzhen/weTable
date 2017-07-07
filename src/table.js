import { renderClass } from './utils'
/**
 * Table: HTML Table (table)
 */
class Table {
  /**
   * create a Table instance
   *
   * @param {Array|Object} rows   - row instance
   */
  constructor(rows = []) {
    this.rows = []
    this.addRow(rows)
  }
  /**
   * append row(s) in the back of rows stack (push)
   *
   * @param {Array|Object} rows   - row instance
   */
  addRow(rows) {
    if (Array.isArray(rows)) {
      this.rows = this.rows.concat(rows)
    } else {
      this.rows.push(rows)
    }
    return this
  }
  /**
   *  insert row(s) in the front of rows stack (unshift)
   *
   * @param {Array|Object} rows   - row instance
   */
  unshiftRow(rows) {
    if (Array.isArray(rows)) {
      this.rows = rows.concat(this.rows)
    } else {
      this.rows.unshift(rows)
    }
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
   * render `table` element str
   *
   * @return {String}
   */
  render() {
    const rows = this.rows.map(row => row.render())

    return `<table ${renderClass(this.className)}>${rows.join('')}</table>`
  }
}

export default Table