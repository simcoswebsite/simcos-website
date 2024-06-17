'use client'
import { login, signup, reset } from '../actions'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from '@/components/ui/checkbox'
import { roboto, robotoCondensed, robotoBold} from '@/fonts'
import { FloatingLabelInput } from '@/components/ui/floating-label-input';

const resetSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  })
})

export default function ResetPasswordPage() {
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email:""
    },
  })

  async function onSubmit(values: z.infer<typeof resetSchema>) {
    try {
      await reset(values);
    } catch (error) {
      console.error("Error during reset:", error);
    }
  }

  return (
    <div className='w-full h-full px-6'>
      <div className='flex flex-col justify-between py-3'>
        <h1 className={`text-[20px] ${robotoCondensed.className}`}>Forgot Password?</h1>
        <p className={`text-[13px] ${roboto.className}`}>Please enter your email</p>
      </div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-yellow-500 border-solid border-1">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput {...field} id="email" label={
                  <span>
                    Email
                  </span>
                }/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-between py-3'>
          <Button variant={"auth"} type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
  )
}