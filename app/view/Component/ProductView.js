Ext.define('MyApp.view.ProductView', {
    extend: 'Ext.panel.Panel',
    xtype: 'productview',

    requires: [
        'MyApp.store.ProductStore'
    ],

    viewModel: {
        stores: {
            productstore: {
                type: 'productstore'
            }
        }
    },

    layout: 'fit',

    items: [{
        xtype: 'dataview',
        bind: {
            store: '{productstore}'
        },
        tpl: new Ext.XTemplate(
            '<tpl for=".">',
            '<div class="product">',
            '<img src="{thumbnail}" alt="{title}">',
            '<h3>{title}</h3>',
            '<p>{description}</p>',
            '<p>Price: {price}</p>',
            '<p>Discount: {discountPercentage}%</p>',
            '<p>Rating: {rating}</p>',
            '<p>Stock: {stock}</p>',
            '<p>Brand: {brand}</p>',
            '<p>Category: {category}</p>',
            '</div>',
            '</tpl>'
        ),
        itemSelector: 'div.product'
    }]
});
