
# A11y Navbar
Proof of concept for an accessible navbar following the W3's WAI-ARIA 
[Example Disclosure for Navigation Menus](https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-navigation.html) originally authored by [Sarah Higley](https://sarahmhigley.com/)

[![Edit a11y-navbar](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/xaviervalarino/a11y-navbar/tree/main/?fontsize=14&hidenavigation=1&theme=dark)

## Run locally
```sh
npm i      # install deps
npm start  # should open browser at localhost:3000
```




## VoiceOver Demo
Two videos where I demo how the current nav and this POC work with VoiceOver assistive technology.

🔊 **Sound on** 🔊
### Current

https://user-images.githubusercontent.com/4262486/141005135-fc05a99b-6d49-4eee-a4ee-ccb533e7c01b.mp4

### POC

https://user-images.githubusercontent.com/4262486/141005227-a0c0cf43-a317-48e7-8807-5b39fe07c434.mp4

## General structure
* Announces that the button expands and collapses invisible content to screen readers through `aria-controls` and `aria-haspopup` (`accessibilityControls` and `accessibilityHaspopup` props in Gestalt)
* Allows for easier keyboard navigation by making the disclosure button and sub-list as siblings 

Here is some pseudo-xml to illustrate:
```xml
<list> <!-- navbar links -->

  <listItem>
    <button aria-controls='1'>
      1. Disclosure button
    </button>

    <list id='1'> <!-- hide/show controlled by button -->
      <listItem> 1.1 Item </listItem>
      <listItem> 1.2 Item </listItem>
      <listItem> 1.3 Item </listItem>
    </list>
  </listItem>

  <listItem>
    2. Item
  </listItem>

  <listItem>
    <button aria-controls='3'>
      3. Disclosure button
    </button>

    <list id='3'> <!-- hide/show controlled by button -->
      <listItem> 3.1 Item </listItem>
      <listItem> 3.2 Item </listItem>
    </list>
  </listItem>
</list>
```
