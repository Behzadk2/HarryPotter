Ext.define('MyApp.model.Personnel', {
    extend: 'Ext.data.Model',

    fields: [
        'name', 'productNumber', 'quantity', 'contractId', 'serialNumber',
        'instanceId', 'serviceLevel', 'serviceStart', 'serviceEnd',
        'productEos', 'warrantyEnd', 'deviceLevel'
    ]
});
