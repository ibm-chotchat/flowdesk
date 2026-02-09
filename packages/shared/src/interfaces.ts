/**
 * Shared interfaces for Flowdesk
 * These types are used by both the Angular frontend and NestJS backend
 */

export interface ApiResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}

export interface HealthCheck {
  status: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
