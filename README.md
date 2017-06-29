# weTable
A table builder which is able to graft row from row

# Usage

Install

`yarn add we-table` or `npm install we-table`

Usage

```javascript
import {
    Table,
    Row,
    Cell
} from 'we-table'

const table = new Table()

const priceName = new Row().addCell([new Cell("票价名称", 2, 3), new Cell("三楼200元"), new Cell("内场280元")])
const price = new Row().addCell([new Cell("1440元"), new Cell("720元")])
const priceAmount = new Row().addCell([new Cell("票价", 1, 3), new Cell(144000), new Cell(72000)])
const priceNumber = new Row().addCell([new Cell("可售张数", 1, 3), new Cell(9), new Cell(9)])
const priceRate = new Row().addCell([new Cell("已售比例", 1, 3), new Cell(0.5), new Cell(0.5)])

const firstRow = new Row()
                .addCell([new Cell("销售渠道", 5, 3)])
                .appendRow(priceName)
                .addCell(new Cell("总计", 5))

table.addRow([firstRow, price, priceAmount, priceNumber, priceRate])

console.log(table.render())

```
Output

```html
<table><tr><td rowspan="5" colspan="3" class="row-5 col-3">销售渠道</td><td rowspan="2" colspan="3" class="row-2 col-3">票价名称</td><td >三楼200元</td><td >内场280元</td><td rowspan="5" class="row-5">总计</td></tr><tr><td >1440元</td><td >720元</td></tr><tr><td colspan="3" class="col-3">票价</td><td >144000</td><td >72000</td></tr><tr><td colspan="3" class="col-3">可售张数</td><td >9</td><td >9</td></tr><tr><td colspan="3" class="col-3">已售比例</td><td >0.5</td><td >0.5</td></tr></table>
```

# API reference

## Modules

<dl>
<dt><a href="#module_weTable">weTable</a></dt>
<dd><p>weTable: A table builder which is able to graft row from row</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Cell">Cell</a></dt>
<dd><p>Cell: Table cell (td)</p>
</dd>
<dt><a href="#Row">Row</a></dt>
<dd><p>Row: Table Row (tr)</p>
</dd>
<dt><a href="#Table">Table</a></dt>
<dd><p>Table: HTML Table (table)</p>
</dd>
</dl>

<a name="module_weTable"></a>

## weTable
weTable: A table builder which is able to graft row from row

<a name="Cell"></a>

## Cell
Cell: Table cell (td)

**Kind**: global class  

* [Cell](#Cell)
    * [new Cell(content, row, col)](#new_Cell_new)
    * [.setSpan(row, col)](#Cell+setSpan)
    * [.render()](#Cell+render) ⇒ <code>String</code>

<a name="new_Cell_new"></a>

### new Cell(content, row, col)
create a Cell instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| content | <code>String</code> |  | content to display |
| row | <code>Number</code> | <code>1</code> | rowspan value |
| col | <code>Number</code> | <code>1</code> | colspan value |

<a name="Cell+setSpan"></a>

### cell.setSpan(row, col)
set rowspan and colspan

**Kind**: instance method of [<code>Cell</code>](#Cell)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| row | <code>Number</code> | <code>1</code> | rowspan value |
| col | <code>Number</code> | <code>1</code> | colspan value |

<a name="Cell+render"></a>

### cell.render() ⇒ <code>String</code>
render `td` element str

**Kind**: instance method of [<code>Cell</code>](#Cell)  
<a name="Row"></a>

## Row
Row: Table Row (tr)

**Kind**: global class  

* [Row](#Row)
    * [new Row()](#new_Row_new)
    * [.addCell(cells)](#Row+addCell)
    * [.unshiftCell(cells)](#Row+unshiftCell)
    * [.appendRow(row)](#Row+appendRow)
    * [.render()](#Row+render) ⇒ <code>String</code>

<a name="new_Row_new"></a>

### new Row()
create a Row instance

<a name="Row+addCell"></a>

### row.addCell(cells)
append cell(s) in the back of cells stack (push)

**Kind**: instance method of [<code>Row</code>](#Row)  

| Param | Type | Description |
| --- | --- | --- |
| cells | <code>Array</code> \| <code>Object</code> | cell instance |

<a name="Row+unshiftCell"></a>

### row.unshiftCell(cells)
insert cell(s) in the front of cells stack (unshift)

**Kind**: instance method of [<code>Row</code>](#Row)  

| Param | Type | Description |
| --- | --- | --- |
| cells | <code>Array</code> \| <code>Object</code> | cell instance |

<a name="Row+appendRow"></a>

### row.appendRow(row)
graft row cells in the back of cells stack

**Kind**: instance method of [<code>Row</code>](#Row)  

| Param | Type | Description |
| --- | --- | --- |
| row | [<code>Row</code>](#Row) | row instance |

<a name="Row+render"></a>

### row.render() ⇒ <code>String</code>
render `tr` element str

**Kind**: instance method of [<code>Row</code>](#Row)  
<a name="Table"></a>

## Table
Table: HTML Table (table)

**Kind**: global class  

* [Table](#Table)
    * [new Table()](#new_Table_new)
    * [.addRow(rows)](#Table+addRow)
    * [.unshiftRow(rows)](#Table+unshiftRow)
    * [.render()](#Table+render) ⇒ <code>String</code>

<a name="new_Table_new"></a>

### new Table()
create a Table instance

<a name="Table+addRow"></a>

### table.addRow(rows)
append row(s) in the back of rows stack (push)

**Kind**: instance method of [<code>Table</code>](#Table)  

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Array</code> \| <code>Object</code> | row instance |

<a name="Table+unshiftRow"></a>

### table.unshiftRow(rows)
insert row(s) in the front of rows stack (unshift)

**Kind**: instance method of [<code>Table</code>](#Table)  

| Param | Type | Description |
| --- | --- | --- |
| rows | <code>Array</code> \| <code>Object</code> | row instance |

<a name="Table+render"></a>

### table.render() ⇒ <code>String</code>
render `table` element str

**Kind**: instance method of [<code>Table</code>](#Table)  

*docs autogenerated via [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown)*
