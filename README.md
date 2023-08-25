# Performance testing with K6

Set of performance testing scripts for web pages usign Grafana's K6 tool with JavaScript, following Sergio Estrella's performance testing course.

## Tools and tecnologies used

* [K6](https://k6.io/docs/)
* Node.js

## Test types

- Smoke performance testing
- Load performance testing
- Peak performance testing
- Soak performance testing
- Stress performance testing

## Save metrics in file

```bash
# run script with K6 and save ALL metrics
# k6 run --out [archive-type=archive-name.xxx] script.name
k6 run --out json=load-test.json load.js
```

## Save only the resume

```bash
# k6 run --summary-export=archive-name.xxx script.js
k6 run --summary-export=results.json script.js
```

## Metric types

- Counter
- Gauge
- Rate
- Trent

## Checks and Thresholds



## Build by ODCenteno