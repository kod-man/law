"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";
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

import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const templateParams = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      case_type: values.case,
      message: values.yourMessage,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Mesajınız başarıyla gönderildi!",
        className:
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-600 text-white",
      });

      form.reset(); // formu sıfırla
    } catch (error) {
      toast({
        title: "Bir hata oluştu. Lütfen tekrar deneyin.",
        className:
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white",
      });
      console.error("EmailJS Error:", error);
    }
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
                  placeholder="İsim"
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
                  placeholder="Soyisim"
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
                    <SelectValue placeholder="Konu" className="font-normal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Aile Hukuku</SelectItem>
                    <SelectItem value="child">İş Hukuku</SelectItem>
                    <SelectItem value="business">Ceza Hukuku</SelectItem>
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
                  placeholder="Mesajınızı buraya yazın."
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
          Bize Ulaşın
        </Button>
      </form>
    </Form>
  );
}
