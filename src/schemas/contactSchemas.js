import { z } from 'zod';

export const nameValidator = z.string({
  required_error: 'Name is required'
})
  .min(1, { message: 'Name is required' })
  .regex(/^[a-zA-Z]+$/, {
    message: 'Name only can contain letters'
  });

export const lastNameValidator = z.string({
  required_error: 'Last name is required'
})
  .min(1, { message: 'Last name is required' })
  .regex(/^[a-zA-Z]+$/, {
    message: 'Last name only can contain letters'
  });

export const emailValidator = z.email({ error: 'Send a valid email' });

export const message = z.string()
  .min(20, { message: 'Message must be at least 20 characters' })

export const contactSchema = z.object({
  name: nameValidator,
  lastname: lastNameValidator,
  email: emailValidator,
  message: message
});