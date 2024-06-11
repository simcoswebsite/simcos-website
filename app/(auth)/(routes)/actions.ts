'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email format.",
  }),
  password:z.string().min(8, {
    message: 'Password must be at least 8 characters long'
  }),
  phoneNumber: z.string().min(2, {
    message: "Phone Number must be at least 2 characters.",
  }),
  enableEmails: z.boolean().default(false).optional(),
  enableTexts: z.boolean().default(false).optional()
});

const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  }),
  password:z.string().min(8, {
    message: 'Password must be at least 8 characters long'
  })
});

export async function login(values: z.infer<typeof loginSchema>) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: values.email,
    password: values.password
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(values: z.infer<typeof formSchema>) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: values.email,
    password: values.password,
    options: {
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phoneNumber,
        enableEmails: values.enableEmails,
        enableTexts: values.enableTexts
      }
    }
  };

  const { error } = await supabase.auth.signUp(data)
  console.log(values)
  if (error) {
    console.error("Signup error:", error);
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}