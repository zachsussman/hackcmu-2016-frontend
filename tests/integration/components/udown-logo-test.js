import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('udown-logo', 'Integration | Component | udown logo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{udown-logo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#udown-logo}}
      template block text
    {{/udown-logo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
