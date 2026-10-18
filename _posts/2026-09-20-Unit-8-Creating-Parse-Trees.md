---
layout: post
title: "Unit 8 - Creating Parse Trees"
date: 2026-09-20
module: intelligent-agents
tags: [Formative Activities]
summary: "My solution for the formative activity in Unit 8"
---

# Unit 8 - Creating Parse Trees

## Task
Create a constituency-based parse tree for the following phrases:
1. The government raised interest rates.
2. The internet gives everyone a voice.
3. The man saw the dog with the telescope.

## Solutions

### Solution 1 - The government raised interest rates



```mermaid
graph TD
    S --> NP1[NP]
    S --> VP
    NP1 --> Det1[Det] --> w1[The]
    NP1 --> N1[N] --> w2[government]
    VP --> V1[V] --> w3[raised]
    VP --> NP2[NP]
    NP2 --> N2[N] --> w4[interest]
    NP2 --> N3[N] --> w5[rates]
```

### Solution 2 - The internet gives everyone a voice.

```mermaid
graph TD
    S --> NP1[NP]
    S --> VP
    NP1 --> Det1[Det] --> w1[The]
    NP1 --> N1[N] --> w2[internet]
    VP --> V1[V] --> w3[gives]
    VP --> NP2[NP] --> Pro1[Pro] --> w4[everyone]
    VP --> NP3[NP]
    NP3 --> Det2[Det] --> w5[a]
    NP3 --> N2[N] --> w6[voice]
```

### Solution 3 - The man saw the dog with the telescope.

```mermaid
graph TD
    S --> NP1[NP]
    S --> VP
    NP1 --> Det1[Det] --> w1[The]
    NP1 --> N1[N] --> w2[man]
    VP --> V1[V] --> w3[saw]
    VP --> NP2[NP]
    NP2 --> Det2[Det] --> w4[the]
    NP2 --> N2[N] --> w5[dog]
    VP --> PP1[PP]
    PP1 --> P1[P] --> w6[with]
    PP1 --> NP3[NP]
    NP3 --> Det3[Det] --> w7[the]
    NP3 --> N3[N] --> w8[telescope]
```