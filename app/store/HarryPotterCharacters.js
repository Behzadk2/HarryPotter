Ext.define('MyApp.store.HarryPotterCharacters', {
    extend: 'Ext.data.Store',

    alias: 'store.harrypottercharacters',

    model: 'MyApp.model.HarryPotterCharacter',
    groupField: 'hogwartsHouse', // Specify the field by which you want to group (e.g., hogwartsHouse)
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'https://harry-potter-api-en.onrender.com/characters', // Replace with your actual API URL
        reader: {
            type: 'json',
           // rootProperty: '' // Adjust if needed based on the actual structure of the API response
        }
    }
});
