---
title: Diagrams
---
# Diagrams

List of diagrams possible with `vuepress-theme-cool`
## Mermaid

<mermaid>
graph TD
  A[Silvester] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>


---


## PlantUml
```js
@startuml
graph {
    a -- b;
    b -- c;
    a -- c;
    d -- c;
    e -- c;
    e -- a;
}
@enduml
```
 

@startuml
Bob -> Alice : hello
@enduml


### Solidity Diagraph 
@startuml
digraph foo {
  node [style=rounded]
  node1 [shape=box]
  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]
  node3 [shape=record, label="{ a | b | c }"]

  node1 -> node2 -> node3
}
@enduml
 

@startuml
strict digraph cool {
  exists [color=blue]
  authenticate [color=blue]
  require
  create
  UserCreated
  destroy
  UserDestroyed
  get [color=blue]
  authenticate -> require
  create -> UserCreated
  destroy -> require
  destroy -> UserDestroyed
  get -> require
}
@enduml

### References

- [Mermaid](https://github.com/knsv/mermaid)
- [Katex](https://github.com/Khan/KaTeX)