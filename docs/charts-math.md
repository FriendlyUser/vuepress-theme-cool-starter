---
title: Charts And Math
---

## Charts 

These diagrams are created using one line of code and leveraging the [vue-chartkick](https://github.com/ankane/vue-chartkick) library.

```
<bar-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></bar-chart>
```
<bar-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></bar-chart>

```js 
<pie-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></pie-chart>
```

<pie-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></pie-chart>

```
<column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
```

<column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>

```js
<area-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></area-chart>
```

<area-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></area-chart>

```
<scatter-chart :data="[[174.0, 80.0], [176.5, 82.3]]" xtitle="Size" ytitle="Population"></scatter-chart>
```

<scatter-chart :data="[[174.0, 80.0], [176.5, 82.3]]" xtitle="Size" ytitle="Population"></scatter-chart>

```js
<line-chart :data=" [{name: 'Workout', data: {'2017-01-01': 3, '2017-01-02': 4}},{name: 'Call parents', data: {'2017-01-01': 5, '2017-01-02': 3}}]" />
```
<line-chart :data=" [{name: 'Workout', data: {'2017-01-01': 3, '2017-01-02': 4}},{name: 'Call parents', data: {'2017-01-01': 5, '2017-01-02': 3}}]" />


## Math


$x^2 + x_2 = x^2 + x_2$

$$x^2 + x = x^2 + x$$
See [katex](https://katex.org/docs/supported.html)

### Aside

Standard markdown can be used for vuepress, 
*Random Link*, See [my website](http://url.surge.sh/1)