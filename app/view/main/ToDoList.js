// app/view/todo/ToDoList.js

Ext.define('MyApp.view.main.ToDoList', {
    extend: 'Ext.grid.Panel',
    xtype: 'todolist',

   
    //controller: 'todolist',

    title: 'To-Do List',

     columns: [
        { text: 'To-Do', dataIndex: 'task', flex: 1 }
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
