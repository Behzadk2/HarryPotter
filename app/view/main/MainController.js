/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onQuantityFilterChange: function(field, newValue, oldValue, eOpts) {
        var grid = field.up('grid'),
            store = grid.getStore();
    
        store.clearFilter(); // Clear existing filters
    
        if (newValue !== null && newValue !== undefined) {
            store.filterBy(function(record) {
                return record.get('quantity') <= newValue;
            });
        }
    },
    
    onWarrantyEndFilterChange: function(field, newValue, oldValue, eOpts) {
        var grid = field.up('grid'),
            store = grid.getStore();

            store.clearFilter();
    
        store.filterBy(function(record) {
            return Ext.Date.parse(record.get('warrantyEnd'), 'Y-m-d') <= newValue;
        });
    },

    
    onExportButtonClick: function(button) {
        var grid = button.up('grid'),
            store = grid.getStore();
    
        Ext.ux.Exporter.exportGrid(grid, 'exported-data.xlsx', 'excel', {
            includeHeaders: true,
            rows: store.getRange(),
            columns: grid.columns,
            utf8BOM: true
        });
    },
    
   
    
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
