# Title: 
ACT_DB

# Author: 
Chris Mayes

# Abstract: 

## Problem
Students benefit from large volumes of practice directed at real ACT problems
that target specific skills (e.g. circular geometry, comma rules, etc).
However, identifying relevant problems can be challenging for tutors because
exams are not typically organized by content type.

## Solution
ACT_DB will implement a RESTful API that exposes a CRUD interface
for a MongoDB database containing documents relevant to ACT questions.

Specifically, this service will provide a minimum viable product that covers 
ONE ACT exam for the English section, dealing with Triangle Academic 
Coach's Twenty Rules for the English section. 

As part of this, a class hierarchy for Test and Question objects will be implemented.
These classes will model data on the database. Tests will expose an ID and a list of
Questions; Questions will expose their parent test and the rule(s) tested.

## Non-Goals
This iteration will not cover exams besides the ACT English, nor will it allow users
to add tags other than the 20 English rules. Additionally, no GUI will be created;
the exposed interface will be a RESTful API. Additionally, the question model will not
hold any data aside from the test where it belongs and the rules tested.

## Existing Solution
Most tests currently have a "debrief" Google Doc that include question types and descriptions.
Tutors can manually search these documents for questions they would like to review. No technical
way of querying ALL tests currently exists.

## Technical Decisions & Alternatives

### Microservice vs Monolithic Architecture

### MongoDB vs Relational DB
The principal advantage of a relational DB is ACID compliance, but do we anticipate complex
sets of transactions where maintaining thorough consistency is important?  Or is it satisfactory
that users enjoy only eventual consistency?

Most user-facing transactions will be read operations: users will retrieve relevant sets of questions.
Write, update, and delete will only be done in occasional (likely monthly) batches as new tests are added, 
errors are corrected, or outdated question sets are removed. Because of this, consistency is a low priority.

Meanwhile, MongoDB and Mongoose provide highly flexible ways of interacting with data; developers have prior
experience with both technologies, so cost of learning will be lower; and we will be able to use JavaScript
from top to bottom on the application.
