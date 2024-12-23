# Calling Cal.com AI: Get Available Dates and Times API Documentation

## Overview

This API endpoint integrates with Cal.com's scheduling system to retrieve available time slots for specific event types. It enables applications to programmatically access calendar availability within a specified date range, making it ideal for scheduling systems and booking interfaces.

Key features:
- Retrieves available time slots for specific Cal.com event types
- Supports custom date range queries
- Returns availability in standardized ISO 8601 format
- Handles timezone-specific scheduling
- Integrates with Cal.com's native scheduling system
- Provides real-time availability updates

## Understanding the API Specification Structure

The API specification is structured in JSON format with several key sections:

1. **name**: The identifier for the API endpoint
2. **description**: A brief explanation of what the endpoint does
3. **function_type**: The type of function (e.g., HTTP)
4. **function_attributes**: Contains the core API details:
   - method: The HTTP method (GET, POST, etc.)
   - url: The endpoint URL with query parameters
   - headers: Required request headers
   - query_parameters: Parameters that should be included in the URL
5. **input_model_name**: Name of the input data model
6. **input_model_sample**: Example of valid input parameters
7. **input_model_descriptions**: Detailed descriptions of each input parameter
8. **output_model_sample**: Example of a successful response
9. **output_model_descriptions**: Detailed descriptions of each response field
10. **error_responses**: Possible error responses with status codes and descriptions

## API Implementation Details

### Endpoint

```
GET https://api.cal.com/v2/slots/available
```

### Headers

```
Authorization: Bearer cal_live_3d32b66becba5e
Content-Type: application/json
```

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| startTime | string | Yes | Start of the time range in ISO 8601 format |
| endTime | string | Yes | End of the time range in ISO 8601 format |
| eventTypeId | string | Yes | The Cal.com event type ID (1447921) |
| eventTypeSlug | string | Yes | The event type slug (30min) |

### Example Request

```
GET https://api.cal.com/v2/slots/available?startTime=2024-11-18T00:00:00.000Z&endTime=2024-11-25T00:00:00.000Z&eventTypeId=1447921&eventTypeSlug=30min
```

### Success Response

**Status Code:** 200 OK

```json
{
  "slots": [
    {
      "time": "2024-11-19T20:30:00Z",
      "availability": "available"
    },
    {
      "time": "2024-11-19T21:00:00Z",
      "availability": "available"
    }
  ]
}
```

### Error Responses

#### 400 Bad Request
Returned when invalid parameters are provided.

#### 401 Unauthorized
Returned when the API key is invalid or missing.

#### 403 Forbidden
Returned when the request lacks sufficient permissions.

#### 404 Not Found
Returned when the specified event type doesn't exist.

#### 429 Too Many Requests
Returned when the rate limit has been exceeded.

#### 500 Internal Server Error
Returned when an unexpected error occurs on Cal.com's servers.

### Implementation Notes

- All datetime values must be in ISO 8601 format (e.g., 2024-11-18T00:00:00.000Z)
- The time range (startTime to endTime) should be reasonable (e.g., within a month)
- The Authorization header must include a valid Cal.com API key
- Rate limiting may apply to this endpoint

## Complete JSON Specification

```json
{
  "name": "GetAvailableDatesAndTimes-CalCom",
  "description": "Retrieves available time slots for a specific Cal.com event type within a specified date range.",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "GET",
    "url": "https://api.cal.com/v2/slots/available?startTime=start_datetime&endTime=end_datetime&eventTypeId=1447921&eventTypeSlug=30min",
    "headers": {
      "Authorization": "Bearer cal_live_3d32b66becba5e",
      "Content-Type": "application/json"
    },
    "query_parameters": {
      "start_datetime": "2024-11-18T00:00:00.000Z",
      "end_datetime": "2024-11-25T00:00:00.000Z"
    }
  },
  "input_model_name": "GetAvailableTimesInput",
  "input_model_sample": {
    "start_datetime": "2024-11-18T00:00:00.000000Z",
    "end_datetime": "2024-11-25T00:00:00.000000Z"
  },
  "input_model_descriptions": {
    "start_datetime": "The start of the time range to fetch availability for the following month, in ISO 8601 format (e.g., 2024-11-18T00:00:00.000000Z).",
    "end_datetime": "The end of the time range to fetch availability for the following month, in ISO 8601 format (e.g., 2024-11-25T00:00:00.000000Z)."
  },
  "output_model_sample": {
    "slots": [
      {
        "time": "2024-11-19T20:30:00Z",
        "availability": "available"
      },
      {
        "time": "2024-11-19T21:00:00Z",
        "availability": "available"
      }
    ]
  },
  "output_model_descriptions": {
    "slots": "List of available time slots for the specified event type.",
    "time": "Start time of the available slot in ISO 8601 format.",
    "availability": "Status of the slot (e.g., 'available')."
  },
  "error_responses": {
    "400": "Bad Request - Invalid parameters provided (e.g., incorrect date format or missing required parameters).",
    "401": "Unauthorized - Invalid or missing API key.",
    "403": "Forbidden - Insufficient permissions to access the requested data.",
    "404": "Not Found - The specified event type does not exist.",
    "429": "Too Many Requests - Rate limit exceeded.",
    "500": "Internal Server Error - An error occurred on Cal.com's side."
  }
}
```

### Additional Notes

1. **Authentication**
   - Requires a Cal.com API key
   - API key should be included in the Authorization header as a Bearer token

2. **Rate Limiting**
   - This endpoint may have rate limits enforced by Cal.com
   - Implement appropriate error handling for 429 responses

3. **Best Practices**
   - Cache responses when possible to minimize API calls
   - Implement retry logic with exponential backoff for failed requests
   - Keep the time range reasonable to ensure good performance