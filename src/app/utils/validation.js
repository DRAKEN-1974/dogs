export const validators = {
    name: (value) => {
      return value && value.length >= 2 && value.length <= 100
    },
  
    email: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    },
  
    phone: (value) => {
      if (!value) return true // Phone is optional
      const phoneRegex = /^\+?[\d\s-()]{8,}$/
      return phoneRegex.test(value)
    },
  
    message: (value) => {
      return value && value.length >= 10 && value.length <= 1000
    }
  }