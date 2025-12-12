JIRAG Project Update Report
Executive Summary (Non-Technical)
I. Purpose of the Project
Turning Years of JIRA History into Actionable Knowledge

Our organization has accumulated years of valuable troubleshooting experience inside JIRA tickets. Yet in daily operations, this knowledge is not easily reused:

Engineers struggle to find similar past issues

Customer-facing or external teams often assign tickets to the wrong people

Many issues are debugged repeatedly across projects

JIRAG aims to change that by transforming historical JIRA data into a searchable, intelligent knowledge asset that helps teams:

Quickly identify past solutions to similar issues

Automatically route new tickets to the right experts

The core engine is now fully built. It has processed 8,384 historical JIRA tickets and supports all three core applications through internal tools with approximately 95% functional completeness.

II. Application 3: Finding Similar Issues and Past Solutions
The Highest-Value Use Case (Should Be Positioned First)
1. The Current Pain Point

From engineer discussions and process analysis, this is the largest source of wasted time:

JIRA search is keyword-based and poorly suited for technical troubleshooting

Engineers must open many tickets manually to judge similarity

In reality, 20–30% (or more) of all JIRA tickets represent recurring or nearly identical issues

This leads to the same problem being debugged again and again

The result:

Hours lost searching for context

Previously solved issues are “forgotten”

Teams spend significant time rediscovering solutions

2. What JIRAG Can Already Do Today

Through the current internal tool, an engineer can ask:

“I’m seeing this symptom. Have we ever solved something similar before?”

JIRAG responds within seconds by:

Identifying the most similar historical cases
Not based only on keywords, but on the full ticket content.

Highlighting only the “confirmed solutions”
It prioritizes cases with a verified final root cause and solution path.

Summarizing the actionable steps
Engineers can immediately judge whether a past fix applies.

In practice, this reduces the time needed to check historical cases from hours to minutes and directly prevents duplicate debugging.

3. What This Will Enable Next (Recommended Next Phase)

Once integrated into real workflows, JIRAG can provide:

A. Automatic suggestions when a new JIRA ticket is created

Show the submitter and team “Here are similar past issues and how they were resolved.”

In simple cases, customers or external users may be able to try recommended steps immediately, reducing load on engineering.

B. Consolidated “knowledge articles” for recurring problems

When the same issue appears multiple times, JIRAG can automatically produce a standardized reference entry for internal onboarding and troubleshooting.

4. Estimated Development Effort (Backend Only)

The engine is production-ready for pilot use.

Two major steps remain:

Pilot Testing (≈ 2 weeks)

Run with 1–2 teams

Collect real-world evidence of time saved

Validate the relevance of recommended cases and solutions

JIRA Integration (≈ 4–6 weeks)

Trigger recommendations when new tickets are created

Backend-only integration; no UI redesign required

III. Application 2: Automatically Identifying the Right Owner
High Impact for External or Customer-originated Tickets (10–15% of all JIRA)
1. The Current Pain Point

A significant portion of tickets (approx. 10–15%) come from customers or external collaborators. These submitters often do not know:

Which team owns the problem

Who the subject-matter expert (SME) is

As a result:

Tickets get assigned incorrectly

They bounce between teams for days

High-priority issues get unnecessarily delayed

This problem directly impacts customer satisfaction and engineering bandwidth.

2. What JIRAG Can Already Do Today

By analyzing thousands of past tickets, JIRAG can determine:

Which engineers frequently handle certain technologies or error types

Which team usually resolves specific classes of issues

Patterns of ownership across past projects

Currently, engineers can ask:

“Who usually handles issues like this?”

And JIRAG will return a ranked list of likely experts and related historical tickets.

This effectively acts as a data-driven expert routing system, helping:

Support teams assign tickets correctly on the first try

Project managers understand ownership patterns

Leadership identify areas with concentrated expertise and potential risk

3. Next-Step Opportunities
A. Automated expert recommendations during ticket creation

When a ticket is filed or reassigned, the backend can generate a ranked list of suggested owners.

B. Organizational knowledge mapping

Highlight areas where knowledge is overly concentrated, supporting planning for training, hiring, and risk mitigation.

4. Estimated Development Effort (Backend Only)

The expert identification logic is functional today. Remaining work focuses on operationalizing it.

Business rule alignment and tuning: 2–3 weeks

Define what counts as “experienced” for each domain

Adjust weighting to reflect real team expectations

Integrating recommendations into existing ticket workflows: 4–6 weeks

Implement backend triggers when new tickets are created

No disruption to current processes or UI required

IV. Application 1: JIRA Ticket Summarization
Low Priority — Useful but Not a Core Need

After discussions with leadership and engineers, the conclusion is:

Automatic ticket summarization is not a strong demand

Engineers are comfortable reviewing comments themselves

The value is modest compared with Applications 2 and 3

JIRAG already generates reasonable summaries, but this should remain:

An optional add-on

Not a resource priority

Maintained “as is” without additional development investment

V. Current Project Status (Plain-Language Summary)

Based on the two internal reports provided:

1. The core engine is complete

8,384 JIRA tickets analyzed

Full backend functionality for all three applications

Processing, indexing, and search capabilities are in place

2. The system is ready for pilot testing

Engineers can already use the internal CLI tools

Most remaining work relates to workflow integration, not model development

3. The next phase focuses on practical adoption, not technology

The technology is proven

The immediate goal is incorporating Applications 2 and 3 into daily operations

VI. Recommended Next Steps (No UI Work Required)
1. Prioritize Applications

Highest Priority:
Application 3 – Similar Case Retrieval & Past Solutions

Second Priority:
Application 2 – Expert Identification & Ticket Routing

Optional:
Application 1 – Ticket Summarization

2. Rollout Plan
Step 1: Internal Pilot (≈ 2 weeks)

Select 1–2 teams

Measure actual time saved

Collect 5–10 strong success cases

Step 2: Integrate into Ticket Workflow (≈ 4–6 weeks)

When tickets are created, automatically:

Recommend similar past issues

Suggest likely owners/experts

All done via backend; no UI redesign needed

Step 3: Evaluate Impact and Expand

If pilot shows clear productivity gains, expand to more teams

If needed, develop lightweight additional automation

VII. Final Summary: Why This Project Matters
JIRAG addresses two of the biggest operational inefficiencies:
1. Engineers repeatedly solve the same problems

Application 3 directly reduces rework and accelerates troubleshooting.

2. Tickets are frequently assigned to the wrong people

Application 2 shortens resolution paths, especially for customer-driven tickets.

Ticket summarization is optional

It offers convenience, but not core business value.

The engine is already built

What remains is integrating it into real workflows and validating impact with pilot users.
