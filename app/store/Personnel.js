Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: {
        items: [
            { 
                name: 'Customer 1', productNumber: 'P001', quantity: 5,
                contractId: 'C001', serialNumber: 'S001', instanceId: 'I001',
                serviceLevel: 'Gold', serviceStart: '2023-01-01', serviceEnd: '2024-01-01',
                productEos: '2025-01-01', warrantyEnd: '2025-01-01', deviceLevel: 'High'
            },
            { 
                name: 'Customer 2', productNumber: 'P002', quantity: 3,
                contractId: 'C002', serialNumber: 'S002', instanceId: 'I002',
                serviceLevel: 'Silver', serviceStart: '2023-02-01', serviceEnd: '2024-02-01',
                productEos: '2025-02-01', warrantyEnd: '2025-02-01', deviceLevel: 'Medium'
            },
            { 
                name: 'Customer 3', productNumber: 'P003', quantity: 8,
                contractId: 'C003', serialNumber: 'S003', instanceId: 'I003',
                serviceLevel: 'Bronze', serviceStart: '2023-03-01', serviceEnd: '2024-03-01',
                productEos: '2025-03-01', warrantyEnd: '2025-03-01', deviceLevel: 'Low'
            },
            // ... Continue adding more data items in the same format
            { 
                name: 'Customer 98', productNumber: 'P098', quantity: 2,
                contractId: 'C098', serialNumber: 'S098', instanceId: 'I098',
                serviceLevel: 'Gold', serviceStart: '2023-12-01', serviceEnd: '2024-12-01',
                productEos: '2025-12-01', warrantyEnd: '2025-12-01', deviceLevel: 'Medium'
            },
            { 
                name: 'Customer 99', productNumber: 'P099', quantity: 5,
                contractId: 'C099', serialNumber: 'S099', instanceId: 'I099',
                serviceLevel: 'Silver', serviceStart: '2023-12-15', serviceEnd: '2024-12-15',
                productEos: '2025-12-15', warrantyEnd: '2025-12-15', deviceLevel: 'Low'
            },
            { 
                name: 'Customer 100', productNumber: 'P100', quantity: 3,
                contractId: 'C100', serialNumber: 'S100', instanceId: 'I100',
                serviceLevel: 'Bron',
                serviceStart: '2023-12-15',
                serviceEnd: '2024-12-15',
                productEos: '2025-12-15',
                warrantyEnd: '2025-12-15',
                deviceLevel: 'High'
            }
            // Add more data items as needed
        ]},
    
    
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
