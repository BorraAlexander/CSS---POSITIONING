CSS Positioning | Part 2
CSS Positioning is a way to position HTML Elements anywhere within the document to create complex layouts.

CSS Position Property
The CSS position property specifies where an HTML Element should be positioned in a document.

Position Property Values
The position property can have following position values

static
fixed
relative
absolute

Fixing Navbar at the Top
Fixed Navbar at the top using fixed position property value


Creating Overlay Background
Created an overlay background using fixed position property value


We have already seen about static, fixed and relative values, now in this session lets learn about absolute position value

Let’s take a simple color boxes example to learn and understand about absolute position value.

Let's take a Simple Color Boxes Example

Initial Code :
 
HTML
Expand
  
CSS
Expand
Output:

Absolute
Similar to fixed positioned elements, these elements are also removed from the normal document flow
Elements are positioned with respect to their nearest positioned ancestors
Ancestors
An HTML element that contains other HTML elements is called an Ancestor element.


Positioned Ancestors
An Ancestor element with any of the position values other than static is called a Positioned Ancestor. 

Code:
CSS

Let’s change the elements position based on the positioned ancestor.

If we specify top and left as 0px to the box3 then it will be positioned on the top left corner of the box2 (positioned ancestor).

Code:
CSS
Output:

Code:
CSS
Output:

Code:
CSS
Output:

Code:
CSS
Output:

Changing Positioned Ancestor
If we remove box 2 as positioned ancestor and make box 1 as positioned ancestor.

Then the element (box 3) will be positioned with respect to the box 1.

Code:
CSS
Output:

No Positioned Ancestors
If none of the ancestor elements are positioned, the element will be positioned with respect to the document.

Code:
CSS
Output:

If none of the ancestor elements are positioned, the element will be positioned with respect to the document

Fixed vs Absolute

E-commerce Application
Let’s take a Simple E-commerce Application.

When user clicks on the Color Input  element a Color Palette is opened. This Color Palette should be displayed just below the Color Input.

Initial Code :
  
HTML
Expand
  
CSS
Expand
 
JAVASCRIPT
Expand
Output:

Color Palette
On clicking the Color Input, a Color Palette is opened. This Color palette disturbs the positions of the remaining elements.

The Color Palette should be positioned in such a way that it should not disturb the position of the remaining elements.

Which Position Property value to use?

If we observe, the color palette should come upon other elements so it should be taken out of the normal document flow, so we cannot use static and relative values.

The Color Palette should be removed from the normal document flow and positioned.

If we use fixed position value the element stays in the same position even if we scroll which is not the expected behaviour.

Color palette should move when we scroll the page so we should use absolute position value.

When User scrolls, the color palette should  move accordingly:


Using absolute Value
We can make color palette as the absolute positioned element and select color container as the positioned ancestor and arrange color palette accordingly.

Make color palette element absolute positioned element by providing absolute position value.
Make Select Color Container as the Positioned ancestor by providing relative position value to it.
Adjust the position by specifying top bottom left and right values
Code:
CSS
Output:

Overlapping of Positioned Elements

If you scroll down, the select color container elements appears above the navbar, which is an unexpected behaviour.

Why do select color container elements appear above the Navbar?

When two or more positioned elements overlap, the element that is defined last in the HTML code will be shown on the top.

Select Color Container is placed after the Navbar, So it appears above the Navbar.


CSS z-index Property
The z-index CSS property controls the vertical stacking order of the overlapped elements.
z-index only effects positioned elements with values other than static.
The z-index CSS property accepts two values
auto
integers
Syntax:
To understand how different z-index values work let’s understand with a Simple Color boxes example.

Initial Code:
 
HTML
Expand
  
CSS
Expand
By default, the positioned element that is placed last in the HTML code will be on the top  

z-index values
auto:

By default, every positioned element has a z-index set to auto value

Integers:

We can provide negative/positive integers as a value to the z-index.

The element with greater z-index value will be on the top.

If we specify 1 as z-index value for Box 1 remaining 2 have auto value by default.
z-index 1 takes more priority than auto value.
So Box 1 appears on the top.
Positive Integers:

Negative Integers:

Let’s use z-index property to avoid the unexpected behaviour

Navbar should be of greater z-index value in order to appear on the top

Using z-index Property

Output
