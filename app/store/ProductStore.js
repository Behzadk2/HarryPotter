Ext.define('MyApp.store.ProductStore', {
    extend: 'Ext.data.Store',

    alias: 'store.productstore',

    model: 'MyApp.model.ProductModel',

    proxy: {
        type: 'ajax',
        url: 'your_product_api_url', // Replace with your actual API URL
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true
});
