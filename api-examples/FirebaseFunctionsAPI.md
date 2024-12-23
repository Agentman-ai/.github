# Firebase Functions API Documentation

## Overview

These endpoints are implemented as Firebase Cloud Functions, providing serverless operations for managing user profiles. The API includes both read and write operations, demonstrating typical Firebase Function implementations with Firestore integration.

Key features:
- Serverless architecture with Firebase Functions
- Direct Firestore database integration
- Real-time data operations
- Automatic scaling and reliability
- Built-in authentication support
- JSON-based data handling
- CORS support for web applications

## Understanding the API Specification Structure

The API specification is structured in JSON format with several key sections that define the endpoints' functionality and requirements.

## API Endpoints

### 1. Get User Profile

#### Endpoint

```
GET https://{region}-{project-id}.cloudfunctions.net/getUserProfile
```

#### Headers

```
Authorization: Bearer {firebase-auth-token}
Content-Type: application/json
```

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| userId | string | Yes | The unique identifier of the user |

#### Success Response

**Status Code:** 200 OK

```json
{
  "userId": "user123",
  "name": "John Doe",
  "email": "john@example.com",
  "preferences": {
    "theme": "dark",
    "notifications": true
  },
  "createdAt": "2024-01-15T08:00:00Z"
}
```

#### Error Responses

- **400 Bad Request**: Invalid userId format
- **401 Unauthorized**: Invalid or missing authentication token
- **404 Not Found**: User profile does not exist
- **500 Internal Server Error**: Firebase operation failed

### 2. Update User Profile

#### Endpoint

```
PUT https://{region}-{project-id}.cloudfunctions.net/updateUserProfile
```

#### Headers

```
Authorization: Bearer {firebase-auth-token}
Content-Type: application/json
```

#### Request Body

```json
{
  "userId": "user123",
  "name": "John Doe",
  "email": "john@example.com",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}
```

#### Success Response

**Status Code:** 200 OK

```json
{
  "success": true,
  "message": "Profile updated successfully",
  "updatedAt": "2024-01-15T08:30:00Z"
}
```

#### Error Responses

- **400 Bad Request**: Invalid request body
- **401 Unauthorized**: Invalid or missing authentication token
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: User profile does not exist
- **500 Internal Server Error**: Firebase operation failed

## Complete JSON Specification

### Get User Profile

```json
{
  "name": "GetUserProfile",
  "description": "Retrieves a user's profile information from Firestore",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "GET",
    "url": "https://{region}-{project-id}.cloudfunctions.net/getUserProfile",
    "headers": {
      "Authorization": "Bearer {firebase-auth-token}",
      "Content-Type": "application/json"
    },
    "query_parameters": {
      "userId": "string"
    }
  },
  "input_model_name": "GetUserProfileInput",
  "input_model_sample": {
    "userId": "user123"
  },
  "input_model_descriptions": {
    "userId": "The unique identifier of the user whose profile is being requested"
  },
  "output_model_sample": {
    "userId": "user123",
    "name": "John Doe",
    "email": "john@example.com",
    "preferences": {
      "theme": "dark",
      "notifications": true
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  "output_model_descriptions": {
    "userId": "Unique identifier of the user",
    "name": "Full name of the user",
    "email": "Email address of the user",
    "preferences": "User preference settings",
    "createdAt": "Timestamp of profile creation"
  },
  "error_responses": {
    "400": {
      "description": "Bad Request - Invalid userId format",
      "example": {
        "error": "Invalid user ID format"
      }
    },
    "401": {
      "description": "Unauthorized - Invalid or missing authentication token",
      "example": {
        "error": "Authentication required"
      }
    },
    "404": {
      "description": "Not Found - User profile does not exist",
      "example": {
        "error": "User profile not found"
      }
    },
    "500": {
      "description": "Internal Server Error - Firebase operation failed",
      "example": {
        "error": "Internal server error"
      }
    }
  }
}
```

### Update User Profile

```json
{
  "name": "UpdateUserProfile",
  "description": "Updates a user's profile information in Firestore",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "PUT",
    "url": "https://{region}-{project-id}.cloudfunctions.net/updateUserProfile",
    "headers": {
      "Authorization": "Bearer {firebase-auth-token}",
      "Content-Type": "application/json"
    },
    "body": {
      "userId": "string",
      "name": "string",
      "email": "string",
      "preferences": {
        "theme": "string",
        "notifications": "boolean"
      }
    }
  },
  "input_model_name": "UpdateUserProfileInput",
  "input_model_sample": {
    "userId": "user123",
    "name": "John Doe",
    "email": "john@example.com",
    "preferences": {
      "theme": "dark",
      "notifications": true
    }
  },
  "input_model_descriptions": {
    "userId": "The unique identifier of the user whose profile is being updated",
    "name": "New full name for the user",
    "email": "New email address for the user",
    "preferences": "Updated user preferences object"
  },
  "output_model_sample": {
    "success": true,
    "message": "Profile updated successfully",
    "updatedAt": "2024-01-15T08:30:00Z"
  },
  "output_model_descriptions": {
    "success": "Boolean indicating whether the update was successful",
    "message": "Description of the operation result",
    "updatedAt": "Timestamp of the update operation"
  },
  "error_responses": {
    "400": {
      "description": "Bad Request - Invalid request body",
      "example": {
        "error": "Invalid email format"
      }
    },
    "401": {
      "description": "Unauthorized - Invalid or missing authentication token",
      "example": {
        "error": "Authentication required"
      }
    },
    "403": {
      "description": "Forbidden - User doesn't have permission to update this profile",
      "example": {
        "error": "Permission denied"
      }
    },
    "404": {
      "description": "Not Found - User profile does not exist",
      "example": {
        "error": "User profile not found"
      }
    },
    "500": {
      "description": "Internal Server Error - Firebase operation failed",
      "example": {
        "error": "Internal server error"
      }
    }
  }
}
```

## Additional Notes

1. **Authentication**
   - Requires Firebase Authentication tokens
   - Include valid Bearer token in Authorization header

2. **Rate Limiting**
   - Subject to Firebase Functions quotas and limits
   - Consider implementing client-side rate limiting for high-volume usage

3. **Best Practices**
   - Validate input data before sending requests
   - Implement proper error handling
   - Use HTTPS for all requests
   - Keep authentication tokens secure