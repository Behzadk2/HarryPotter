Ext.define('MyApp.view.main.ProductView', {
    extend: 'Ext.grid.Panel',
    xtype: 'productview',

    requires: [
        'MyApp.store.ProductStore',
       
    ],
 
    
    title: 'Product',

    store: {
        type: 'productstore'
    },
    
    columns: [
        { text: 'ID', dataIndex: 'id', width: 60},
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Description', dataIndex: 'description', flex: 2 },
        { text: 'Price', dataIndex: 'price', },
        { text: 'Discount Percentage', dataIndex: 'discountPercentage', width: 150 },
        { text: 'Rating', dataIndex: 'discountPercentage', width: 80 },
        { text: 'Stock', dataIndex: 'stock', width: 80 },
        { text: 'Brand', dataIndex: 'brand', width: 120 },
        { text: 'Category', dataIndex: 'category', width: 120 },
        { text: 'Thumbnail', dataIndex: 'thumbnail', width: 100, renderer: 'renderThumbnail' }
        // You can add more columns as needed
    ],

   

    
});
