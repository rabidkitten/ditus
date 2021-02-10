# Localization

## What is Localization

Localization allows the displaying of UI content and data in several different languages. For example, for UI content localization, the caption of a field that contains a name would read "Name" in English and "Nom" in French. The value that is entered into the field is data. For example, typing "Andrew" in English or "Andres" in Spanish.

## Which Types of Localization Are Supported

Currently, only UI content is localizable within DITUS. Data exists in whatever language it is entered in.

## Which Languages are Available

Currently, the product is only translated in English (US).

## How Do I Add Another Language

All repositories use the same method for localization. Translations are stored in [https://github.com/rabidkitten/ditus-ui/tree/main/public/translations](https://github.com/rabidkitten/ditus-ui/tree/main/public/translations) in JSON files. Changes can be made by following our development contribution guidelines.

Each file represents a different translation. For example, 'en.json' represents English and 'fr.json' represents French.

The files contain a set of key/value pairs where the keys are pre-defined and the values are what are displayed to the user.

For example, in English, to change the caption of "First Name" everywhere, you would modify the following key in the 'en.json' file:

``` JSON
"common.firstName": "First Name",
```

To translate it to French, in the 'fr.json' file, you would add:

``` JSON
"common.firstName": "Prénom",
```

Notice that the key, that is what is on the left-side of the colon (:), is pre-defined and does not change, however the value on the right, which is the translated value, does. All keys and values are surrounded by double "quotes" and all keys, except for the last key in the file, have a comma at the end of the line as shown.

## General Guidelines for Contributing

Keys are generally named as follows:

``` JSON
<module>.<sub-module>.<screen>.<field>.<business-rule>
```

For example, in the key:

``` JSON
"humanCapital.recruiting.jobApplication.status": "Status",
```

Human Capital is the module, Recruiting is the sub-module, Job Application is the name of the screen, and Status is the name of the field.

All keys are named using camel case, where the first letter of the word is lowercase and the letter of each subsequent word is capitalized.

In the following example, the specifying of the 'required' business rule, indicates that this is the message that will appear if the user does not select a value in the status drop down on the screen, since it is a required field.

``` JSON
"humanCapital.recruiting.jobApplication.status.required": "Select a status.",
```

There are some exceptions to the rule above. For example, those keys starting with the word `common` represent values that are commonly used throughout the application in all modules. This particular example, is the text that appears on an OK button.

``` JSON
"common.okButton": "OK",
```

Some keys are similar and vary by including the pronoun 'your'. For example:

``` JSON
"common.firstName.required": "Enter the first name.",
"common.yourFirstName.required": "Enter your first name.",
```

In general, this is included only for business rule messages to personalize a message when the field refers to the users own information. Fields that refer to another users information, omit the pronoun from the key.
