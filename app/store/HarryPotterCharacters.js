Ext.define('MyApp.store.HarryPotterCharacters', {
    extend: 'Ext.data.Store',

    alias: 'store.harrypottercharacters',

    model: 'MyApp.model.HarryPotterCharacter',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'https://hp-api.onrender.com/api/characters/staff', // Replace with your actual API URL
        reader: {
            type: 'json',
           // rootProperty: '' // Adjust if needed based on the actual structure of the API response
        }
    }
});
