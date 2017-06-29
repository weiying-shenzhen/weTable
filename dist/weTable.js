(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeTable = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Row = function () {
  function Row() {
    classCallCheck(this, Row);

    this.cells = [];
    return this;
  }

  createClass(Row, [{
    key: "addCell",
    value: function addCell(cells) {
      if (Array.isArray(cells)) {
        this.cells = this.cells.concat(cells);
      } else {
        this.cells.push(cells);
      }
      return this;
    }
  }, {
    key: "unshiftCell",
    value: function unshiftCell(cells) {
      if (Array.isArray(cells)) {
        this.cells = cells.concat(this.cells);
      } else {
        this.cells.unshift(cells);
      }
      return this;
    }
  }, {
    key: "appendRow",
    value: function appendRow(row) {
      if (!(row instanceof Row)) {
        console.error("row must instanceof Row");
      }
      this.addCell(row.cells);
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      var cells = this.cells.map(function (cell) {
        return cell.render();
      });

      return "<tr>" + cells.join('') + "</tr>";
    }
  }]);
  return Row;
}();

var Cell = function () {
  function Cell() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var col = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    classCallCheck(this, Cell);

    this.content = content;
    this.row = row;
    this.col = col;
    return this;
  }

  createClass(Cell, [{
    key: 'setSpan',
    value: function setSpan() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var col = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.row = row;
      this.col = col;
      return this;
    }
  }, {
    key: 'renderAttribute',
    value: function renderAttribute() {
      var row = this.row,
          col = this.col;

      if (row === 1 && col === 1) return "";

      var classNames = [];
      var rowspan = '';
      var colspan = '';

      if (row > 1) {
        classNames.push('row-' + row);
        rowspan = 'rowspan="' + row + '" ';
      }
      if (col > 1) {
        classNames.push('col-' + col);
        colspan = 'colspan="' + col + '" ';
      }
      var className = classNames.join(' ');

      return '' + rowspan + colspan + (className ? 'class="' + className + '"' : '');
    }
  }, {
    key: 'render',
    value: function render() {
      return '<td ' + this.renderAttribute() + '>' + this.content + '</td>';
    }
  }]);
  return Cell;
}();

var Table = function () {
  function Table() {
    classCallCheck(this, Table);

    this.rows = [];
  }

  createClass(Table, [{
    key: 'addRow',
    value: function addRow(rows) {
      if (Array.isArray(rows)) {
        this.rows = this.rows.concat(rows);
      } else {
        this.rows.push(rows);
      }
      return this;
    }
  }, {
    key: 'unshiftRow',
    value: function unshiftRow(rows) {
      if (Array.isArray(rows)) {
        this.rows = rows.concat(this.rows);
      } else {
        this.rows.unshift(rows);
      }
      return this;
    }
  }, {
    key: 'render',
    value: function render() {
      var rows = this.rows.map(function (row) {
        return row.render();
      });

      return '<table>' + rows.join('') + '</table>';
    }
  }]);
  return Table;
}();

var index = {
    Row: Row,
    Cell: Cell,
    Table: Table
};

return index;

})));