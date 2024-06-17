'use client'
import { login, signup, reset, update } from '../actions'
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

const updateSchema = z.object({
  newPassword:z.string().min(8, {
    message: 'Password must be at least 8 characters long'
  })
});

export default function ResetPasswordPage() {
  const form = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      newPassword:""
    },
  })

  async function onSubmit(values: z.infer<typeof updateSchema>) {
    try {
      await update(values);
    } catch (error) {
      console.error("Error during reset:", error);
    }
  }

  return (
    <div className='w-full h-full px-6'>
      <div className='flex flex-col justify-between py-3'>
        <h1 className={`text-[20px] ${robotoCondensed.className}`}>Please update your password</h1>
      </div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-yellow-500 border-solid border-1">
      <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput {...field} id="newPassword" label={
                  <span>
                    New Password
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