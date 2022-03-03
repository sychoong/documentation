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
  </section>
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
      The ~ selector matches occurrences of element2 that are preceded by element1
      <br>
      Both elements must have the same parent
      <br>
      Example
    </p>
    <pre>
      <code class="language-css" data-language="css">
p ~ ul {
  background: #ff0000;
}
      </code>
    </pre>
    <span class="caption"> All &lt;ul> elements that are preceded by a &lt;p> element with the same parent will apply the background color</span>
    <pre>
      <code class="language-markup">
&lt;div>A div element.&lt;/div>
&lt;ul>
  &lt;li>Doesn't apply the bg color&lt;/li>
&lt;/ul>

&lt;p>The first paragraph.&lt;/p>
&lt;ul>
  &lt;li>Apply the BG color&lt;/li>
&lt;/ul>

&lt;h2>Another list&lt;/h2>
&lt;ul>
  &lt;li>Apply the BG color&lt;/li>
&lt;/ul>
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
    <h2>
      Attribute selectors
    </h2>
    <p>
      In this section we’ll analyze attribute selectors, and we’ll talk about pseudo class and pseudo element selectors in the next 2 sections.
    </p>
    <h3>
      Attribute presence selectors
    </h3>
    <p>
      The first selector type is the attribute presence selector.
      <br>
      We can check if an element has an attribute using the [] syntax. p[id] will select all p tags in the page that have an id attribute, regardless of its value:
    </p>
    <pre>
      <code class="language-css" data-language="css">
p[id] {
  /* ... */
}
      </code>
    </pre>
    <h3>Exact attribute value selectors</h3>
    <p>Inside the brackets you can check the attribute value using =, and the CSS will be applied only if the attribute matches the exact value specified:</p>
    <pre>
      <code class="language-css" data-language="css">
p[id="my-id"] {
  /* ... */
}
      </code>
    </pre>
    <h3>
      Match an attribute value portion
    </h3>
    <p>While = let us check for exact value, we have other operators:</p>
    <ul class="list-disc">
      <li>*= checks if the attribute contains the partial</li>
      <li>^= checks if the attribute starts with the partial</li>
      <li>$= checks if the attribute ends with the partial</li>
      <li>|= checks if the attribute starts with the partial and it’s followed by a dash (common in classes, for example), or just contains the partial</li>
      <li>~= checks if the partial is contained in the attribute, but separated by spaces from the rest</li>
    </ul>
    <p>All the checks we mentioned are <b>case sensitive.</b></p>
  </section>
  <section>
    <h2>Pseudo classes</h2>
    <p>
      Pseudo classes are predefined keywords that are used to select an element based on its state, or to target a specific child.
      <br>
      They start with a single colon :.
      <br>
      They can be used as part of a selector, and they are very useful to style active or visited links for example, change the style on hover, focus, or target the first child, or odd rows. Very handy in many cases.
      <br>
      These are the most popular pseudo classes you will likely use:
    </p>
    <table>
      <thead>
        <tr>
          <th>Pseudo class</th>
          <th>Targets</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><code>:active</code></td>
          <td>an element being activated by the user (e.g. clicked). Mostly used on links or buttons</td>
        </tr>

        <tr>
          <td><code>:checked</code></td>
          <td>a checkbox, option or radio input types that are enabled</td>
        </tr>

        <tr>
          <td><code>:default</code></td>
          <td>the default in a set of choices (like, option in a select or radio buttons)</td>
        </tr>

        <tr>
          <td><code>:disabled</code></td>
          <td>an element disabled</td>
        </tr>

        <tr>
          <td><code>:empty</code></td>
          <td>an element with no children</td>
        </tr>

        <tr>
          <td><code>:enabled</code></td>
          <td>an element that’s enabled (opposite to <code>:disabled</code>)</td>
        </tr>

        <tr>
          <td><code>:first-child</code></td>
          <td>the first child of a group of siblings</td>
        </tr>

        <tr>
          <td><code>:focus</code></td>
          <td>the element with focus</td>
        </tr>

        <tr>
          <td><code>:hover</code></td>
          <td>an element hovered with the mouse</td>
        </tr>

        <tr>
          <td><code>:last-child</code></td>
          <td>the last child of a group of siblings</td>
        </tr>

        <tr>
          <td><code>:link</code></td>
          <td>a link that’s not been visited</td>
        </tr>

        <tr>
          <td><code>:not()</code></td>
          <td>any element not matching the selector passed. E.g. <code>:not(span)</code></td>
        </tr>

        <tr>
          <td><code>:nth-child()</code></td>
          <td>an element matching the specified position</td>
        </tr>

        <tr>
          <td><code>:nth-last-child()</code></td>
          <td>an element matching the specific position, starting from the end</td>
        </tr>

        <tr>
          <td><code>:only-child</code></td>
          <td>an element without any siblings</td>
        </tr>

        <tr>
          <td><code>:required</code></td>
          <td>a form element with the <code>required</code> attribute set</td>
        </tr>

        <tr>
          <td><code>:root</code></td>
          <td>represents the <code>html</code> element. It’s like targeting <code>html</code>, but it’s more specific. Useful in CSS Custom Properties.</td>
        </tr>

        <tr>
          <td><code>:target</code></td>
          <td>the element matching the current URL fragment (for inner navigation in the page)</td>
        </tr>

        <tr>
          <td><code>:valid</code></td>
          <td>form elements that validated client-side successfully</td>
        </tr>

        <tr>
          <td><code>:visited</code></td>
          <td>a link that’s been visited</td>
        </tr>
      </tbody>
    
    
    </table>
  </section>
  <section>
    <h2>Pseudo elements</h2>
    <p>
      Pseudo-elements are used to style a specific part of an element.
      <br>
      They start with a double colon ::.
    </p>
    <span class="caption">You should use 2 colons to distinguish them from pseudo-classes.</span>
    <p>
      ::before and ::after are probably the most used pseudo-elements. They are used to add content before or after an element, like icons for example.
      <br>
      Here’s the list of the pseudo-elements:
    </p>
    <table>
      <thead>
        <tr>
          <th>Pseudo-element</th>
          <th>Targets</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><code>::after</code></td>
          <td>creates a pseudo-element after the element</td>
        </tr>

        <tr>
          <td><code>::before</code></td>
          <td>creates a pseudo-element before the element</td>
        </tr>

        <tr>
          <td><code>::first-letter</code></td>
          <td>can be used to style the first letter of a block of text</td>
        </tr>

        <tr>
          <td><code>::first-line</code></td>
          <td>can be used to style the first line of a block of text</td>
        </tr>

        <tr>
          <td><code>::selection</code></td>
          <td>targets the text selected by the user</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
</template>

<script>
export default {
  name: 'Selector',
}
</script>
