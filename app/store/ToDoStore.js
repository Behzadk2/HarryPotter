// app/store/ToDoStore.js

Ext.define('MyApp.store.ToDoStore', {
    extend: 'Ext.data.Store',

    alias: 'store.todostore',

    fields: ['task'],

    data: [
        { task: 'Complete project presentation' },
        { task: 'Attend team meeting' },
        { task: 'Review code changes' }
        // Add more initial to-dos as needed
    ]
});
