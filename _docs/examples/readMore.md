---
title: Examples
permalink: /docs/readMore/example/
tags:
  - readMore
---
Examples of the accordion module 
<script type="module">
  import { readMore } from "/wskit/assets/js/bundle.js";
  readMore.run();
</script>
<style>
  * {
    box-sizing: border-box;
  }

  p {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .read-more {
    max-width: 600px;
    height: fit-content;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .read-more__button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }

    &:not([data-read-more-active-class]) {
      .read-more__content {
        display: none;
      }

      &.active {
        .read-more__content {
          display: block;
        }
      }
    }

    &[data-read-more-active-class] {
      .read-more__content {
        max-height: 0;
        opacity: 0;
        display: block;
        overflow: hidden;
        transition: max-height 1s ease, opacity 1s ease;
      }

      &.animation-class {
        .read-more__content {
          max-height: 500px;
          opacity: 1;
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
<div class="read-more" data-read-more>
  <p>This is the introductory text that is always visible to users. If you want to know more, just click the button below!</p>
  <div class="read-more__content">
    <p>
      This is hidden content that will be displayed after clicking the button. You can place additional information, text, images, and even videos here!
    </p>
    <p>
      Here’s another paragraph to demonstrate how you can expand the content. For example, you could add any interesting facts or statistics to make your article more informative.
    </p>
  </div>
  <span class="read-more__button"
        data-read-more-toggler
        data-more-text="Read More"
        data-less-text="Hide">Read More</span>
</div>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="js_default">
{% highlight html %}
<script type="module">
  import { readMore } from "wskit";
  readMore.run();
</script>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="result_default">
    <div class="read-more" data-read-more>
      <p>This is the introductory text that is always visible to users. If you want to know more, just click the button below!</p>
      <div class="read-more__content">
        <p>
          This is hidden content that will be displayed after clicking the button. You can place additional information, text, images, and even videos here!
        </p>
        <p>
          Here’s another paragraph to demonstrate how you can expand the content. For example, you could add any interesting facts or statistics to make your article more informative.
        </p>
      </div>
      <span class="read-more__button"
            data-read-more-toggler
            data-more-text="Read More"
            data-less-text="Hide">Read More</span>
    </div>
  </div>
</div>

### Active class mode

Set `data-read-more-active-class="{class}"` attribute

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
<div class="read-more" data-read-more data-read-more-active-class="animation-class">
  <p>This is the introductory text that is always visible to users. If you want to know more, just click the button below!</p>
    <div class="read-more__content">
      <p>
        This is hidden content that will be displayed after clicking the button. You can place additional information, text, images, and even videos here!
      </p>
      <p>
        Here’s another paragraph to demonstrate how you can expand the content. For example, you could add any interesting facts or statistics to make your article more informative.
      </p>
    </div>
  <span class="read-more__button" data-read-more-toggler data-more-text="Read More" data-less-text="Hide">Read More</span>
</div>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="scss_active-class">
{% highlight scss %}

[data-read-more-active-class] {
  .read-more__content {
    max-height: 0;
    opacity: 0;
    display: block;
    overflow: hidden;
    transition: max-height 1s ease, opacity 1s ease;
  }
  
  &.animation-class {
    .read-more__content {
      max-height: 500px;
      opacity: 1;
    }
  }
}

{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="js_active-class">
{% highlight html %}
<script type="module">
  import { accordion } from "wskit";
  accordion.run();
</script>
{% endhighlight %}
  </div>
  <div class="tab-pane fade" id="result_active-class">
    <div class="read-more" data-read-more data-read-more-active-class="animation-class">
	<p>This is the introductory text that is always visible to users. If you want to know more, just click the button below!</p>
	<div class="read-more__content">
		<p>
			This is hidden content that will be displayed after clicking the button. You can place additional information, text, images, and even videos here!
		</p>
		<p>
			Here’s another paragraph to demonstrate how you can expand the content. For example, you could add any interesting facts or statistics to make your article more informative.
		</p>
	</div>
	<span class="read-more__button" data-read-more-toggler data-more-text="Read More" data-less-text="Hide">Read More</span>
</div>
  </div>
</div>

