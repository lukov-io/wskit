---
title: Example
permalink: /docs/accordion/example/
---
<script type="module">
  import accordion from "/js-utils/assets/js/accordion.js";
  accordion.run();
</script>
<style>
  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  h1 {
    text-align: center;
  }

  .accordions {
    flex-direction: column;
    display: flex;
    row-gap: 20px;
    padding: 0 50px;
  }

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

      .custom-class	{
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

## Example of an accordion with 'single' mode
<div class="accordion" data-accordion="single">
  <div class="accordion__item" data-accordion-item>
    <h3 class="accordion__item-title">Item 1</h3>
    <div class="accordion__item-content">
      Content of item 1. Here you can place any text or HTML code.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <h3 class="accordion__item-title">Item 2</h3>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 2. Any text or HTML code can also be placed here.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <h3 class="accordion__item-title">Item 3</h3>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 3. You can add anything here, such as images or links.
    </div>
  </div>
</div>

## Example of an accordion with 'multiple' mode
<div class="accordion" data-accordion="multiple" data-item-active-class="custom-class">
  <div class="accordion__item" data-accordion-item>
    <h3 class="accordion__item-title">Item 1</h3>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 1. Here you can place any text or HTML code.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <h3 class="accordion__item-title">Item 2</h3>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 2. Any text or HTML code can also be placed here.
    </div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <h3 class="accordion__item-title">Item 3</h3>
    <div class="accordion__item-content" data-accordion-content>
      Content of item 3. You can add anything here, such as images or links.
    </div>
  </div>
</div>

