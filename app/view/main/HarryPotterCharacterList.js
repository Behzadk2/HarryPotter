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

  columns: [
    { text: "id", dataIndex: "id", flex: 1 },
    { text: "name", dataIndex: "name", flex: 1 },
    { text: "Gender", dataIndex: "gender", flex: 1 },
    { text: "House", dataIndex: "house", flex: 1 },
    { text: "Date of Birth", dataIndex: "dateOfBirth", flex: 1 },
    { text: "Year of Birth", dataIndex: "yearOfBirth", flex: 1 },
    { text: "Wizard", dataIndex: "wizard", flex: 1 },
    { text: "Ancestry", dataIndex: "ancestry", flex: 1 },
    { text: "Eye Colour", dataIndex: "eyeColour", flex: 1 },
    { text: "Hair Colour", dataIndex: "hairColour", flex: 1 },
    { text: "Wand", dataIndex: "wand", flex: 1 },
  ],

  listeners: {
    select: "onItemSelected", // Assuming you have a method for handling item selection
  },
});
