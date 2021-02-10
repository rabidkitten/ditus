# Icons

[FontAwesome](https://fontawesome.com/) is used to provide icons within the application. While there are other icon libraries within existence, this particular library is rather extensive and adding another library will contribute further to the size of the product.

## Using an Icon

Icons are loaded at the start of the application. To use an icon in code, simply import the library:

``` js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
```

On the FontAwesome web site, the icon for a check mark is shown as:

``` js
<i class="fas fa-check"></i>
```

To use this icon, simply add the following component. The first string specified in the icon property is the first word specified in the class above (fas). The second string specified in the icon property is the second word in the class specified in the class above with the prefix removed. In this example, it is 'check' (since 'fa' is removed):

``` js
<FontAwesomeIcon icon={['fas', 'check']} />
```
