---
title: Admonitions
---

# Admonitions

[[toc]]

 
## Examples
The kinds of admonitions available include 

The icons for the admonitions use google material icons. 
note, abstract, info, tip, success, question, warning, failure, danger, bug, example, quote.
The icons are styled as in `style.styl` (will be different in vuepress 1.0), and material icons are loaded in `config.js` as a stylesheet.

To use admonitions, examples are below

```
!!! <admonition type> <Admonition title>
Admonition content
!!!
```

```
!!! note Testing Notes
Good Note 
!!!
```

!!! note Testing Notes
Good Note 
!!!

```
!!! abstract Course Outline
This is an abstract
!!!
```

!!! abstract Course Outline
This is an abstract
!!!

```
!!! info Information
Info icon
!!!
```

!!! info Information
Info icon
!!!

```
!!! tip Cool
This is a tip.
!!!
```

!!! tip Cool
This is a tip.
!!!

```
!!! success SUCCESS Thing
This is a success box 
!!!
```

!!! success SUCCESS Thing
This is a success box 
!!!

!!! question Cool Question
I have questions
!!!

```
!!! warning A good warning 
Example of a warning 
!!!
```

!!! warning A good warning 
Example of a warning 
!!!

```
!!! failure I failed
Fail in life.
!!!
```

!!! failure I failed
Fail in life.
!!!

```
!!! danger More danger 
DANGEROUS
!!!
```

!!! danger More danger 
DANGEROUS
!!!

```
!!! bug Software Bug 
I love bugs 
!!!
```
!!! bug Software Bug 
I love bugs 
!!!

```
!!! example Example 1.1 
$$x^2=6.5*5$$
!!!
```
!!! example Example 1.1 
$$x^2=6.5*5$$
!!!

```
!!! quote Qutation
Quote 1.1
!!!
```
!!! quote Qutation
Quote 1.1
!!!

### Table <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |