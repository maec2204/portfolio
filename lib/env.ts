import "server-only"

interface ServerEnv {
  RESEND_API_KEY: string
  CONTACT_EMAIL: string
}

function requiredEnv(name: keyof ServerEnv): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export function getServerEnv(): ServerEnv {
  return {
    RESEND_API_KEY: requiredEnv("RESEND_API_KEY"),
    CONTACT_EMAIL: requiredEnv("CONTACT_EMAIL"),
  }
}
