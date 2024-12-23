# Zapier Webhook - Submitting a Rental Application API Documentation 

## Overview

This API endpoint facilitates the submission of rental applications by automating the DocuSign process. It collects comprehensive applicant information including personal details, employment information, rental history, and financial status. The endpoint processes this information to generate and send out a pre-filled DocuSign rental application document.

Key features:
- Collects and validates applicant personal information
- Handles employment verification details
- Processes current residence and landlord information
- Manages financial disclosure inputs (eviction/bankruptcy history)
- Integrates with DocuSign for automated document generation
- Provides immediate feedback on submission status

## Understanding the API Specification Structure

The API specification is structured in JSON format with several key sections:

1. **name**: The identifier for the API endpoint
2. **description**: A brief explanation of what the endpoint does
3. **function_type**: The type of function (e.g., HTTP)
4. **function_attributes**: Contains the core API details:
   - method: The HTTP method (GET, POST, etc.)
   - url: The endpoint URL
   - headers: Required request headers
   - body: The structure of the request payload
5. **input_model_name**: Name of the input data model
6. **input_model_sample**: Example of a valid request
7. **input_model_descriptions**: Detailed descriptions of each input field
8. **output_model_sample**: Example of a successful response
9. **output_model_descriptions**: Detailed descriptions of each response field
10. **error_responses**: Possible error responses with status codes and examples

## API Implementation Details

### Endpoint

```
POST https://hooks.zapier.com/hooks/catch/20933910/2sgpz72/
```

### Headers

```
Content-Type: application/json
```

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| property_address | string | Yes | Address of the property to be rented |
| monthly_rent | string | Yes | Rent for the property to be rented |
| lease_term | string | Yes | Desired lease term |
| move_in_date | string | Yes | Date the applicant is moving in (YYYY-MM-DD format) |
| applicant_name | string | Yes | Full name of the applicant |
| applicant_phone | string | Yes | Phone number of the applicant |
| applicant_email | string | Yes | Email address of the applicant |
| applicant_street_address | string | Yes | Current street address of the applicant |
| applicant_city | string | Yes | City of the applicant's current address |
| applicant_state | string | Yes | State of the applicant's current address |
| applicant_zip | string | Yes | ZIP code of the applicant's current address |
| move_reason | string | Yes | Reason for moving |
| working_at | string | Yes | Current employer of the applicant |
| supervisor | string | Yes | Name of the applicant's current supervisor |
| supervisor_phone | string | Yes | Phone number of the applicant's current supervisor |
| current_landlord_name | string | Yes | Name of the current landlord |
| current_landlord_phone | string | Yes | Phone number of the current landlord |
| current_monthly_rent | string | Yes | Current monthly rent being paid |
| evicted | string | Yes | Has the applicant ever been evicted? (yes/no) |
| bankruptcy | string | Yes | Has the applicant ever filed for bankruptcy? (yes/no) |

### Example Request

```json
{
  "property_address": "1 Telegraph Ave, Apt #101, Berkeley, CA 94705",
  "monthly_rent": "$2000",
  "lease_term": "12 months",
  "move_in_date": "2025-01-01",
  "applicant_name": "John Doe",
  "applicant_phone": "555-987-6543",
  "applicant_email": "applicant@example.com",
  "applicant_street_address": "123 Elm Street",
  "applicant_city": "Springfield",
  "applicant_state": "IL",
  "applicant_zip": "62701",
  "move_reason": "Relocating for work",
  "working_at": "TechCorp Inc.",
  "supervisor": "Jane Smith",
  "supervisor_phone": "555-555-1212",
  "current_landlord_name": "Joe Smith",
  "current_landlord_phone": "617-851-7777",
  "current_monthly_rent": "$2000",
  "evicted": "no",
  "bankruptcy": "no"
}
```

### Success Response

**Status Code:** 200 OK

```json
{
  "success": true,
  "message": "Rental application submitted successfully.",
  "request_id": "xyz789"
}
```

### Error Responses

#### 400 Bad Request
Returned when the request contains invalid or incomplete data.

```json
{
  "error": "Missing required field: applicant_email"
}
```

#### 401 Unauthorized
Returned when authentication fails.

```json
{
  "error": "Unauthorized access"
}
```

#### 500 Internal Server Error
Returned when an unexpected error occurs on the server.

```json
{
  "error": "An unexpected error occurred while processing the request."
}
```

