# Keyvalue Inline Edit
This is a simple Meteor.js package to do inline editing based on one colleciton wich is essentially a key value store.


## Example
```
<h1>Some title</h1>
<p>{{>inlineEdit key='introduction-text' placeholder='Some placeholder data'}}</p>

```

Somewhere else on the page place the control element.

```
{{>inlineEditControl}}
```

Whith this you control the edit mode of the page.

## Demo

Go to: http://keyvalue-inline-edit-demo.meteor.com to see how it works, see [source](https://github.com/japetheape/keyvalue-inline-edit-demo) here.


## Security
None! This is purely for use in a controlled environment. The collection used for saving the key values is editable for everyone else.


## Author
Written by: http://jaapvandermeer.com of http://ape55.com, contact us for Meteor projects!
