export default class Table {
  constructor() {
    this.rows = []
  }
  addRow(rows) {
    if (Array.isArray(rows)) {
      this.rows = this.rows.concat(rows)
    } else {
      this.rows.push(rows)
    }
    return this
  }
  unshiftRow(rows) {
    if (Array.isArray(rows)) {
      this.rows = rows.concat(this.rows)
    } else {
      this.rows.unshift(rows)
    }
    return this
  }
  render() {
    const rows = this.rows.map(row => row.render())

    return `<table>${rows.join('')}</table>`
  }
}