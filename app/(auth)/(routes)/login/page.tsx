'use client'
import { login, signup } from './actions'

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
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox'
import { roboto, robotoCondensed, robotoBold} from '@/fonts'
import { FloatingLabelInput } from '@/components/ui/floating-label-input';
 
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Phone Number must be at least 2 characters.",
  }),
  enableEmails: z.boolean().default(false).optional(),
  enableTexts: z.boolean().default(false).optional()
})


export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email:"",
      phoneNumber:"",
      enableEmails: false,
      enableTexts: true
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const placeholderStyle = `
  ${robotoBold.className}
  bg-[#EDEDED] 
  rounded-[50px] 
  border-t-0 
  border-b-2 
  border-x-0 
  border-black
  placeholder:${robotoBold.className}
  placeholder:text-black
  placeholder:text-[16px]
  placeholder:font-bold
  focus:border-none
  `

  return (
    <div className='border-black border-solid border-2 w-full h-full px-6'>
      <div className='flex justify-between py-3'>
        <h1 className={`text-[20px] ${robotoCondensed.className}`}>Contact Information</h1>
        <p className={`text-[16px] text-[#EF370D] underline ${robotoBold.className}`}>Sign In</p>
      </div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-yellow-500 border-solid border-1">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* <Input placeholder="First Name" {...field} /> */}
                <FloatingLabelInput {...field} id="First Name" label={
                  <span>
                    First Name <span className='text-[#EF370D] pl-2'>*</span>
                  </span>
                }/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* <Input placeholder="Last Name" {...field} /> */}
                <FloatingLabelInput {...field} id="lastName" label={
                  <span>
                    Last Name <span className='text-[#EF370D] pl-2'>*</span>
                  </span>
                }/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* <Input 
                  placeholder={`Email`} {...field}
                /> */}
                <FloatingLabelInput {...field} id="email" label={
                  <span>
                    Email <span className='text-[#EF370D] pl-2'>*</span>
                  </span>
                }/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* <Input placeholder="Mobile Phone Number" {...field} /> */}
                <FloatingLabelInput {...field} id="phoneNumber" label={
                  <span>
                    Mobile Phone Number <span className='text-[#EF370D] pl-2'>*</span>
                  </span>
                }/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enableEmails"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='rounded-s-md h-[28px] w-[31px] border-2 border-black'
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className={`text-[16px] ${roboto.className}`}>
                Sign me up for Simco’s emails including a FREE welcome appetizer coupon, a FREE desert for my birthday, special offers and more.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enableTexts"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='rounded-s-md h-[28px] w-[31px] border-2 border-black'
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className={`text-[16px] ${roboto.className}`}>
                Receive order info via text messages. This feature will allow the restaurant to be notified of your arrival via text. Message and data rates may apply.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}