export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

/**
 * Sanitize text input to prevent XSS attacks
 * Removes HTML tags and dangerous characters
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

/**
 * Submit contact form data via Web3Forms
 * Sanitizes inputs and sends email without a server
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  try {
    // Sanitize all inputs to prevent XSS
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      message: sanitizeInput(data.message),
    };

    // Create FormData for Web3Forms
    const formData = new FormData();
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_THREE_FORMS || "");
    formData.append("name", sanitizedData.name);
    formData.append("email", sanitizedData.email);
    formData.append("message", sanitizedData.message);
    formData.append("subject", `Contact Form: Message from ${sanitizedData.name}`);
    formData.append("from_name", "Orchestrate Website");
    formData.append("to", "hello@orchestrate.management");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon.",
      };
    } else {
      throw new Error(result.message || "Failed to send message");
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
    };
  }
}

/**
 * Alternative: Use a third-party form service
 * Uncomment and configure if you prefer services like Formspree, Web3Forms, or EmailJS
 * 
 * Example with Web3Forms (free, no API key needed):
 * 
 * export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
 *   try {
 *     const sanitizedData = {
 *       name: sanitizeInput(data.name),
 *       email: sanitizeInput(data.email),
 *       message: sanitizeInput(data.message),
 *     };
 * 
 *     const response = await fetch("https://api.web3forms.com/submit", {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify({
 *         access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get free at web3forms.com
 *         name: sanitizedData.name,
 *         email: sanitizedData.email,
 *         message: sanitizedData.message,
 *         to: "hello@orchestrate.management",
 *       }),
 *     });
 * 
 *     if (!response.ok) throw new Error("Failed to submit");
 *     
 *     return { success: true, message: "Message sent successfully!" };
 *   } catch (error) {
 *     return { success: false, message: "Failed to send. Please try again." };
 *   }
 * }
 */

/**
 * Validate contact form data
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
} {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

