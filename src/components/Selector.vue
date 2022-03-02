<template>
<div>
  <section>
    <h2>
      Selector and Block
    </h2>
    <p>
      A CSS file contains several CSS rules. <br>
      Each rule is composed by 2 parts:
      <ul class="list-disc">
        <li>the selector</li>
        <li>the declaration block</li>
      </ul>
      <br>
      <span class="caption">
        In this example, p and a is the selector, and applies one rule which sets the value 20px to the font-size property:
      </span>
      <pre>
        <code class="language-css" data-language="css">
          p, a {
            font-size: 20px;
          }
        </code>
      </pre>
    </p>
  </section>
  <section>
    <h2>The basics of CSS selectors</h2>
    <p>
      A selector can target one or more items.
      Every HTML tag has a corresponding selector, for example: div, span, img.
      If a selector matches multiple elements, all the elements in the page will be affected by the change. <br>
      HTML elements have 2 attributes which are very commonly used within CSS to associate styling to a specific element on the page: class and id. <br>
      Classes are identified using the . symbol, while ids using the # symbol.
    </p>
  </section>
  <section>
    <h2>Combining selectors</h2>
    <p>You can target a specific element that has a class, or id, attached.</p>
    <pre>
      <code class="language-css" data-language="css">
        p.dog-name {
          color: yellow;
        }
      </code>
    </pre>
    <pre>
      <code class="language-css" data-language="css">
        p#dog-name {
          color: yellow;
        }
      </code>
    </pre>
    <p>
      Why would you want to do that, if the class or id already provides a way to target that element? You might have to do that to have more specificity. We’ll see what that means later.
    </p>
    <h3>Targeting multiple classes</h3>
    <p>
      You can target an element with a specific class using .class-name, as you saw previously. You can target an element with 2 (or more) classes by combining the class names separated with a dot, without spaces.
      <br><br>
      Example:
      <span class="caption">In HTML</span>
      <pre>
        <code class="language-markup">
          &lt;p class="dog-name roger">
            Roger
          &lt;/p>
        </code>
      </pre>
      <span class="caption">In CSS</span>
      <pre class="language-markup">
        <code class="language-css" data-language="css">
          .dog-name.roger {
            color: yellow;
          }
        </code>
      </pre>
    </p>
    <h3>Combining classes and ids</h3>
    <p>In the same way, you can combine a class and an id.</p>
    <span class="caption">In HTML</span>
    <pre>
      <code class="language-markup">
        &lt;p class="dog-name" id="roger">
          Roger
        &lt;/p>
      </code>
    </pre>
    <span class="caption">In CSS</span>
    <pre class="language-markup">
      <code class="language-css" data-language="css">
        .dog-name#roger {
          color: yellow;
        }
      </code>
    </pre>
    <h3>Grouping selectors</h3>
    <p>
      You can combine selectors to apply the same declarations to multiple selectors. To do so, you separate them with a comma.
      <br>
      Example:
    </p>
    <span class="caption">In HTML</span>
    <pre>
      <code class="language-markup">
        &lt;p>
          My dog name is:
        &lt;/p>
        &lt;span class="dog-name"> 
          Roger 
        &lt;/span>
      </code>
    </pre>
    <span class="caption">In CSS</span>
    <pre>
      <code class="language-css" data-language="css">
        p, .dog-name {
          color: yellow;
        }
      </code>
    </pre>
    <span class="caption">add spaces in those declarations to make them more clear:</span>
    <pre>
      <code class="language-css" data-language="css">
        p, 
        .dog-name {
          color: yellow;
        }
      </code>
    </pre>
    <section>
      <h2>Follow the document tree with selectors</h2>
      <p>
        We’ve seen how to target an element in the page by using a tag name, a class or an id.
        <br>You can create a more specific selector by combining multiple items to follow the document tree structure. For example, if you have a span tag nested inside a p tag, you can target that one without applying the style to a span tag not included in a p tag:
      </p>
      <span class="caption">In HTML</span>
      <pre>
        <code class="language-markup">
          &lt;span> 
            Hello!
          &lt;/span>
          &lt;p>
            &lt;span class="dog-name"> 
              Roger  
            &lt;/span>
          &lt;p>
        </code>
      </pre>
      <span class="caption">In CSS</span>
      <pre>
        <code class="language-css" data-language="css">
          p span {
            color: yellow;
          }
        </code>
      </pre>
      <p>
        See how we used a space between the two tokens p and span.
        <br>
        This works even if the element on the right is multiple levels deep.
        <br>
        To make the dependency strict on the first level, you can use the > symbol between the two tokens:
      </p>
      <pre>
        <code class="language-css" data-language="css">
          p > span {
            color: yellow;
          }
        </code>
      </pre>
      <p>
        In this case, if a span is not a direct children of the p element, it’s not going to have the new color applied.
        <br>
        Direct children will have the style applied:
      </p>
      <pre>
        <code class="language-markup">
        &lt;p>
          &lt;span> 
            This is Yellow
            &lt;strong>
              &lt;span> This is not yellow &lt;/span>
            &lt;/strong>
          &lt;/span>
        &lt;p>
        </code>
      </pre>
      <p>
        Adjacent sibling selectors let us style an element only if preceded by a specific element. We do so using the + operator:
        <br>
        Example
      </p>
      <pre>
        <code class="language-css" data-language="css">
          p + span {
            color: yellow;
          }
        </code>
      </pre>
      <p>
        This will assign the color yellow to a span element that follows a p element:
      </p>
      <pre>
        <code class="language-markup">
          &lt;p>
            This is a paragraph
          &lt;p>
          &lt;span> This is a yellow span &lt;/span>
        </code>
      </pre>
      <p>
        We have a lot more selectors we can use:
        <ul class="list-disc">
          <li>
            attribute selectors
          </li>
          <li>
            pseudo class selectors
          </li>
          <li>
            pseudo element selectors
          </li>
        </ul>
      </p>
    </section>
  </section>
</div>
</template>
<script>
export default {
  name: 'Selector',
}
</script>