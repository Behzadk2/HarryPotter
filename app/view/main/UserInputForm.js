Ext.define('MyApp.view.main.UserInputForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userinputform',

    requires: [
        'MyApp.store.UserInputStore'
    ],

    title: 'User Input Form',

    store: {
        type: 'userinputstore'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Enter Text',
        name: 'text',
        allowBlank: false
    }, {
        xtype: 'button',
        text: 'Submit',
        handler: 'onSubmitClick'
    }],

    listeners: {
        submit: 'onFormSubmit'
    }
});
