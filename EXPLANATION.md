1. Approach

I built a RESTful API using Express.js following a modular structure. The application is organized into routes, controllers, middleware, and data layers to ensure separation of concerns.

Each endpoint was implemented based on the defined business rules, with a focus on:

- Input validation
- Authorization checks
- Proper HTTP status codes
- Clear and consistent API responses

Authorization is implemented using a custom middleware that extracts the user ID from the `x-user-id` header.

The system enforces the following rules:

- Only the assignercan update, delete, or unassign a task.
- Only the assignee can update the task status.

This ensures proper role-based control over task operations.

For simplicity and speed, I used in-memory storage to manage tasks.

2. Why This Structure?

I adopted a layered architecture for the following reasons:

i. Separation of concerns: Routes handle request mapping, controllers handle business logic, and middleware handles cross-cutting concerns like authentication.
ii. Maintainability: The structure makes the codebase easier to read, debug, and extend.
iii. Scalability: This structure can easily be extended to include services, databases, and additional features without major refactoring.

3. Assumptions

i. The authenticated user ID is provided via the `x-user-id` header.
ii. No persistent database is required for this implementation.
iii. Task IDs are generated incrementally.

4. Improvements

i. Integrate a database (e.g., MongoDB or PostgreSQL) for persistence
ii. Implement proper authentication using JWT
iii. Add request validation
iv. Introduce logging and monitoring tools

5. Tools Used

i. Node.js with Express.js for backend development
ii. Postman for API testing
iii. ChatGPT
