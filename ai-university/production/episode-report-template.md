# Episode NNN — production stack report (template)

Fill from the episode's `shots.json` after delivery. Every number is a ledger
aggregation — if a number can't be computed, the ledger was under-filled
during production; fix the logging, not the report.

## Engine usage
- Shots finaled on **Wan 2.2**: N of TOTAL (list ids)
- Shots finaled on **Seedance**: N (list ids + which trigger routed each)
- Shots finaled on **other models**: N (model → ids)

## Efficiency
- Generations attempted per accepted shot: mean / median / worst (shot id)
- Cost per accepted shot: mean / median / range; episode total
- Attempt-cap breaches (shots that hit the 4-generation cap): ids + resolution

## Model fitness by shot type
For each shot_type: which engine passed most often, which failed, dominant
fail_reasons. (This table IS the Episode N+1 routing rule input.)

## Waste analysis
- Credits spent on failed attempts, by engine and by fail_reason
- Failures attributable to keyframe/prompt deficiency (fixable upstream,
  not an engine problem) vs genuine engine limitation
- Shots escalated to premium that Wan should have handled (and inverse:
  Wan attempts that were predictably premium-class — money wasted proving it)

## Recommended routing rules for the next episode
Concrete rule changes, each backed by a ledger stat: "shot_type X → route
straight to Y (Wan failed A of B attempts, fail_reason Z dominant)".
