'use strict';

class Row {
  constructor() {
    this.cells = [];
    return this
  }
  addCell(cells) {
    if (Array.isArray(cells)) {
      this.cells = this.cells.concat(cells);
    } else {
      this.cells.push(cells);
    }
    return this
  }
  unshiftCell(cells) {
    if (Array.isArray(cells)) {
      this.cells = cells.concat(this.cells);
    } else {
      this.cells.unshift(cells);
    }
    return this
  }
  appendRow(row) {
    if (!(row instanceof Row)) {
      console.error("row must instanceof Row");
    }
    this.addCell(row.cells);
    return this
  }
  render() {
    const cells = this.cells.map(cell => cell.render());

    return `<tr>${cells.join('')}</tr>`
  }
}

class Cell {
  constructor(content = '', row = 1, col = 1) {
    this.content = content;
    this.row = row;
    this.col = col;
    return this
  }
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
  render() {
    return `<td ${this.renderAttribute()}>${this.content}</td>`
  }
}

class Table {
  constructor() {
    this.rows = [];
  }
  addRow(rows) {
    if (Array.isArray(rows)) {
      this.rows = this.rows.concat(rows);
    } else {
      this.rows.push(rows);
    }
    return this
  }
  unshiftRow(rows) {
    if (Array.isArray(rows)) {
      this.rows = rows.concat(this.rows);
    } else {
      this.rows.unshift(rows);
    }
    return this
  }
  render() {
    const rows = this.rows.map(row => row.render());

    return `<table>${rows.join('')}</table>`
  }
}

var index = {
    Row,
    Cell,
    Table
};

module.exports = index;
