// app/controller/ToDoListController.js

Ext.define('MyApp.controller.ToDoListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todolist',

    onAddToDoClick: function () {
        var newToDo = this.lookupReference('newToDoTextField').getValue(),
            store = this.getViewModel().getStore('todostore'); // Use ViewModel to access the store
        console.log();
        if (newToDo && store) {
            store.add({
                task: newToDo
            });
    
            this.lookupReference('newToDoTextField').setValue('');
        }
    },
    
    

    onDeleteButtonClick: function (button) {
        var record = button.getWidgetRecord();

        if (record) {
            this.getView().getStore().remove(record);
        }
    }
});
