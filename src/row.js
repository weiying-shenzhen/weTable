export default class Row {
  constructor() {
    this.cells = []
    return this
  }
  addCell(cells) {
    if (Array.isArray(cells)) {
      this.cells = this.cells.concat(cells)
    } else {
      this.cells.push(cells)
    }
    return this
  }
  unshiftCell(cells) {
    if (Array.isArray(cells)) {
      this.cells = cells.concat(this.cells)
    } else {
      this.cells.unshift(cells)
    }
    return this
  }
  appendRow(row) {
    if (!(row instanceof Row)) {
      console.error("row must instanceof Row")
    }
    this.addCell(row.cells)
    return this
  }
  render() {
    const cells = this.cells.map(cell => cell.render())

    return `<tr>${cells.join('')}</tr>`
  }
}