Ext.define('MyApp.model.HarryPotterCharacter', {
    extend: 'Ext.data.Model',

    fields: [
        'id',
        'name',
        'alternate_names',
        'species',
        'gender',
        'house',
        'dateOfBirth',
        'yearOfBirth',
        'wizard',
        'ancestry',
        'eyeColour',
        'hairColour',
        {
            name: 'wand',
            type: 'auto'
        },
        'patronus',
        'hogwartsStudent',
        'hogwartsStaff',
        'actor',
        'alternate_actors',
        'alive',
        'image'
    ]
});
