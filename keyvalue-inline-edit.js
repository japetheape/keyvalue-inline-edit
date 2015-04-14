// Write your package code here!


KeyvalueInlineEdit = {


  pageKeyValuesCollection: new Mongo.Collection('page-key-values'),

  inLocalEditMode: function(key) {
    return Session.get('inlineEditLocalEditMode-' + key);
  },

  toggleLocalEditMode: function(key) {
    var key = 'inlineEditLocalEditMode-' + key;
    Session.set(key, !Session.get(key));
  },


  inEditMode: function() {
    return Session.get('KeyvalueInlineEditEditMode');
  },

  toggleEditMode: function() {
    Session.set('KeyvalueInlineEditEditMode', !Session.get('KeyvalueInlineEditEditMode'));
  },


  getValue: function(key) {
    check(key, String);
    var collection = KeyvalueInlineEdit.pageKeyValuesCollection;
    var object = collection.findOne({key:key});
    return object != null ? object.value : null;
  },

  setValue: function(key, value) {
    check(key, String);
    check(value, String);
    var collection = KeyvalueInlineEdit.pageKeyValuesCollection;
    var object = collection.findOne({key:key});

    if(object) {
      collection.update(object._id, { $set: { value: value } });
    } else {
      collection.insert({ key:key, value: value } );
    }
  },

  allowPublicEdit: function() {
    KeyvalueInlineEdit.pageKeyValuesCollection.allow({
      insert: function(userId, doc) { return true; },
      update: function(userId, doc) { return true; },
      remove: function(userId, doc) { return true; }
    });
  }

};



if(Meteor.isServer) {
  KeyvalueInlineEdit.allowPublicEdit()
  Meteor.publish('keyvalue-inline-edit-kv-store', function() {
    return KeyvalueInlineEdit.pageKeyValuesCollection.find({});
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('keyvalue-inline-edit-kv-store');
}
