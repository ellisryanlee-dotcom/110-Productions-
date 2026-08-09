---
id: kc-0003
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [json, data-types, arrays, objects, debugging]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# n8n data types and JSON literacy

**What:** Every value moving through n8n is one of five underlying types — string (text), number, boolean, array (an ordered list), or object (a nested bundle of any of the other types, including other objects) — and the whole platform represents data as JSON key/value pairs. Recognizing a field's type, and knowing how to hand-construct arrays/objects when a node expects one, is a prerequisite for wiring any two nodes together correctly.

**Why it matters:** A large share of "broken automation" errors are simply a type mismatch — a node expecting a list receiving a single text value, or expecting a nested object receiving a flat string — and the fix is almost always to reshape the data into the correct type rather than anything more complex.

**The moves:**
1. Read a field's type from its visual cues in n8n: strings are quoted text with a letter icon, numbers are unquoted digits with a number icon, booleans are unquoted true/false with a checkbox icon, arrays are wrapped in square brackets, objects are wrapped in curly braces.
2. When a node reports it "expected an array/object but got a string," rebuild the value using correct JSON syntax (square brackets with comma-separated quoted items for an array; curly braces with key:value pairs for an object) rather than relying on an "ignore type conversion" escape hatch, which silently degrades the data instead of fixing it.
3. Use a general-purpose chat model as a JSON translator while building: paste a data blob and ask for a plain-language explanation, or describe a structure in plain language and ask for the equivalent JSON — this removes the need to hand-write JSON syntax from memory.
4. Remember arrays are zero-indexed (the first item is index 0) — this trips up manual counting when eyeballing how many items a step produced.
5. When a workflow needs to send a fixed JSON body to an external system, paste any hand-authored or model-generated JSON into a "set fields from JSON" style node rather than mapping each field one at a time.

**Watch out for:** Copy-pasting JSON from one interface into another can silently break indentation/nesting (a schema block that renders correctly in one tool becomes invalid once pasted elsewhere) — if a node reports invalid JSON, pasting the exact error alongside the JSON into a chat model to ask what's wrong is a fast diagnostic step.

**Original example to invent:** Source built its string/number/boolean/array/object demo entirely from a sample "name, age, interests, project" personal record. Writers should teach the same five types through a different sample record, such as an order or an inventory item.
