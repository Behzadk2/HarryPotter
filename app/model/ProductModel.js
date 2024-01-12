Ext.define('MyApp.model.ProductModel', {
    extend: 'Ext.data.Model',

    fields: [
        'id', 'title', 'description', 'price',
        'discountPercentage', 'rating', 'stock',
        'brand', 'category', 'thumbnail', 'images'
    ]
});