### Implementation Notes

- All fields in the request body are required
- Phone numbers should be formatted as shown in the example
- Dates should be in YYYY-MM-DD format
- Yes/no fields should contain either "yes" or "no" (case-insensitive)
- Currency values should include the "$" symbol and be formatted as shown in the example

### Rate Limiting

This endpoint may be subject to rate limiting. Please contact support for specific limits and quotas.

## Complete JSON Specification

```json
{
  "name": "SubmitApplication",
  "description": "Posts rental application details to the specified Zapier webhook for further processing.",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "POST",
    "url": "https://hooks.zapier.com/hooks/catch/20933910/2sgpz72/",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "property_address": "string",
      "monthly_rent": "string",
      "lease_term": "string",
      "move_in_date": "string",
      "applicant_name": "string",
      "applicant_phone": "string",
      "applicant_email": "string",
      "applicant_street_address": "string",
      "applicant_city": "string",
      "applicant_state": "string",
      "applicant_zip": "string",
      "move_reason": "string",
      "working_at": "string",
      "supervisor": "string",
      "supervisor_phone": "string",
      "current_landlord_name": "string",
      "current_landlord_phone": "string",
      "current_monthly_rent": "string",
      "evicted": "string",
      "bankruptcy": "string"
    }
  },
  "input_model_name": "PostToRentalApplicationWebhookInput",
  "input_model_sample": {
    "property_address": "1 Telegraph Ave, Apt #101, Berkeley, CA 94705",
    "monthly_rent": "$2000",
    "lease_term": "12 months",
    "move_in_date": "2025-01-01",
    "applicant_name": "Rental Application for Springfield Apartments",
    "applicant_phone": "555-987-6543",
    "applicant_email": "applicant@example.com",
    "applicant_street_address": "123 Elm Street",
    "applicant_city": "Springfield",
    "applicant_state": "IL",
    "applicant_zip": "62701",
    "move_reason": "Relocating for work",
    "working_at": "TechCorp Inc.",
    "supervisor": "Jane Smith",
    "supervisor_phone": "555-555-1212",
    "current_landlord_name": "Joe Smith",
    "current_landlord_phone": "617-851-7777",
    "current_monthly_rent": "$2000",
    "evicted": "no",
    "bankruptcy": "no"
  },
  "input_model_descriptions": {
    "property_address": "Address of the property to be rented.",
    "monthly_rent": "Rent for the property to be rented.",
    "lease_term": "Desired lease term.",
    "move_in_date": "Date the applicant is moving in.",
    "applicant_name": "Applicant name.",
    "applicant_phone": "Phone number of the applicant.",
    "applicant_email": "Email address of the applicant.",
    "applicant_street_address": "The current street address of the applicant.",
    "applicant_city": "City of the applicant's current address.",
    "applicant_state": "State of the applicant's current address.",
    "applicant_zip": "ZIP code of the applicant's current address.",
    "move_reason": "Reason why the applicant is moving.",
    "working_at": "Current employer of the applicant.",
    "supervisor": "Name of the applicant's current supervisor.",
    "supervisor_phone": "Phone number of the applicant's current supervisor.",
    "current_landlord_name": "Name of the current landlord",
    "current_landlord_phone": "Phone number of the current landlord",
    "current_monthly_rent": "Current monthly rent being paid",
    "evicted": "Indicates whether the applicant has ever been evicted (yes/no).",
    "bankruptcy": "Indicates whether the applicant has ever filed for bankruptcy (yes/no)."
  },
  "output_model_sample": {
    "success": true,
    "message": "Rental application submitted successfully.",
    "request_id": "xyz789"
  },
  "output_model_descriptions": {
    "success": "Boolean indicating whether the data was posted successfully.",
    "message": "A message describing the outcome of the operation.",
    "request_id": "Unique identifier for the webhook request, if available."
  },
  "error_responses": {
    "400": {
      "description": "Bad Request - Invalid or incomplete data provided.",
      "example": {
        "error": "Missing required field: applicant_email"
      }
    },
    "401": {
      "description": "Unauthorized - Invalid or missing credentials.",
      "example": {
        "error": "Unauthorized access"
      }
    },
    "500": {
      "description": "Internal Server Error - An unexpected error occurred.",
      "example": {
        "error": "An unexpected error occurred while processing the request."
      }
    }
  }
}
```