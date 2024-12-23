# Shopify Admin API Documentation

## Overview

These endpoints are part of the Shopify Admin API 2024-01 version, providing access to order and product information for a Shopify store. The API enables retrieval of detailed order information and product searches, making it suitable for order management systems, customer service applications, and inventory management tools.

Key features:
- Secure authentication using Shopify Access Tokens
- Real-time order status and details retrieval
- Product search functionality with keyword support
- Comprehensive order verification system
- Integration with Shopify Admin API 2024-01
- Support for product availability and pricing information
- Email-based order verification

## Understanding the API Specification Structure

The API specification is structured in JSON format with several key sections that define the endpoints' functionality and requirements.

## API Endpoints

### 1. Fetch Order Details

#### Endpoint

```
GET https://{shop-name}.myshopify.com/admin/api/2024-01/orders/{order_id}.json
```

#### Headers

```
X-Shopify-Access-Token: {access-token}
Content-Type: application/json
```

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The order number to fetch details for |
| email | string | Yes | Email address used when placing the order |

#### Example Request

```
GET https://{shop-name}.myshopify.com/admin/api/2024-01/orders/1001.json?email=joe@gmail.com
```

#### Example Input

```json
{
  "name": "1001",
  "email": "joe@gmail.com"
}
```

### 2. Fetch Product Details

#### Endpoint

```
GET https://{shop-name}.myshopify.com/admin/api/2024-01/products.json
```

#### Headers

```
X-Shopify-Access-Token: {access-token}
Content-Type: application/json
```

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | Yes | Keywords to search in product title and description |

#### Example Request

```
GET https://{shop-name}.myshopify.com/admin/api/2024-01/products.json?query=Snowboard
```

#### Example Input

```json
{
  "query": "Snowboard"
}
```

## Complete JSON Specification

### Order Details Endpoint

```json
{
  "name": "FetchOrderDetails",
  "description": "Returns detailed information on an order including confirmation number verification",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "GET",
    "url": "https://{shop-name}.myshopify.com/admin/api/2024-01/orders/{order_id}.json",
    "headers": {
      "X-Shopify-Access-Token": "{access-token}",
      "Content-Type": "application/json"
    },
    "query_parameters": {
      "name": "order_id",
      "email": "email_address"
    }
  },
  "input_model_name": "FetchOrderDetails",
  "input_model_sample": {
    "name": "1001",
    "email": "joe@gmail.com"
  },
  "input_model_descriptions": {
    "name": "The number of the order to fetch details for.",
    "email": "The email address that was used when placing the order"
  }
}
```

### Product Details Endpoint

```json
{
  "name": "FetchProductDetails",
  "description": "Returns detailed information on specifications, availability, and pricing for a given product specified using a keyword or keywords located in the title or product details.",
  "function_type": "HTTP",
  "function_attributes": {
    "method": "GET",
    "url": "https://{shop-name}.myshopify.com/admin/api/2024-01/products.json",
    "headers": {
      "X-Shopify-Access-Token": "{access-token}",
      "Content-Type": "application/json"
    },
    "query_parameters": {
      "query": "keywords"
    }
  },
  "input_model_name": "FetchProductDetails",
  "input_model_sample": {
    "query": "Snowboard"
  },
  "input_model_descriptions": {
    "query": "The keywords to search for in the product title and description."
  }
}
```

### Implementation Notes

1. **Authentication**
   - Requires a valid Shopify Access Token
   - Token must have appropriate permissions for orders and products
   - Include token in X-Shopify-Access-Token header

2. **Rate Limiting**
   - Subject to Shopify's API rate limits
   - Implement retry logic with exponential backoff
   - Monitor rate limit headers in responses

3. **Best Practices**
   - Cache product data when appropriate
   - Validate order IDs and email addresses before sending requests
   - Implement error handling for invalid requests
   - Use HTTPS for all requests
   - Never expose access tokens in client-side code
   - Rotate access tokens periodically

4. **Version Information**
   - Using Shopify Admin API version 2024-01
   - Check Shopify's changelog for version-specific features
   - Plan for version updates and deprecations

### Security Notes

- Replace `{shop-name}` with your Shopify store's subdomain
- Replace `{access-token}` with your Shopify Admin API access token
- Keep access tokens secure and never expose them in client-side code
- Consider implementing an API proxy to protect tokens
- Monitor API usage for unauthorized access