// Define a local store to hold form data with local storage persistence
Ext.define('MyApp.store.FormStore', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.FormModel',

    proxy: {
        type: 'localstorage', // Use local storage for data persistence
        id: 'myform-localstorage-proxy', // Unique ID for the local storage entry
        reader: {
            type: 'json'
        }
    },

    autoLoad: true // Load data from local storage on store initialization
});
