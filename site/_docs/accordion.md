---
title: Documentation
permalink: /docs/accordion/
tags: 
  - accordion
---

A module for implementing tab functionality, allowing users to switch between different sections of content using buttons. Users can easily browse different tabs without reloading the page.


### Usage 
Import the module into your JS:
#### JavaScript
```javascript
import { accordion } from '@lukovio/wskit';

accordion.run();
```

#### HTML
```html
<div class="accordion" data-accordion="single" data-accordion-active-class='active'>
  <div class="accordion__item" data-accordion-item>
    <h2 class="accordion__item-title">Title</h2>
    <div class="accordion__item-content">Content</div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <h2 class="accordion__item-title">Title 2</h2>
    <div class="accordion__item-content">Content 2</div>
  </div>
</div>
```

### Data attributes

- **data-accordion**
  - Indicates the accordion mode. The value `"single"` allows only one item to be open at any time,
    while the value `"multiple"` allows multiple items to be open simultaneously.

- **data-accordion-active-class**
  - Specifies the class that will be added to the active accordion item. By default, the class `"active"` is used.

- **data-accordion-item**
  - Refers to an element that is part of the accordion. This attribute should be added to all elements 
    that can be opened or closed.

### API

#### `run()`

Initializes the accordion functionality by finding all accordions in the document and setting up event handlers.

**Example:**

```javascript
accordion.run();
```

### Notes

This module supports multiple modes.
In single mode, when a new item is opened, any previously opened item will automatically close, ensuring that only 
one item is expanded at any given time. In multiple mode, users can freely expand or collapse items without affecting 
the state of others, allowing for a more flexible and interactive experience.
