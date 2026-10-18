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