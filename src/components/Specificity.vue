<template>
<div>
  <section>
    <h2>Specificity</h2>
    <p>
      What happens when an element is targeted by multiple rules, with different selectors, that affect the same property?
      <br>
      For example, let’s talk about this element:
    </p>
    <pre>
        <code class="language-markup">
          &lt;p class="dog-name">Roger&lt;/p>
        </code>
      </pre>
    We can have
    <pre>
        <code class="language-css" data-language="css">
          .dog-name {
            color: yellow;
          }
        </code>
      </pre>
    and another rule that targets p, which sets the color to another value:
    <pre>
        <code class="language-css" data-language="css">
          p {
            color: red;
          }
        </code>
      </pre>
    <p>
      And another rule that targets p.dog-name. Which rule is going to take precedence over the others, and why?
      <br>
      Enter specificity. The more specific rule will win. If two or more rules have the same specificity, the one that appears last wins.
    </p>
  </section>
  <section>
    <h2>How to calculate specificity</h2>
    <p>
      Specificity is calculated using a convention.
      <br>
      We have 4 slots, and each one of them starts at 0:
      <code>
        0 0 0 0
      </code>
      . The slot at the left is the most important, and the rightmost one is the least important.
      <br>
      Like it works for numbers in the decimal system:
      <code>
        1 0 0 0
      </code>
      is higher than
      <code>
        0 1 0 0
      </code>
      .
    </p>
    <h3>
      Slot 1
    </h3>
    <p>
      The first slot, the rightmost one, is the least important.
      <br>
      We increase this value when we have an element selector. An element is a tag name. If you have more than one element selector in the rule, you increment accordingly the value stored in this slot.
      <br>
      Examples:
    </p>
    <pre>
        <code class="language-css" data-language="css">
          p {
          } /* 0 0 0 1 */

          span {
          } /* 0 0 0 1 */

          p span {
          } /* 0 0 0 2 */

          p > span {
          } /* 0 0 0 2 */
          
          div p > span {
          } /* 0 0 0 3 */
        </code>
      </pre>
    <h3>
      Slot 2
    </h3>
    <p>
      The second slot is incremented by 3 things:
      <br>
      <ul class="list-disc">
        <li>class selectors</li>
        <li>pseudo-class selectors</li>
        <li>attribute selectors</li>
      </ul>
      <br>
      Every time a rule meets one of those, we increment the value of the second column from the right.
      <br>
      Examples:
    </p>
    <pre>
        <code class="language-css" data-language="css">
          .name {
          } /* 0 0 1 0 */

          .users .name {
          } /* 0 0 2 0 */

          [href$=".pdf"] {
          } /* 0 0 1 0 */

          :hover {
          } /* 0 0 1 0 */
        </code>
      </pre>
    <p>
      Of course slot 2 selectors can be combined with slot 1 selectors:
    </p>
    <pre>
        <code class="language-css" data-language="css">
          div .name {
          } /* 0 0 1 1 */

          a[href$=".pdf"] {
          } /* 0 0 1 1 */

          .pictures img:hover {
          } /* 0 0 2 1 */
        </code>
      </pre>
    <p>
      One nice trick with classes is that you can repeat the same class and increase the specificity.
      <br>
      For example:
    </p>
    <pre>
        <code class="language-css" data-language="css">
          .name {
          } /* 0 0 1 0 */

          .name.name {
          } /* 0 0 2 0 */

          .name.name.name {
          } /* 0 0 3 0 */
        </code>
      </pre>
    <h3>
      Slot 3
    </h3>
    <p>
      Slot 3 holds the most important thing that can affect your CSS specificity in a CSS file: the id.
      <br>
      Every element can have an id attribute assigned, and we can use that in our stylesheet to target the element.
      <br>
      Examples:
    </p>
    <pre>
        <code class="language-css" data-language="css">
          #name {
          } /* 0 1 0 0 */

          .user #name {
          } /* 0 1 1 0 */

          #name span {
          } /* 0 1 0 1 */
        </code>
      </pre>
    <h3>
      Slot 4
    </h3>
    <p>
      Slot 4 is affected by inline styles. Any inline style will have precedence over any rule defined in an external CSS file, or inside the style tag in the page header.
      <br>
      Example:
    </p>
    <pre>
        <code class="language-markup">
        &lt;p style="color: red">Test&lt;/p> 

        /* 1 0 0 0 */
        </code>
      </pre>
    <p>
      Even if any other rule in the CSS defines the color, this inline style rule is going to be applied. Except for one case - if !important is used, which fills the slot 5.
    </p>
    <h3>
      Tools to calculate the specificity
    </h3>
    <p>
      You can use the site
      <a href="https://specificity.keegan.st/" target="_blank">
        https://specificity.keegan.st/
      </a>
      to perform the specificity calculation for you automatically.
      <br>
      It’s useful especially if you are trying to figure things out, as it can be a nice feedback tool.
    </p>
  </section>
  <section>
    <h2>Using !important to force a style</h2>
    <p>
      Specificity does not matter if a rule ends with
      <code>
        !important:
      </code>
    </p>
    <pre>
        <code class="language-css" data-language="css">
          p {
            font-size: 20px !important;
          }
        </code>
      </pre>
    <p>
      That rule will take precedence over any rule with more specificity
      <br>
      Adding
      <code>
        !important
      </code>
      in a CSS rule is going to make that rule be more important than any other rule, according to the specificity rules. The only way another rule can take precedence is to have !important as well, and have higher specificity in the other less important slots.
    </p>

    <h3>Tips</h3>
    <p>
      In general you should use the amount of specificity you need, but not more. In this way, you can craft other selectors to overwrite the rules set by preceding rules without going mad.
      <br>
      <code>
        !important
      </code>
      is a highly debated tool that CSS offers us. Many CSS experts advocate against using it. I find myself using it especially when trying out some style and a CSS rule has so much specificity that I need to use !important to make the browser apply my new CSS.
      <br>
      But generally, !important should have no place in your CSS files.
      <br>
      Using the id attribute to style CSS is also debated a lot, since it has a very high specificity. A good alternative is to use classes instead, which have less specificity, and so they are easier to work with, and they are more powerful (you can have multiple classes for an element, and a class can be reused multiple times).
      <br>
      <b class="font-bold text-red-500">Please avoid using it :)</b>
    </p>
  </section>
  <section>
    <h2>Cascade and Inheritance</h2>
    <p>
      Cascade is a fundamental concept of CSS. After all, it’s in the name itself, the first C of CSS - Cascading Style Sheets - it must be an important thing.
      <br>
      Cascade is the process, or algorithm, that determines the properties applied to each element on the page. Trying to converge from a list of CSS rules that are defined in various places.
      <br>
      It does so taking in consideration:
    </p>
    <ul class="list-disc">
      <li>specificity</li>
      <li>importance</li>
      <li>inheritance</li>
      <li>order in the file</li>
    </ul>
    <p>
      When you set some properties on a selector in CSS, they are inherited by all the children of that selector.
      <br>
      I said <i>some</i> ,
      because not all properties show this behaviour.
      <br>
      This happens because some properties make sense to be inherited. This helps us write CSS much more concisely, since we don’t have to explicitly set that property again on every single children.
    </p>
    <h3>Properties that inherit</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>border-collapse</td>
          <td>border-spacing</td>
          <td>caption-side</td>
        </tr>

        <tr>
          <td>color</td>
          <td>cursor</td>
          <td>direction</td>
        </tr>

        <tr>
          <td>empty-cells</td>
          <td>font-family</td>
          <td>font-size</td>
        </tr>

        <tr>
          <td>font-style</td>
          <td>font-variant</td>
          <td>font-weight</td>
        </tr>

        <tr>
          <td>font-size-adjust</td>
          <td>font-stretch</td>
          <td>font</td>
        </tr>

        <tr>
          <td>letter-spacing</td>
          <td>line-height</td>
          <td>list-style-image</td>
        </tr>

        <tr>
          <td>list-style-position</td>
          <td>list-style-type</td>
          <td>list-style</td>
        </tr>

        <tr>
          <td>orphans</td>
          <td>quotes</td>
          <td>tab-size</td>
        </tr>

        <tr>
          <td>text-align</td>
          <td>text-align-last</td>
          <td>text-decoration-color</td>
        </tr>

        <tr>
          <td>text-indent</td>
          <td>text-justify</td>
          <td>text-shadow</td>
        </tr>

        <tr>
          <td>text-transform</td>
          <td>visibility</td>
          <td>white-space</td>
        </tr>

        <tr>
          <td>widows</td>
          <td>word-break</td>
          <td>word-spacing</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
</template>

<script>
export default {
  name: 'Specificity',
}
</script>
