# Tune-css

A configurable base stylesheet for all browsers and devices.

Tune-css brings the essentials of [normalize.css](https://necolas.github.io/normalize.css/), [fluidity](https://github.com/mrmrs/fluidity) and [html5 boilerplate](https://html5boilerplate.com/) together and allows you to configure the defaults they set using sass. 

Tune-css also sets vertical-rhythm using the techniques described by Harry Roberts [here](http://csswizardry.com/2012/06/single-direction-margin-declarations/), and it includes defaults from Adam Morse's [Links](http://mrmrs.io/links/) and [Buttons](http://mrmrs.io/btns/). But these more opinionated styles can easily be removed using the configuration options.

## Features

+ Adapts output to browsers, and minimum versions to support.
+ Uses the same browser names/keys as [Browserslist](https://github.com/ai/browserslist).
+ Includes options for more opinionated base styles (vertical rhythm, typescale, margins, etc.).
+ Allows developers to customize the styles applied for normalization*.
+ Allows developers to selectively include normalize/fluidity/h5bp modules.
+ Allows developer to control how length units are converted.

*In some cases, browser-support may require a fixed style, which will override the custom styles provided by the developer.

### Coming soon

+ Split modules into elements that can be imported separately
+ Allow including modules dynamically and/or using mixins
+ Include fallbacks for legacy browsers (rem, text-decoration shorthand, colors, etc.)
+ Warn in cases custom styles conflict with browser support (Instead of overriding).
+ Optionally warn for modules that are not included in the output.
+ Advanced normalization of form elements?? (Better to leave default styles seen sparse support?)

## Credits

Tune-css started as a fork from John Albin's [normalize-scss](https://github.com/JohnAlbin/normalize-scss), a normalize.css port to Sass. It allows more fine-grainded tuning out of the box, tests for browser support more precisely, and adds more opinionated styles.

These additions come mainly from the works of [Adam Morse](http://mrmrs.cc/) and [Harry Roberts](http://csswizardry.com/).