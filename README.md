# Scranimate
A simple Javascript + CSS package to animate items into view as the user scrolls them into the viewport.

## Installation
```bash
npm i treetop1500/scranimate
```
---
## Usage
### Using @import
```javascript
@import treetop1500/scranimate;
```

### Using require
```javascript
require('node_modules/treetop1500/scranimate');
```

### Configuring Animated Elements

 In order to have items animate in as they come into view, add two classes:

- `scranimate` 
- `scranimate-right` | `scranimate-left` | `scranimate-down` | `scranimate-up`

The first class `scranimate` initializes the object to be animated.  The second class (choose one from the list above) is the direction in which the object animates.

---

## Example

In the following example the paragraph will animate into the right when it is 50% within the viewport.

```html
<p class="scranimate scranimate-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus elit sit amet ipsum varius sollicitudin. Vivamus lacinia venenatis erat. Nulla consequat turpis et hendrerit tristique. Suspendisse eleifend elit porttitor magna vehicula, in pharetra augue imperdiet. Integer ut tincidunt nunc, vel finibus ligula. Integer eleifend congue augue, sed blandit mauris blandit nec. In ac leo diam. Fusce dictum lectus ac nulla condimentum rhoncus. Suspendisse potenti. Phasellus luctus orci in gravida accumsan. Pellentesque nec sodales nunc.
</p>
```

## Todo

 - Allow configuration of animation specifics such as timing and easing.
 - Allow configuration of viewport percentage that initiates animation.