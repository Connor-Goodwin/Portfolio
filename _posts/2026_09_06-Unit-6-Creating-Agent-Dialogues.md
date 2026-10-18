# Unit 6 - Creating Agent Dialogues

## Task:
Create an agent dialogue, using KQML and KIF, between two agents (named Alice and Bob).

Alice is an agent designed to procure stock and Bob is an agent that controls the stock levels for a warehouse. This dialogue should see Alice asking Bob about the available stock of 50 inch televisions, and also querying the number of HDMI slots the televisions have.

## Answer:

Alice asks an initial query, looking for the amount of 50 Inch TVs in stock

    (ask-one
        :sender Alice
        :reciever Bob
        :language KIF
        :ontology warehouse-inventory
        :reply-with q01
        :content stock-level TV-50-Inches ?qty
    ) 

Bob then responds with the current stock level of the TVs

    (tell
        :sender Bob
        :reciever Alice
        :language KIF
        :ontology warehouse-stock
        :in-reply-to q01
        :content stock-level  TV-50-Inches 100
    )

Now Alice starts a new question about the number of HDMI Ports on the 50 Inch TV

    (ask-one
        :sender Alice
        :reciever Bob
        :language KIF
        :ontology warehouse-inventory
        :reply-with q02
        :content hdmi-ports TV-50-Inches ?n
    )

Bob responds to the second question (q02) with the number of HDMI ports on the TV

    (tell
        :sender Bob
        :reciever Alice
        :language KIF
        :ontology warehouse-stock
        :in-reply-to q02
        :content hdmi-ports TV-50-Inches 2
    )