# Code Coverage

## Exceptions

Some files can be exempted from code coverage. These files are generally those for which creating a unit test would simply be ineffective. Such files include:

* Enumerations; and,
* Configuration Files

All other files should have unit tests.

To exempt a JavaScript file from code coverage, simply include the following at very the top of the file before any imports or code:

``` js
/* istanbul ignore file */
```
