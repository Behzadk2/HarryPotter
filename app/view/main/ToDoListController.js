// app/controller/ToDoListController.js

Ext.define('MyApp.controller.ToDoListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todolist',

    onAddToDoClick: function () {
        var newToDo = this.lookupReference('newToDoTextField').getValue();

        if (newToDo) {
            this.getView().getStore().add({
                task: newToDo
            });

            this.lookupReference('newToDoTextField').setValue('');
        }
    },
    

    onDeleteButtonClick: function (button) {
        var record = button.getWidgetRecord();
        console.log(record);

        if (record) {
            this.getView().getStore().remove(record);
        }
    }
});
