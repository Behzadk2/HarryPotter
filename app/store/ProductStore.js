Ext.define('MyApp.store.ProductStore', {
    extend: 'Ext.data.Store',

    alias: 'store.productstore',

    model: 'MyApp.model.ProductModel',

    proxy: {
        type: 'ajax',
        url: 'https://dummyjson.com/products',
        reader: {
            type: 'json',
            rootProperty: 'products' //need the named product as root instead of data
        }
    },

    autoLoad: true,
    
});
