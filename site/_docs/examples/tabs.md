---
title: Examples
permalink: /docs/tabs/example/
tags: 
  - tabs
---
Examples of the accordion module 
<script type="module">
  import { tabs } from "/js-utils/assets/js/bundle.js";
  tabs.run();
</script>
<style>
		* {
			box-sizing: border-box;
		}

		.tabs {
			max-width: 600px;
			margin: 20px auto;
			background-color: #ffffff;
			border-radius: 5px;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
			overflow: hidden;

			.tabs__header {
				display: flex;
				background-color: #007bff;
			}

			.tabs__button {
				flex: 1;
				padding: 15px;
				color: white;
				border: none;
				background: none;
				cursor: pointer;
				text-align: center;

				&.active {
					background-color: #0056b3;
				}
			}

			&:not([data-active-content-class]) {
				.tabs__item-content {
					padding: 20px;
        }

				.tabs__button {
					&.active {
						background-color: #0056b3;
					}
				}
      }

			&[data-active-content-class] {
				.tabs__item-content {
					overflow: hidden;
					max-height: 0;
					opacity: 0;
					transition: opacity 1s ease,transform 1s ease;
					transform: translateY(0);

					&.custom-content-class {
						margin: 20px;
						max-height: fit-content;
						opacity: 1;
						transform: translateY(-10px);
					}
				}

      &[data-active-button-class]
				.tabs__button {
					&.custom-button-class {
						background-color: #0056b3;
						transition: background-color 1s ease-out;
					}
				}
			}
    }
	</style>

### Default

<ul class="nav nav-tabs">
  <li class="active">
    <a href="#html_default" data-toggle="tab">HTML</a>
  </li>
  <li>
    <a href="#js_default" data-toggle="tab">JS</a>
  </li>
  <li>
    <a href="#result_default" data-toggle="tab">Result</a>
  </li>
</ul>
<div id="example1" class="tab-content">
  <div class="tab-pane fade active in" id="html_default">
{% highlight html %}
<div class="tabs" data-tabs>
  <div class="tabs__header">
    <span class="tabs__button" data-tab-button="tab1">Tab 1</span>
    <span class="tabs__button" data-tab-button="tab2">Tab 2</span>
    <span class="tabs__button" data-tab-button="tab3">Tab 3</span>
  </div>
  <div class="tabs__item-content" data-tab-content="tab1">
    <h3>Tab 1 Content</h3>
    <p>This is the content for Tab 1. You can place any information here.</p>
  </div>
  <div class="tabs__item-content" data-tab-content="tab2">
    <h3>Tab 2 Content</h3>
    <p>This is the content for Tab 2. You can use it for additional information.</p>
  </div>
  <div class="tabs__item-content" data-tab-content="tab3">
    <h3>Tab 3 Content</h3>
    <p>This is the content for Tab 3. Important information can also be presented here.</p>
  </div>
</div>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="js_default">
{% highlight html %}
<script type="module">
  import { tabs } from "js-utils";
  tabs.run();
</script>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="result_default">
    <div class="tabs" data-tabs>
      <div class="tabs__header">
        <span class="tabs__button" data-tab-button="tab1">Tab 1</span>
        <span class="tabs__button" data-tab-button="tab2">Tab 2</span>
        <span class="tabs__button" data-tab-button="tab3">Tab 3</span>
      </div>
      <div class="tabs__item-content" data-tab-content="tab1">
        <h3>Tab 1 Content</h3>
        <p>This is the content for Tab 1. You can place any information here.</p>
      </div>
      <div class="tabs__item-content" data-tab-content="tab2">
        <h3>Tab 2 Content</h3>
        <p>This is the content for Tab 2. You can use it for additional information.</p>
      </div>
      <div class="tabs__item-content" data-tab-content="tab3">
        <h3>Tab 3 Content</h3>
        <p>This is the content for Tab 3. Important information can also be presented here.</p>
      </div>
    </div>
  </div>
</div>

### Active class mode
Set `data-active-button-class="{class}"` and `data-active-content-class="{class}"` attribute

<ul class="nav nav-tabs">
  <li class="active">
    <a href="#html_active-class" data-toggle="tab">HTML</a>
  </li>
  <li>
    <a href="#scss_active-class" data-toggle="tab">SCSS</a>
  </li>
  <li>
    <a href="#js_active-class" data-toggle="tab">JS</a>
  </li>
  <li>
    <a href="#result_active-class" data-toggle="tab">Result</a>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade active in" id="html_active-class">
{% highlight html %}
<div class="tabs" data-tabs data-active-button-class="custom-button-class" data-active-content-class="custom-content-class">
  <div class="tabs__header">
    <span class="tabs__button" data-tab-button="tab1">Tab 1</span>
    <span class="tabs__button" data-tab-button="tab2">Tab 2</span>
    <span class="tabs__button" data-tab-button="tab3">Tab 3</span>
  </div>
  <div class="tabs__item-content" data-tab-content="tab1">
    <h3>Tab 1 Content</h3>
    <p>This is the content for Tab 1. You can place any information here.</p>
  </div>
  <div class="tabs__item-content" data-tab-content="tab2">
    <h3>Tab 2 Content</h3>
    <p>This is the content for Tab 2. You can use it for additional information.</p>
  </div>
  <div class="tabs__item-content" data-tab-content="tab3">
    <h3>Tab 3 Content</h3>
    <p>This is the content for Tab 3. Important information can also be presented here.</p>
  </div>
</div>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="scss_active-class">
{% highlight scss %}
&[data-active-content-class] {
  .tabs__item-content {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: opacity 1s ease,transform 1s ease;
    transform: translateY(0);

    &.custom-content-class {
      margin: 20px;
      max-height: fit-content;
      opacity: 1;
      transform: translateY(-10px);
    }
  }

&[data-active-button-class]
  .tabs__button {
    &.custom-button-class {
      background-color: #0056b3;
      transition: background-color 1s ease-out;
    }
  }
}
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="js_active-class">
{% highlight html %}
<script type="module">
  import { tabs } from "js-utils";
  tabs.run();
</script>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="result_active-class">
    <div class="tabs" data-tabs data-active-button-class="custom-button-class" data-active-content-class="custom-content-class">
	<div class="tabs__header">
		<span class="tabs__button" data-tab-button="tab1">Tab 1</span>
		<span class="tabs__button" data-tab-button="tab2">Tab 2</span>
		<span class="tabs__button" data-tab-button="tab3">Tab 3</span>
	</div>
	<div class="tabs__item-content" data-tab-content="tab1">
		<h3>Tab 1 Content</h3>
		<p>This is the content for Tab 1. You can place any information here.</p>
	</div>
	<div class="tabs__item-content" data-tab-content="tab2">
		<h3>Tab 2 Content</h3>
		<p>This is the content for Tab 2. You can use it for additional information.</p>
	</div>
	<div class="tabs__item-content" data-tab-content="tab3">
		<h3>Tab 3 Content</h3>
		<p>This is the content for Tab 3. Important information can also be presented here.</p>
	</div>
</div>
  </div>
</div>
