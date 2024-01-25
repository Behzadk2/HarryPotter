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
    
    renderThumbnail: function(value) {
        return '<img src="' + value + '" alt="Thumbnail" style="max-width: 80px; max-height: 80px;">';
    },
    
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    


    ///Harry Potter Controler 

    onGridItemClick: function(grid, record, item, index, e, eOpts) {
        if (e.getTarget('.full-screen-image')) {
            var imageUrl = record.get('image');
            this.showFullScreenImage(imageUrl);
        }
    },

    showFullScreenImage: function(imageUrl) {
        Ext.create('Ext.window.Window', {
            title: 'Full Screen Image',
            layout: 'fit',
            width: '80%',
            height: '80%',
            items: {
                xtype: 'image',
                src: imageUrl,
                mode: 'img',
                alt: 'Full Screen Image',
                style: 'width: 100%; height: 100%; object-fit: contain;'
            },
            modal: true,
            maximizable: true,
            closable: true
        }).show();},
      

//form
onSubmitButtonClick: function() {
    var form = this.getView().getForm();

    if (form.isValid()) {
       
        var formData = form.getValues();
        this.saveDataLocally(formData);
    }
},

saveDataLocally: function(formData) {
    var formStore = Ext.getStore('FormStore');
    formStore.add(formData);

    console.log('Data saved locally:', formData);
},
//QA
onGetAnswerClick: async function () {
    var inputText = this.lookupReference('inputTextField').getValue();
    var question = this.lookupReference('questionTextField').getValue();

    if (inputText && question) {
        try {
            // Call a function to fetch answer from Hugging Face model
            var answer = await this.fetchAnswer(inputText, question);
            
            // Display the answer in the question textfield
            this.lookupReference('answerTextArea').setValue(answer);
        } catch (error) {
            console.error('Error fetching answer:', error);
        }
    }
},

fetchAnswer: async function (inputText, question) {
    // Use the Hugging Face model API to get the answer
    // Replace the URL below with the actual API endpoint
    var apiUrl = 'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2';
    var response = await Ext.Ajax.request({
        url: apiUrl,
        method: 'POST',
        jsonData: {
            context: inputText,
            question: question
        },
        success: function (response) {
            var result = Ext.decode(response.responseText);
            return result.answer;
        },
        failure: function (response) {
            throw new Error('Failed to fetch answer');
        }
    });

    return Ext.decode(response.responseText).answer;
},

//ToDo 



});
