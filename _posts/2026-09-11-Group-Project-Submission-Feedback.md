---
layout: post
title: "Group Project Submission Feedback"
date: 2026-09-11
module: intelligent-agents
tags: [Group Project, Feedback]
summary: "Feedback on Development Project Design Proposal"
---

Below is the feedback we recieved on our Group Project Submission.

Grade: 62% (Merit)

Feedback:

    Knowledge and Understanding of the Topic/Issues Under Consideration (25%) 

    The work demonstrates a satisfactory to very good understanding of multi-agent design patterns, with relevant discussion of sequential, parallel, and loop-based architectures supported by appropriate literature. However, the concept of agent autonomy remains somewhat basic, as the components are largely presented as procedural Python modules within LangGraph rather than as genuinely autonomous agents. 

    

    Application of Knowledge and Understanding (25%) 

    The work clearly identifies relevant tools and libraries, including LangGraph, HTTPX, Pydantic, and open scholarly APIs such as arXiv, OpenAlex, and maps them appropriately to system functions. The implementation also includes bounded retry mechanisms to prevent infinite loops. However, the evaluation of retrieval quality remains relatively high-level and could be explored in greater depth. 

    

    Criticality (25%) 

    The report provides a reasonable critique of multi-agent systems, addressing trade-offs such as latency, computational overhead, error propagation, and security risks including prompt injection. However, the critical analysis is at times somewhat superficial, with generic discussion of risks and limited detail on specific evaluation metrics. 

    Structure and Presentation (25%) 

    The report is structured, follows the assessment guidelines well, and includes three useful visual designs: an activity diagram, sequence diagram, and class diagram. Academic formatting and referencing are generally well maintained, making the proposal clear and easy to navigate. 

    What the Team did well 

    1. Your team included three useful diagrams covering the activity, sequence and class views of the system. This gives a good overall picture of both how the system works and how it is structured. 

    2. Your team compared different agent design patterns and clearly explained why you chose a loop-based approach. It is also good that you have recognised the risk of infinite loops and included a three-cycle limit to deal with this. 

    3. Your team identified a good range of risks, including hallucinations, poor task decomposition, errors between agents and prompt injection. The proposed use of structured schemas, provenance tracking and audit logs shows that you have thought about how these risks could be managed. 

    Guidance for Improvement 

    1. Although references are included, the academic depth relies on brief, generalised statements (e.g., citing Peffers et al. for Design Science or Wooldridge for multi-agent systems) without theoretical framing. Deepen the academic literature review. Rather than using generic definitions of agents, critically synthesise why specific paradigms were selected. 

    2. Your team mention several possible LLMs and ways of running them, but there is not enough detail on their costs, rate limits, context limits, hardware requirements or performance. You should use relevant benchmarks to support your model choices and explain the practical limits of running the models locally or through an API. 

    3. Your group identified useful areas to evaluate, such as retrieval, citations, summaries and latency, but it is not yet clear how you will actually measure them. Include specific test datasets, clear pass/fail targets and automated tests to check things such as JSON parsing and error handling. 