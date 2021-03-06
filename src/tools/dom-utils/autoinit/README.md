# ECL Auto init

In order to automatically initialize a component, add `data-ecl-auto-init="[component class]"` to the root element of the component.

For example, if you want to auto initialize a `Message`:

```html
<div
  role="alert"
  class="ecl-message ecl-message--info"
  data-ecl-message="true"
  data-ecl-auto-init="Message"
>
  ... Message component ...
</div>
```

Then, in the footer of the document (or whenever the document is ready), call:

```js
ECL.autoInit();
```

`ECL.autoInit()` returns an object containing:

- list of initialized components
- update method
- destroy method

```html
<div
  role="alert"
  class="ecl-message ecl-message--info"
  data-ecl-message="true"
  data-ecl-auto-init="Message"
  data-ecl-auto-initialized="true"
>
  ... Message component ...
</div>
```

Once `ECL.autoInit()` is called, you can access the component instance via an `ECLMessage` property on that element.

```js
document.querySelector('[data-ecl-message]').ECLMessage.handleClickOnClose();
```
