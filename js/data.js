/*测试数据*/
var rightData = [
  {
    newModel: {
      id: '1',
      name: '选 择',
      type: 'model'
    },
    newAnd: {
      id: '2',
      name: 'AND',
      type: 'and'
    },
    newOr: {
      id: '3',
      name: 'OR',
      type: 'or'
    },
    newCustomers: {
      id: '4',
      name: '客 群',
      type: 'customers'
    },
    newRestrict: {
      id: '5',
      name: '限 制',
      type: 'restrict'
    },
    newExport: {
      id: '6',
      name: '导 出',
      type: 'export'
    },
  }
]

// type: modeltype，fun1 规则选择
// txt: 规则选择内容
var modelData = [
  {
    id: 'id',
    name: 'name',
    type: 'model/and/or/ont/fun1',
    x: 'x',
    y: 'y',
    to: ['id1','id2'],
    txt: ['',''],
    fun:function(type){}
  }
]