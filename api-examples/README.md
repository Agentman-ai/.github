# API and Agent Integration Documentation

## Overview

This repository contains comprehensive API documentation and explains how these APIs are integrated into agents. The documentation covers various services including Shopify Admin API, Cal.com Integration, Google Cloud Functions, Firebase Functions, and Zapier Webhooks, as well as how these APIs become part of agent capabilities.

## Documentation Structure

### API Specifications

Each API specification includes:
- Overview and key features
- Endpoint details and authentication requirements
- Request/response formats with examples
- Error handling information
- Implementation notes and best practices
- Complete JSON specifications
- Security considerations where applicable

### Agent Integration

APIs are integrated into agents through the Tools tab within Agent builder enabling:
- Direct API access within agent tasks
- Structured tool usage in conversation flows
- Parameterized API calls
- Error handling and response processing

## Available APIs

### [Shopify Admin API](./Shopify%20Admin%20API%20Documentation.md)
Integration with Shopify's Admin API (2024-01 version) for accessing order and product information. Includes endpoints for order details retrieval and product searches.
```json
{
  "name": "FetchOrderDetails",
  "description": "Returns order details",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "GET",
    "url": "https://{shop-name}.myshopify.com/admin/api/2024-01/orders/{order_id}.json"
  }
}
```

### [Cal.com Integration](./GetAvailableDatesTimesOnCal.com.md)
Integration with Cal.com's scheduling system for retrieving available time slots, providing programmatic access to calendar availability.
```json
{
  "name": "GetAvailableDatesAndTimes-CalCom",
  "description": "Retrieves available time slots",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "GET",
    "url": "https://api.cal.com/v2/slots/available"
  }
}
```

### [Google Cloud Function - Datetime](./GetCurrentDatetime.md)
A serverless function for timezone-aware datetime operations.
```json
{
  "name": "GetCurrentDatetime",
  "description": "Returns current datetime for timezone",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "POST",
    "url": "https://{region}-{project-id}.cloudfunctions.net/get_current_datetime"
  }
}
```

### [Firebase Functions](./Firebase%20Functions%20Documentation.md)
User profile management operations using Firebase Cloud Functions.
```json
{
  "name": "GetUserProfile",
  "description": "Retrieves user profile",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "GET",
    "url": "https://{region}-{project-id}.cloudfunctions.net/getUserProfile"
  }
}
```

### [Zapier Webhook - Rental Application](./SubmitApplication.md)
Automation for rental application submission and DocuSign integration.
```json
{
  "name": "SubmitApplication",
  "description": "Submits rental application",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "POST",
    "url": "https://hooks.zapier.com/hooks/catch/{webhook-id}"
  }
}
```

## Integration with Agents

APIs are integrated into agents using the following structure:

```json
[
  {
    "name": "SubmitApplication",
    "description": "Submits rental application",
    "function_type": "HTTP",
    "function_attributes": {
        "method": "POST",
        "url": "https://hooks.zapier.com/hooks/catch/{webhook-id}"
    }
    ...
  },
  {
    "name": "GetUserProfile",
    "description": "Retrieves user profile",
    "function_type": "HTTP",
    "function_attributes": {
      "method": "GET",
      "url": "https://{region}-{project-id}.cloudfunctions.net/getUserProfile"
    }
    ...
  },
  {
    ...
  }
]
```

## Common Features

### Authentication Methods
- API Keys
- Bearer Tokens
- Custom Headers
- OAuth 2.0 (where applicable)

### Error Handling
- Standard HTTP status codes
- Detailed error messages
- Error response formatting

### Best Practices
1. **API Implementation**
   - Use HTTPS for all requests
   - Implement proper error handling
   - Follow rate limiting guidelines
   - Cache responses when appropriate

2. **Agent Integration**
   - Use clear, descriptive tool names
   - Include comprehensive documentation
   - Implement proper error handling in tasks
   - Use parameterized credentials

3. **Security**
   - Keep all API keys and tokens secure
   - Never expose credentials in client-side code
   - Regularly rotate authentication credentials
   - Implement proper access controls

## Getting Started

1. Choose the appropriate API for your needs
2. Review the authentication requirements
3. Examine the example requests and responses
4. Integrate the API into your agent's `publicTools`
5. Reference the tool in your agent's tasks
6. Test with the provided example payloads

## Support

For specific questions about each API:
- Shopify API: Refer to Shopify's developer documentation
- Cal.com: Contact Cal.com support
- Google Cloud Functions: Refer to Google Cloud documentation
- Firebase: Refer to Firebase documentation
- Zapier Webhooks: Contact Zapier support

## Version Information

- Shopify Admin API: Version 2024-01
- Cal.com API: v2
- Google Cloud Function: Latest
- Firebase Functions: Latest
- Zapier Webhook: Latest
