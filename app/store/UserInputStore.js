Ext.define('MyApp.store.UserInputStore', {
    extend: 'Ext.data.Store',

    alias: 'store.userinputstore',

    model: 'MyApp.model.UserInput',

    proxy: {
        type: 'memory', // You can use 'ajax' or other types based on your needs
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
