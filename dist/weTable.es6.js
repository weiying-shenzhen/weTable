'use strict';

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
    this.cells = [];
    this.addCell(cells);
  }
  /**
   * append cell(s) in the back of cells stack (push)
   *
   * @param {Array|Object} cells   - cell instance
   */
  addCell(cells) {
    if (Array.isArray(cells)) {
      this.cells = this.cells.concat(cells);
    } else {
      this.cells.push(cells);
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
      this.cells = cells.concat(this.cells);
    } else {
      this.cells.unshift(cells);
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
      console.error("row must instanceof Row");
    }
    this.addCell(row.cells);
    return this
  }
  /**
   *
   * render `tr` element str
   *
   * @return {String}
   */
  render() {
    const cells = this.cells.map(cell => cell.render());

    return `<tr>${cells.join('')}</tr>`
  }
}

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
    this.content = content;
    this.row = row;
    this.col = col;
  }
  /**
   * set rowspan and colspan
   *
   * @param {Number} row  - rowspan value
   * @param {Number} col  - colspan value
   */
  setSpan(row = 1, col = 1) {
    this.row = row;
    this.col = col;
    return this
  }
  renderAttribute() {
    const {
      row,
      col
    } = this;
    if (row === 1 && col === 1) return ""

    let classNames = [];
    let rowspan = '';
    let colspan = '';

    if (row > 1) {
      classNames.push(`row-${row}`);
      rowspan = `rowspan="${row}" `;
    }
    if (col > 1) {
      classNames.push(`col-${col}`);
      colspan = `colspan="${col}" `;
    }
    const className = classNames.join(' ');

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
    this.rows = [];
    this.addRow(rows);
  }
  /**
   * append row(s) in the back of rows stack (push)
   *
   * @param {Array|Object} rows   - row instance
   */
  addRow(rows) {
    if (Array.isArray(rows)) {
      this.rows = this.rows.concat(rows);
    } else {
      this.rows.push(rows);
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
      this.rows = rows.concat(this.rows);
    } else {
      this.rows.unshift(rows);
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
    const rows = this.rows.map(row => row.render());

    return `<table>${rows.join('')}</table>`
  }
}

/**
 * weTable: A table builder which is able to graft row from row
 *
 * @module weTable
 */
var index = {
    Row,
    Cell,
    Table
};

module.exports = index;
