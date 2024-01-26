// app/view/main/Main.js

Ext.define('MyApp.view.main.QA', {
    extend: 'Ext.panel.Panel',
    xtype: 'QA',

    layout: 'vbox',
    padding: 20,

    items: [{
        xtype: 'textareafield',
        fieldLabel: 'Input Text',
        reference: 'inputTextField',
        width: '100%',
        margin: '0 0 10 0'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Question',
        reference: 'questionTextField',
        width: '100%',
        margin: '0 0 10 0'
    }, {
        xtype: 'button',
        text: 'Get Answer',
        handler: 'onGetAnswerClick'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Answer',
        reference: 'answerTextArea',
        width: '100%',
        height: 150,
        readOnly: true,
        margin: '10 0 0 0'
    }]
});
