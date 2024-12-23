# Google Cloud Function - Get Current Datetime API Documentation

## Overview

This API endpoint is implemented as a Google Cloud Function deployed in the `us-central1` region. It provides the current date and time for a specified timezone using the IANA timezone database.

## Understanding the API Specification Structure

The API specification is structured in JSON format with several key sections:

1. **name**: The identifier for the Google Cloud Function
2. **description**: A brief explanation of the function's purpose
3. **function_type**: The type of function (HTTP in this case)
4. **function_attributes**: Contains the core API details:
   - method: The HTTP method (POST)
   - url: The Cloud Function's URL
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
POST https://us-central1-logical-light-427516-v5.cloudfunctions.net/get_current_datetime
```

### Headers

```
Content-Type: application/json
```

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| timezone | string | Yes | IANA timezone identifier (e.g., "America/Los_Angeles") |

### Example Request

```json
{
  "timezone": "America/Los_Angeles"
}
```

### Success Response

**Status Code:** 200 OK

```json
{
  "timezone": "America/Los_Angeles",
  "current_datetime": "2024-12-03 10:00:00 PST-0800"
}
```

### Error Responses

#### 400 Bad Request
Returned when the timezone is missing or invalid.

```json
{
  "error": "Please provide a timezone in the request body"
}
```

#### 500 Internal Server Error
Returned when an unexpected error occurs in the Cloud Function.

```json
{
  "error": "An unexpected error message"
}
```

### Implementation Notes

- The function accepts IANA timezone identifiers (e.g., "America/New_York", "Europe/London")
- The datetime is returned in a consistent format: 'YYYY-MM-DD HH:mm:ss ZZZZ'
- As this is a Google Cloud Function, it automatically scales based on demand
- The function is deployed in the `us-central1` region

## Complete JSON Specification

```json
{
  "name": "GetCurrentDatetime",
  "description": "Returns the current date and time in a specified timezone using a Google Cloud Function.",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "POST",
    "url": "https://us-central1-logical-light-427516-v5.cloudfunctions.net/get_current_datetime",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "timezone": "America/Los_Angeles"
    }
  },
  "input_model_name": "GetCurrentDatetimeInput",
  "input_model_sample": {
    "timezone": "America/Los_Angeles"
  },
  "input_model_descriptions": {
    "timezone": "The IANA timezone for which the current date and time are requested (e.g., 'America/Los_Angeles')."
  },
  "output_model_sample": {
    "timezone": "America/Los_Angeles",
    "current_datetime": "2024-12-03 10:00:00 PST-0800"
  },
  "output_model_descriptions": {
    "timezone": "The requested IANA timezone.",
    "current_datetime": "The current date and time in the specified timezone, formatted as 'YYYY-MM-DD HH:mm:ss ZZZZ'."
  },
  "error_responses": {
    "400": {
      "description": "Bad Request - The request is missing the 'timezone' field or the provided timezone is invalid.",
      "example": {
        "error": "Please provide a timezone in the request body"
      }
    },
    "500": {
      "description": "Internal Server Error - An unexpected error occurred.",
      "example": {
        "error": "An unexpected error message"
      }
    }
  }
}
```

### Additional Notes

1. **Google Cloud Function Specifics**
   - The function is serverless and automatically scales
   - Cold starts may occur if the function hasn't been invoked recently
   - Function timeout is typically 60 seconds by default

2. **Best Practices**
   - Validate timezone strings before sending requests
   - Implement appropriate error handling
   - Consider caching responses if making frequent requests for the same timezone

3. **Common IANA Timezone Examples**
   - America/New_York
   - Europe/London
   - Asia/Tokyo
   - Pacific/Auckland
   - UTC

4. **Rate Limiting**
   - Standard Google Cloud Function quotas apply
   - Consider implementing client-side rate limiting for high-volume usage