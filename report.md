JIRAG Project Report – Summary for Management
________________________________________
Summary
JIRAG is an intelligent assistant that helps quickly understand technical issues, find the right experts, and avoid repeating past mistakes — turning JIRA data into actionable insights.
________________________________________
Core Problems
Problem 1: Information Overload, Slower Decisions
•	Issue: Technical JIRA tickets are complex and time-consuming to digest.
•	Current State: 
SPAE-2549 contain dozens of technical comments; 
CPC-2187 spans multiple specialized discussions.
•	Impact: Delayed decisions, hard to catch up with long JIRA tickets.
Problem 2: Expertise Hard to Find, Issues Stagnate
•	Issue: When new problems arise, it’s unclear who has relevant experience.
•	Current State: Engineers rely on informal networks to find help — inefficient and inconsistent.
•	Impact: Resolution time delayed, affecting project timelines.
Problem 3: Repeating Mistakes, Wasting Resources
•	Issue: The same problems reoccur, and solutions are buried in closed tickets.
•	Current State: Historical fixes are scattered across thousands of resolved issues.
•	Impact: Engineers spend their time re-solving known issues.
________________________________________
Potential Applications
Application 1: JIRA Ticket Summarization - Understand Complex Tickets in Minutes
Solves: Enables leadership to grasp technical issues quickly without deep diving.
Example:
•	Ticket SPAE-2549: PCIe Gen6 link training failure. Over 90 comments
•	Traditional: 2–3 hours to read all comments.
•	JIRAG: 5-minute executive summary.
Sample Output:
 ________________________________________
Application 2: Find the Right Expert in Seconds (Not Hours)
Solves: Rapidly connects problems with the most qualified people.
Example:
•	New error: “OCT TO error reports doesn’t trigger SNCM interrupt”
•	Traditional: Email chains, new JIRA ticket, multiple cc …
•	JIRAG: expert list with context.
Sample Output:
  
________________________________________
Application 3: Retrieve Historical Solutions in Minutes
Solves: Provide potential solutions to Error Message (from DVT) from similar JIRA tickets
Example:
•	Common error: “RC Lane Errors during link stress on SMC AMD Gen 5 Server AS-1126HS-TN”
•	Traditional: Engineers start from scratch, risking duplicate work.
•	JIRAG: 
SMC U.2 Gen 5 server showing RC Lane Errors during link stress. Tested with CPR B0, CPC, and competitor drives.
Affected server: AS-1126HS-TN (AMD)
failed: Link Disable/Enable, Speed change, EQ, Retrain, Hot Reset
 
Sample Output:
Solution from CPC-3298:  
1. Step 1: Confirm firmware version is v2.1.3  
2. Step 2: Run diagnostic: diag --check-lock  
3. Step 3: If locked, use: unlock_tool --force  
4. Caution: Avoid peak hours
________________________________________
JIRAG
Data Foundation
•	Thousands of existing JIRA tickets across projects (CPC, SPAE, ESCC).
•	Rich technical discussions and resolutions across hardware, firmware, and software domains.
Proven Technology
•	Three-layer knowledge graph for contextual understanding (HIRAG).
•	AI-powered natural language queries.
•	Fully local deployment options for data security.
Clear ROI
•	Engineers save time during various information retrial process.
•	Leadership decisions accelerate 
•	Institutional knowledge preserved, even as experts transition.
________________________________________
Risk Mitigation
Data Security: High
•	Fully local deployment option — data never leaves the infrastructure.
User Adoption: Medium
•	Intuitive natural language interface — no training needed.
•	Gradual rollout to ensure smooth transition.
________________________________________
Conclusion
JIRAG is not another complex system — it’s a practical, intelligent tool designed for real-world impact:
•	For Leadership: Understand complex issues in minutes.
•	For Engineers: Find experts in seconds, retrieve solutions in minutes.
•	For the Organization: Eliminate redundant work, accelerate resolution, and preserve institutional knowledge.
By transforming your JIRA data into a dynamic, intelligent knowledge graph, JIRAG empowers your teams to work smarter, faster, and more collaboratively — turning historical data into future advantage.________________________________________
Tech Intro
TLDR:
Traditional RAG systems see JIRA as a text dump.
HiRAG sees it as a structured engineering story — with phases, timelines, corrections, and multiple threads — and extracts knowledge that’s accurate, traceable, and truly useful.________________________________________
Current Key JIRA Pain Points in Knowledge Extraction
Current LLM-based approaches to processing JIRA tickets often fail to capture the structure, evolution, and context of technical discussions. 
1. Blurring of Discussion Phases
•	Problem: JIRA comments mix initial problem statements, hypotheses, failed attempts, and final solutions — but traditional systems treat them as flat text.
•	Result: The final summary often conflates early confusion with the actual resolution, misleading readers.
2. Loss of Temporal Evolution
•	Problem: The sequence of comments tells a story — hypotheses are proposed, tested, refined, and sometimes abandoned.
•	Result: Without preserving order, the system misses how understanding evolved, making it hard to learn from the process, not just the outcome.
3. Inclusion of Incorrect or Abandoned Ideas
•	Problem: Engineers often test multiple hypotheses in comments — some are wrong or later disproven.
•	Result: Standard RAG systems may incorrectly elevate failed attempts as valid solutions, creating dangerous misinformation.
4. Collapse of Multiple Logical Threads
•	Problem: Many tickets involve multiple sub-issues (e.g., “PCIe link failure” + “FW update hang” + “SNCM interrupt missing”).
•	Result: LLMs tend to merge them into a single narrative, losing the distinct root causes and solutions for each thread.

________________________________________
HiRAG Architecture Directly Addresses These Pain Points
HiRAG (Hierarchical Retrieval-Augmented Generation) is not just a smarter search — it’s a structured reasoning engine that preserves the complexity of technical discourse. 
1. Separates Discussion Phases via Layered Knowledge Graph
HiRAG’s three-layer architecture explicitly models different stages of problem resolution:
•	Local Layer: Captures each comment as a discrete node with metadata (author, timestamp, sentiment, status).
•	Bridge Layer: Classifies comments into phases:
•	Problem Statement
•	Hypothesis / Investigation
•	Failed Attempt
•	Confirmed Fix
•	Global Layer: Aggregates only validated solutions into reusable knowledge.
→ Outcome: Final summaries reflect only the verified resolution, not the exploratory noise.
2. Preserves Temporal Evolution with Graph Relationships
HiRAG treats each comment as a temporal node connected to its predecessor and successor via directed edges.
•	The system can reconstruct the narrative arc:
“Initial assumption → Test failure → New hypothesis → Root cause identified → Fix applied”
Outcome: Users understand how the solution was reached — critical for learning, auditing, and training.
3. Filters Out Incorrect or Abandoned Ideas
HiRAG uses semantic and contextual filtering at the Bridge Layer:
•	Comments marked as “failed,” “incorrect,” or “abandoned” are tagged and excluded from solution summaries.
•	The system identifies “confirmation signals” (e.g., “this fixed it,” “verified in v2.1.3”) to promote only validated knowledge.
Outcome: No more accidental inclusion of wrong fixes — only what actually worked is surfaced.
4. Maintains Multiple Logical Threads via Topic Clustering
HiRAG’s Bridge Layer performs multi-topic segmentation:
•	Uses LLM + graph community detection to identify distinct sub-issues within one ticket.
•	Each sub-issue gets its own mini-knowledge graph:
•	Problem → Investigation → Solution
Outcome: Complex tickets are decomposed into clean, actionable problem-solution pairs — no more information loss.
