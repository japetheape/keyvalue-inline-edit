
// inlineEdit
Template.inlineEdit.helpers({
  inEditMode: function() {
    return KeyvalueInlineEdit.inEditMode();
  },
  value: function() {
    return KeyvalueInlineEdit.getValue(this.key) || this.placeholder;
  }
});

// inlineEditInput
Template.inlineEditInput.helpers({
  valueForInput: function() {
    return KeyvalueInlineEdit.getValue(this.key);
  },
  value: function() {
    return KeyvalueInlineEdit.getValue(this.key) || this.placeholder ||  '(click to edit)';
  },
  inLocalEditMode: function() {
    return KeyvalueInlineEdit.inLocalEditMode(this.key);
  },
  showInput: function() {
    return this.type == null || this.type == 'input';
  },
  showTextArea: function() {
    return this.type == 'textarea';
  }
})


Template.inlineEditInput.events({
  'click .value' : function() {
    KeyvalueInlineEdit.toggleLocalEditMode(this.key);
  },
  'click .save' : function(e) {
    var value = $(e.target).parent().find('[name=value]').val();
    KeyvalueInlineEdit.setValue(this.key, value);
    KeyvalueInlineEdit.toggleLocalEditMode(this.key);
  }
})





// KeyvalueInlineEdit
Template.inlineEditControl.helpers({
  inEditMode: function() {
    return KeyvalueInlineEdit.inEditMode();
  }
});

Template.inlineEditControl.events({
  'click .start': function() {
    return KeyvalueInlineEdit.toggleEditMode();
  },
  'click .stop': function() {
    return KeyvalueInlineEdit.toggleEditMode();
  }
});
