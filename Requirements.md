# Stakeholders
- The tutor
- The student

# Problem Statement
Students benefit from large volumes of practice directed at real ACT problems
that target specific skills (e.g. circular geometry, comma rules, etc).
However, identifying relevant problems can be challenging for tutors because
exams are not typically organized by content type.

# User Stories
The tutor submits a query requesting Punctuation problems from the ACT English.
The service responds with a TestID and a list of relevant problems from the exam.

# Functional Requirements
The service must be able to respond to any of Triangle Academic Coach's 20 rules
for the ACT English. Any queries that do NOT consist of one of those rules should
be gracefully rejected. The response should be mostly platform independent (portable).