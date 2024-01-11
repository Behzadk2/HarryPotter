/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel',
       
    ],
 
    
    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {
                xtype: 'button',
                text: 'Grid Preferences',
                menu: [
                    // Add menu items as needed
                ]
            },
            ' ',
            {
                xtype: 'numberfield',
                emptyText: 'Enter Quantity',
                listeners: {
                    change: 'onQuantityFilterChange'
                }
            },
            ' ',
            {
                xtype: 'datefield',
                emptyText: 'Choose Warranty End Date',
                format: 'Y-m-d',
                triggers: {
                    foo: {
                        cls: 'x-form-search-trigger' // Magnifier icon
                    }
                },
                listeners: {
                    change: 'onWarrantyEndFilterChange'
                }
            }
        ]
    }],

    columns: [
        { text: 'Customer Name', dataIndex: 'name', flex: 2 },
        { text: 'Product Number', dataIndex: 'productNumber', flex: 1.5 },
        { text: 'Quantity', dataIndex: 'quantity', flex: 1 },
        { text: 'Contract Id', dataIndex: 'contractId', flex: 1 },
        { text: 'Serial Number', dataIndex: 'serialNumber', flex: 1 },
        { text: 'Instance Id', dataIndex: 'instanceId', flex: 1 },
        { text: 'Service Level', dataIndex: 'serviceLevel', flex: 1 },
        { text: 'Service Start', dataIndex: 'serviceStart', flex: 1 },
        { text: 'Service End', dataIndex: 'serviceEnd', flex: 1 },
        { text: 'Product Eos', dataIndex: 'productEos', flex: 1 },
        { text: 'Warranty End', dataIndex: 'warrantyEnd', flex: 1 },
        { text: 'Device Level', dataIndex: 'deviceLevel', flex: 1 }
    ],
   

    listeners: {
        select: 'onItemSelected'
    }
});
