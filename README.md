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


## Security
None! This is purely for use in a controlled environment. The collection used for saving the key values is editable for everyone else.
