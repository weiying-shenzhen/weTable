/**
 * Table: HTML Table (table)
 */
class Table {
  /**
   * create a Table instance
   */
  constructor() {
    this.rows = []
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
   *
   * render `table` element str
   *
   * @return {String}
   */
  render() {
    const rows = this.rows.map(row => row.render())

    return `<table>${rows.join('')}</table>`
  }
}

export default Table