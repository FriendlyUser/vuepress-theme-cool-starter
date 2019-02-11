---
title: Diagrams
---
# Diagrams

List of diagrams possible with `vuepress-theme-cool`
## Mermaid


```js 
@startuml
Bob -> Alice : hello
@enduml
```

@startuml
Bob -> Alice : hello
@enduml

```
<mermaid>
graph TD
  A[Silvester] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>
```

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
node in as "input"
node p as "Pre-processing"
node fm as "Feature Mining"
node fs as "Feature Selection"
node fr as "Feature Reduction"
node m as "Modelling"
node a as "Accepted Results?"
node pp as "Post-processing"
node o as "Output"

in -> p
p ..> fm
fm ..> fs
fs ..> fr
fr ..> m
m ..> a
a ..> fm : no
a -> pp : yes
pp -> o 
@enduml
```

@startuml
  node in as "input"
  node p as "Pre-processing"
  node fm as "Feature Mining"
  node fs as "Feature Selection"
  node fr as "Feature Reduction"
  node m as "Modelling"
  node a as "Accepted Results?"
  node pp as "Post-processing"
  node o as "Output"

  in -> p
  p ..> fm
  fm ..> fs
  fs ..> fr
  fr ..> m
  m ..> a
  a ..> fm : no
  a -> pp : yes
  pp -> o 
@enduml

```js 
@startuml 
  |Required Steps|
  :"Start Assignment";
  |#AntiqueWhite|Documentation|
  :Create Git Repo/Overleaf;
  :Copy Down Questions;
  |#LightBlue|Git|
  :Initial Barebones Commit;
  |Required Steps|
  :"Answer Questions";
  :"Submit Assignment";
  |Git|
  :"Update Local Repo";
  :"Update CENG4B Notes;
  stop
@enduml 
```

@startuml 
|Required Steps|
:"Start Assignment";
|#AntiqueWhite|Documentation|
:Create Git Repo/Overleaf;
:Copy Down Questions;
|#LightBlue|Git|
:Initial Barebones Commit;
|Required Steps|
:"Answer Questions";
:"Submit Assignment";
|Git|
:"Update Local Repo";
:"Update CENG4B Notes;
stop
@enduml 

```js 
  @startuml 
 (*) --> [File System ] "input.json " 
  note left
  1. Read Entire File into memory
  end note
  -->[Available Memory]"JSON data loaded in memory"
  note left
  2. Process file
  in memory.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8 
  end note
  --> [File System] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
  @enduml
```

@startuml 
 (*) --> [File System ] "input.json " 
  note left
  1. Read Entire File into memory
  end note
  -->[Available Memory]"JSON data loaded in memory"
  note left
  2. Process file
  in memory.
  end note
  note right
  When loading a file into
  memory to be parsed as
  JSON or CSV, we’re limited
  by the max string size
  in Node.js: around 536 MB
  as of Node v8 
  end note
  --> [File System] "output.json"
  note left
  3. Write transform data back into system
  end note
  --> (*)
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
 
```js 
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
```

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