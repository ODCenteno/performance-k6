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

### Guardar las métricas en un archivo

```bash
# Corriendo un script con K6 y guardarndo TODAS las métricas en un archivo
# k6 run --out [archive-type=archive-name.xxx] script.name
k6 run --our json=load-test.json load.js
```

### Guardar solo el resumen de los resultados

```bash
# k6 run --summary-export=archive-name.xxx script.js
k6 run --summary-export=results.json script.js
```

## Metric types

- Counter
- Gauge
- Rate
- Trent

## Build by ODCenteno