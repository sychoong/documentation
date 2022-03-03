<template>
  <div>
    <section>
      <h2>BEM - Block Element Modifier</h2>
      <p>
        The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.
        <br>
        Example writing in the BEM style
      </p>
      <pre>
        <code class="language-css" data-language="css">
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
        </code>
      </pre>
      <p>
        In this CSS methodology a block is a top-level abstraction of a new component, for example a button: .btn { }. This block should be thought of as a parent. Child items, or elements, can be placed inside and these are denoted by two underscores following the name of the block like .btn__price { }. Finally, modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like btn--orange.
      </p>
      <pre>
        <code class="language-markup">
&lt;a class="btn btn--big btn--orange">
  &lt;span class="btn__price">$9.99&lt;/span>
  &lt;span class="btn__text">Subscribe&lt;/span>
&lt;/a>
        </code>
      </pre>
      <h3>
        Why use BEM?
      </h3>
      <p>
        The key benefit of using a syntax like BEM is about improving developer confidence <br>
        Using css with bloated code bases, full of legacy and unknown CSS that we daren’t touch. We lack the confidence to be able to work with and modify existing styles because we fear the consequences of CSS’ globally
        <br>
        If you follow strict BEM conventions, you will be able to update and add to your CSS in the future with the full confidence that your changes will not have side effects.
        <br>
        Another smart part of BEM is that everything is a class and nothing is nested. That makes CSS specificity very flat and low, which is a good idea. It means you won’t end up fighting with yourself over specificity.
      </p>
    </section>
    <section>
      <p>
        If you want to dislike BEM, that’s absolutely fine, but I think it would be hard to argue that having a set of rules that aid in understanding and assist in keeping CSS maintainable is a bad idea.
        <br>
        There are few others methodology such as OOCSS/SMASS 
        <br>
        In the SMACSS methodology, you’re likely to find a CSS classname with three letters. Modifiers then follow the module name with a hyphen: 
      </p>
      <span class="caption">SMACSS</span>
      <pre>
        <code class="language-css" data-language="css">
/* Example Module */
.btn { }

/* Modifier of the btn class */
.btn-primary { }

/* Btn Module with State */
.btn.is-collapsed { }
        </code>
      </pre>
      <span class="caption">OOCSS</span>
      <pre>
        <code class="language-css" data-language="css">
/* Example Module */
.mod { }

/* Part of Module */
.inner { }

/* Talk Module */
.talk { }

/* Variation of part inside Module */
.talk .inner { }
        </code>
      </pre>
      <p>In OOCSS, blocks are similarly generic. <br> That’s just a different naming approach to the same kind of problem. It’s pretty similar.</p>
      <p>
        Extra BEM Methodology Usage
        <a href="https://github.com/danielguillan/bem-constructor">
          https://github.com/danielguillan/bem-constructor
        </a>
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: 'BEM',
}
</script>