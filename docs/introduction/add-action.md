---
sidebar_position: 4
title: Custom Actions
description: Adding custom actions to your admin panel
---
cwire allow you to build custom user actions, where you can interact with the FrontendClient module with the cwire App. 

cwire allows you to create custom actions than can be triggered from the admin panel.

```js
models[0].addAction(new Action('Open Google', async (entityId, options) => {
  const { clientId } = options;
  await FrontendClient.openLink(clientId, 'https://google.com');
}));
```



Click a row in the models view and try the new action.

![Add Action Example Screenshot](/img/add-action-example.png)
