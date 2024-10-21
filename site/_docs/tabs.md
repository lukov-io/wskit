---
title: Documentation
permalink: /docs/tabs/
---

Accordion module. This module provides the ability to initialize accordions, allowing elements to expand and collapse 
based on user interaction. 

### Usage 
Import the module into your JS:

#### JavaScript
```javascript
import { tabs } from 'js-utils';

tabs.run();
```

#### HTML
```html
<div class="tabs" data-tabs data-active-button-class="active-button" data-active-content-class="active-content">
  <div class="tabs__header">
    <span data-tab-button="tab1">Tab 1</span>
    <span data-tab-button="tab2">Tab 2</span>
    <span data-tab-button="tab3">Tab 3</span>
  </div>
  <div data-tab-content="tab1">
    <h2>Content for Tab 1</h2>
    <p>This is the content for Tab 1.</p>
  </div>
  <div data-tab-content="tab2">
    <h2>Content for Tab 2</h2>
    <p>This is the content for Tab 2.</p>
  </div>
  <div data-tab-content="tab3">
    <h2>Content for Tab 3</h2>
    <p>This is the content for Tab 3.</p>
  </div>
</div>
```

### Data attributes

- **data-tabs**: Indicates the container that will use the "Tabs" functionality.

- **data-active-button-class**: Specifies the class that will be added to the active tab button (default is 'active').

- **data-active-content-class**: Specifies the class that will be added to the active tab content (default is 'active').

- **data-tab-button**: Indicates the element that will be used as the tab button.

- **data-tab-content**: Indicates the element that contains the content for the corresponding tab.


### API

#### `run()`

Initializes all tabs on the page.

**Example:**

```javascript
tabs.run();
```

### Notes

This module implements tab functionality, allowing users to easily switch between different content sections. It uses data attributes to manage active tabs and their content. The module supports customizing active element classes and provides flexibility in organizing the interface.
