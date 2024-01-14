// Define the form view with a textfield and submit button
Ext.define('MyApp.view.main.MyForm', {
    extend: 'Ext.form.Panel',
    xtype: 'myform',

    requires: [
        'MyApp.model.FormModel',
        'MyApp.store.FormStore',
        //'MyApp.view.main.MainController',
    ],

    //controller: 'main', // Associate the form controller

    title: 'My Form',

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Enter Text',
        name: 'inputText'
    }, {
        xtype: 'button',
        text: 'Submit',
        handler: 'onSubmitButtonClick' // Handle button click in the controller
    }]
});
