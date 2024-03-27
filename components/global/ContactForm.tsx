"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const formSchema = z.object({
  firstName: z.string().min(3, {
    message: "First Name must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "Last Name must be at least 3 characters.",
  }),
  email: z.string().email(),
  case: z.string(),
  yourMessage: z.string().min(15),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      case: "",
      yourMessage: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal bg-white rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
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
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal bg-white rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
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
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal bg-white rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="case"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-12 px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] text-base placeholder:text-background placeholder:font-normal bg-white rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue
                      placeholder="Your Case Falls In?"
                      className="font-normal"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family Law</SelectItem>
                    <SelectItem value="child">Child Custody</SelectItem>
                    <SelectItem value="business">Business Fraud</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yourMessage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  {...field}
                  className="px-4 py-2 w-full text-background border-[1px] border-[#e8e6e6] placeholder:text-base placeholder:text-background font-bold placeholder:font-normal h-48 resize-none bg-white rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="text-base font-bold bg-primary-main uppercase text-white border-[1px] px-7 py-[14px] hover:border-primary-main hover:bg-white hover:text-primary-main transition-colors ease-in duration-300 rounded-none h-auto"
        >
          Contact Us
        </Button>
      </form>
    </Form>
  );
}
