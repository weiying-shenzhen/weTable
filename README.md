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