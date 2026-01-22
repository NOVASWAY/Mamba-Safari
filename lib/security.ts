/**
 * Security utilities for input validation and sanitization
 */

/**
 * Sanitizes a string by removing potentially dangerous characters
 * and limiting length to prevent DoS attacks
 */
export function sanitizeInput(input: string | null | undefined, maxLength: number = 1000): string {
  if (!input) return ''
  
  // Trim whitespace
  let sanitized = input.trim()
  
  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  
  // Remove null bytes and other control characters (except newlines and tabs)
  sanitized = sanitized.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '')
  
  return sanitized
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254 // RFC 5321
}

/**
 * Validates name (allows letters, spaces, hyphens, apostrophes, and common international characters)
 */
export function isValidName(name: string): boolean {
  // Allows letters, spaces, hyphens, apostrophes, and common international characters
  const nameRegex = /^[\p{L}\s'-]+$/u
  return nameRegex.test(name) && name.length >= 1 && name.length <= 100
}

/**
 * Validates country name
 */
export function isValidCountry(country: string): boolean {
  // Allows letters, spaces, hyphens, and common international characters
  const countryRegex = /^[\p{L}\s'-]+$/u
  return countryRegex.test(country) && country.length >= 1 && country.length <= 100
}

/**
 * Validates and sanitizes form data
 */
export interface FormData {
  name: string
  email: string
  country: string
  dates: string | null
  message: string | null
}

export function validateAndSanitizeFormData(
  rawName: string | null,
  rawEmail: string | null,
  rawCountry: string | null,
  rawDates: string | null,
  rawMessage: string | null
): { isValid: boolean; data: FormData | null; errors: string[] } {
  const errors: string[] = []
  
  // Sanitize inputs
  const name = sanitizeInput(rawName, 100)
  const email = sanitizeInput(rawEmail, 254)
  const country = sanitizeInput(rawCountry, 100)
  const dates = sanitizeInput(rawDates, 50) || null
  const message = sanitizeInput(rawMessage, 2000) || null
  
  // Validate required fields
  if (!name || !isValidName(name)) {
    errors.push('Please provide a valid name')
  }
  
  if (!email || !isValidEmail(email)) {
    errors.push('Please provide a valid email address')
  }
  
  if (!country || !isValidCountry(country)) {
    errors.push('Please provide a valid country')
  }
  
  // Check for suspicious patterns (basic XSS detection)
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ]
  
  const allInputs = [name, email, country, dates, message].filter(Boolean).join(' ')
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(allInputs)) {
      errors.push('Invalid characters detected in form data')
      break
    }
  }
  
  if (errors.length > 0) {
    return { isValid: false, data: null, errors }
  }
  
  return {
    isValid: true,
    data: { name, email, country, dates, message },
    errors: [],
  }
}

