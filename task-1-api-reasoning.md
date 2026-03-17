1.  Validation
    The following validation should be performed before creating an order

a. Data Validation
i. "userId" must exist and be a number
ii. "items" must be a non-empty array
iii. Each item must contain:

- productId (number)
- quantity (positive integer > 0)

b. Business Logic Validation

i. User must exist in the system
ii. Each product must exist
iii. Product must have sufficient stock
iv. Quantity must not exceed available stock

2. Possible Errors
   Possible errors that could occur when processing this request

i. User not found
ii. Product not found
iii. Invalid request body (missing fields, wrong types)
iv. Database failure / server error
v. Insufficient stock

3. HTTP Responses
   These HTTP status codes would be returned for the following scenarios

i. Successful order creation → 201 Created
Reason: Because a new resource is created
ii. Invalid request body → 400 Bad Request
Reason: Client sent wrong data
iii. Product not found → 404 Not Found
Reason: Resource does not exist
iv. Server error → 500 Internal Server Error
Reason: Unexpected backend failure
