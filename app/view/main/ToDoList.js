// app/view/todo/ToDoList.js

Ext.define('MyApp.view.main.ToDoList', {
    extend: 'Ext.grid.Panel',
    xtype: 'todolist',

    requires: [
        'MyApp.controller.ToDoListController',
        'MyApp.store.ToDoStore'
    ],

    controller: 'todolist',

    title: 'To-Do List',

    store: {
        type: 'todostore'
    },

    plugins: {
        cellediting: {
            clicksToEdit: 2
        }
    },

    columns: [
        {
            text: 'To-Do',
            dataIndex: 'task',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Actions',
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'button',
                text: 'Delete',
                handler: 'onDeleteButtonClick'
            }
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'New To-Do',
                labelAlign: 'top',
                reference: 'newToDoTextField',
                flex: 1
            },
            {
                xtype: 'button',
                text: 'Add',
                handler: 'onAddToDoClick'
            }
        ]
    }]
});
