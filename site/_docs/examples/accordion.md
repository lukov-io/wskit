---
title: Examples
permalink: /docs/accordion/example/
---

Examples of the accordion module 
<script type="module">
  import accordion from "/js-utils/assets/js/accordion.js";
  accordion.run();
</script>
<style>
  .accordion {
    background-color: #f0f0f0;

    .accordion__item {
      cursor: pointer;
      padding: 10px;
      border: 1px solid #ccc;
      margin: 5px 0;
      overflow: hidden;
    }

    &:not([data-item-active-class]) {
      .accordion__item-content {
        display: none;
        padding: 10px;
        border: 1px solid #ccc;
        margin-top: 5px;
        background-color: #f9f9d9;
      }


      .active {
        background-color: #f0f9f9;

        > .accordion__item-content {
            display: block;
        }
      }
    }

    &[data-item-active-class] {
      .accordion__item-content {
        display: block;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0;
        transform: translate3d(20px, 0px, 0px);

      }

      .active-red	{
        background-color: #CD5C5C;

        > .accordion__item-content {
          height: fit-content;
          padding: 10px;
          border: 1px solid #ccc;
          margin-top: 5px;
          background-color: #ddee;
          opacity: 1;
          transform: translate3d(0px, 0px, 0px);
          transition: opacity 1s, transform 0.5s;
        }
      }
    }
  }
</style>

## Single mode as default

### Code
```html
<div class="accordion" data-accordion>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 1</span>
    <div class="accordion__item-content">
      Content of item 1.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 2</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 2.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 3</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 3.
    </div>
  </div>
</div>
```
### Result
<div class="accordion" data-accordion="single">
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 1</span>
    <div class="accordion__item-content">
      Content of item 1.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 2</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 2.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 3</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 3.
    </div>
  </div>
</div>

## Multiple mode

### Code
```html
<div class="accordion" data-accordion="multiple" data-item-active-class="active-red">
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 1</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 1.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 2</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 2.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 3</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 3.
    </div>
  </div>
</div>
```
### Result
<div class="accordion" data-accordion="multiple" data-item-active-class="active-red">
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 1</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 1.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 2</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 2.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <span class="accordion__item-title">Item 3</span>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 3.
    </div>
  </div>
</div>

