1. Scaling
   If this task API starts receiving thousands of requests per minute, the following problems might occur?

i. Memory overload (in-memory storage will crash)
ii. Single server bottleneck
iii. High response latency under load

2.  Performance Improvements
    The techniques I would use to improve performance

i. Use a database (PostgreSQL / MongoDB)
Instead of storing data in a local variable (which clears when the server restarts), I'll use a database.

ii. Add caching (e.g Redis)
Databases are "slow" because they live on a disk. Redis lives in your RAM (memory).

iii.Load balancing (multiple servers)
One server can only handle so many users before it crashes.

iv. Indexing database fields
Without an index, the database has to read every single row to find a specific record (like reading a whole book to find one word).

3. Production Monitoring
   The metrics I would monitor in production to ensure the API is healthy

i. Response Time: How long the API takes to respond to requests
ii. Error Rate: Track the percentage of failed requests.
Which includes:
4xx errors (client issues), 5xx errors (server issues)
iii. CPU and Memory Usage
iv. Uptime / Availability
v. Authentication & Authorization Failures
vi. Error Logs and Exceptions: Capture detailed logs of failures and unexpected behavior.
