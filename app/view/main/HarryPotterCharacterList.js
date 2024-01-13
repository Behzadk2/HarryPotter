Ext.define("MyApp.view.main.HarryPotterCharacterList", {
  extend: "Ext.grid.Panel",
  xtype: "harrypottercharacterlist",

  requires: [
    "MyApp.store.HarryPotterCharacters",
    "MyApp.model.HarryPotterCharacter",
  ],

  title: "Harry Potter Characters",

  store: {
    type: "harrypottercharacters",
  },

  columns:[
    { text: 'Character', dataIndex: 'character', flex: 1 },
    { text: 'Nickname', dataIndex: 'nickname', flex: 1 },
    { text: 'Hogwarts Student', dataIndex: 'hogwartsStudent', flex: 1 },
    { text: 'Hogwarts House', dataIndex: 'hogwartsHouse', flex: 1 },
    { text: 'Interpreted By', dataIndex: 'interpretedBy', flex: 1 },
    { text: 'Child', dataIndex: 'child', flex: 1, renderer: function (value) { return value.join(', '); } },
    { text: 'Image', dataIndex: 'image', flex: 1, renderer: function (value) {  return '<img src="' + value + '" height="50" class="full-screen-image" />'; } }
],
listeners: {
  itemclick: 'onGridItemClick'
}
  
});
