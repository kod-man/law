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
import { useToast } from "../ui/use-toast";

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
  const { toast } = useToast();

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
    toast({
      title: "Form Submitted Successfully.",
      className:
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-background text-white",
    });
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
                  className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-bold text-background placeholder:text-base placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-bold text-background placeholder:text-base placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-bold text-background placeholder:text-base placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  <SelectTrigger className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 text-base text-background placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
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
                  className="h-48 w-full resize-none rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-bold text-background placeholder:text-base placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-auto rounded-none border bg-primary-main px-7 py-[14px] text-base font-bold uppercase text-white transition-colors duration-300 ease-in hover:border-primary-main hover:bg-white hover:text-primary-main"
        >
          Contact Us
        </Button>
      </form>
    </Form>
  );
}
